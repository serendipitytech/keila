# Docker Build Instructions for Serendipity-Branded Keila

## Prerequisites
- Docker installed and running
- GitHub Personal Access Token with `read:packages` and `write:packages` scope
- Access to the serendipitytech GitHub organization

## Build on VPS (168.231.71.143)

SSH into the VPS:
```bash
ssh root@168.231.71.143
```

Clone the repository (if not already present):
```bash
cd /root
export GNUPGHOME=/home/node/.openclaw/workspace/.gnupg
export PASSWORD_STORE_DIR=/home/node/.openclaw/workspace/.password-store
PAT=$(pass show github/serendipity-pat)
git clone https://${PAT}@github.com/serendipitytech/keila.git serendipity-keila
cd serendipity-keila
```

Or update if already cloned:
```bash
cd /root/serendipity-keila
git pull origin main
```

Build the Docker image:
```bash
docker build -f ops/Dockerfile -t serendipity-keila:latest .
```

**Note:** The build process will:
1. Use Elixir 1.18-alpine base image
2. Install dependencies (Elixir, npm, build tools)
3. Compile Elixir dependencies
4. Install npm packages for assets
5. Compile and deploy assets (including our rebranded templates and Tailwind config)
6. Create a production release

Expected build time: 5-15 minutes depending on cache and network speed.

## Push to GitHub Container Registry

Login to ghcr.io:
```bash
echo $PAT | docker login ghcr.io -u serendipitytech --password-stdin
```

Tag the image:
```bash
docker tag serendipity-keila:latest ghcr.io/serendipitytech/keila:latest
```

Push to registry:
```bash
docker push ghcr.io/serendipitytech/keila:latest
```

## Deploy to Production

Update the docker-compose.yml file at `/docker/keila/docker-compose.yml` to use the new image:

```yaml
services:
  keila-app:
    image: ghcr.io/serendipitytech/keila:latest
    # ... rest of config
```

Pull and restart:
```bash
cd /docker/keila
docker-compose pull keila-app
docker-compose up -d keila-app
```

Verify the deployment:
```bash
docker-compose logs -f keila-app
```

Check the web interface at https://mail.serendipitylabs.cloud to verify branding appears correctly.

## Troubleshooting

### Build fails with dependency errors
```bash
# Clear Docker build cache
docker builder prune -a
# Retry build
docker build --no-cache -f ops/Dockerfile -t serendipity-keila:latest .
```

### Authentication fails to ghcr.io
```bash
# Verify PAT has correct scopes:
curl -H "Authorization: token $PAT" https://api.github.com/user
# Should return user info for serendipitytech
```

### Assets not updating
The Elixir release includes compiled assets. If visual changes aren't appearing:
1. Verify the git commit includes the template changes
2. Rebuild the Docker image completely (no cache)
3. Force-pull the new image in production
4. Clear browser cache

## Verification Checklist

After deployment, verify:
- [ ] Logo in sidebar shows Serendipity icon
- [ ] Page title shows "· Serendipity" instead of "· Keila"
- [ ] Footer shows "Serendipity" branding
- [ ] Links in footer point to serendipitytechnology.com
- [ ] Colors match Serendipity blue (#4FC4F0) not emerald green
- [ ] Login page shows correct branding
- [ ] Email placeholders say "you@example.com" not "you@keila.io"

## Rollback

If issues arise, rollback to the upstream Keila image:

```bash
cd /docker/keila
# Edit docker-compose.yml to use: pentacent/keila:latest
docker-compose up -d keila-app
```

---
*Created: 2026-03-30*
