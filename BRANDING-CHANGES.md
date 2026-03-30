# Serendipity Technology Branding Changes

This document tracks all branding modifications made to the Keila newsletter platform fork for Serendipity Technology.

## Modified Files

### Logo Assets
- **`priv/vendor/keila-icons/logo.svg`** - Replaced Keila elephant logo with Serendipity icon vector
- **`assets/static/images/og_image.png`** - Replaced with Serendipity stacked logo (300px)
- **`assets/static/images/og_image.svg`** - Replaced with Serendipity icon vector

### Color Scheme
- **`assets/tailwind.config.js`** - Extended Tailwind config to remap `emerald-*` color classes to Serendipity brand colors:
  - emerald-400: #4FC4F0 (Primary Blue)
  - emerald-500: #2ba8d4
  - emerald-600: #1a8ab8
  - Full palette from 50-900 matching Serendipity brand guidelines

### Template Files - Text Changes

#### Layout Templates
- **`lib/keila_web/templates/layout/root.html.heex`**
  - Page title: "Open Source Newsletter Tool" → "Newsletter Platform"
  - Brand suffix: "· Keila" → "· Serendipity"
  - Meta description: "Open Source Newsletters" → "Newsletter Platform"

- **`lib/keila_web/templates/layout/_menu.html.heex`**
  - Logo text in sidebar: "Keila" → "Serendipity"
  - Logo text in public header: "Keila" → "Serendipity"

- **`lib/keila_web/templates/layout/_footer.html.heex`**
  - Footer heading: "Keila" → "Serendipity"
  - Footer tagline: "Open Source Newsletters" → "Newsletter Platform"
  - Removed external links to keila.io docs and community
  - Added link to serendipitytechnology.com
  - Changed grid from 3-column to 2-column layout

#### Auth Templates
- **`lib/keila_web/templates/auth/register.html.heex`**
  - "Start sending emails with Keila now" → "Start sending emails with Serendipity now"
  - "Register your Keila account" → "Register your Serendipity account"
  - Email placeholder: "you@keila.io" → "you@example.com"

- **`lib/keila_web/templates/auth/login.html.heex`**
  - Email placeholder: "you@keila.io" → "you@example.com"

- **`lib/keila_web/templates/auth/reset.html.heex`**
  - Email placeholder: "you@keila.io" → "you@example.com"

#### Admin Templates
- **`lib/keila_web/templates/instance_admin/show.html.heex`**
  - "running Keila" → "running Serendipity"
  - "your Keila instance" → "your Serendipity instance"
  - "version of Keila" → "version of Serendipity"

- **`lib/keila_web/templates/user_admin/index.html.heex`**
  - "your Keila instance" → "your Serendipity instance"

- **`lib/keila_web/templates/user_admin/new.html.heex`**
  - Email placeholder: "you@keila.io" → "you@example.com"

- **`lib/keila_web/templates/shared_sender_admin/index.html.heex`**
  - "this instance of Keila" → "this instance of Serendipity"

#### Campaign Templates
- **`lib/keila_web/templates/campaign/_wysiwyg_dialogs.html.heex`**
  - Link placeholder: "https://keila.io" → "https://serendipitytechnology.com"
  - Title placeholder: "Open Source Newsletters" → "Newsletter Platform"
  - Documentation link: "https://www.keila.io/docs/campaigns" → "https://serendipitytechnology.com"
  - "in Keila" → "in Serendipity"

- **`lib/keila_web/templates/campaign/stats_live.html.heex`**
  - "trying out Keila" → "trying out Serendipity"

#### API & Other Templates
- **`lib/keila_web/templates/api_key/_empty_state.html.heex`**
  - "the Keila API" → "the Serendipity API"

- **`lib/keila_web/templates/account/edit.html.heex`**
  - Email placeholder: "you@keila.io" → "you@example.com"

- **`lib/keila_web/templates/public_form_layout/root.html.heex`**
  - Page title: "Open Source Newsletter Tool" → "Newsletter Platform"
  - Meta description: "Open Source Newsletters" → "Newsletter Platform"
  - Brand suffix: "· Keila" → "· Serendipity"

## Brand Colors Applied

The official Serendipity Technology color palette has been integrated:

- **Primary Blue (#4FC4F0)** - Links, headers, icons
- **Accent Orange (#F7B06A)** - Available for highlights (not yet applied)
- **Charcoal (#1F2937)** - Primary text
- **Slate (#475569)** - Secondary text
- **Light Gray (#E5E7EB)** - Dividers, backgrounds

The existing template CSS classes using `emerald-*` now render with Serendipity blue tones.

## Logo Assets Source

All logo assets were copied from `/home/node/.openclaw/workspace/repos/main.serendipitytechnology.com/img/logos/`:
- `serendipity_icon_vector.svg` - Icon/logo mark
- `serendipity_stacked_300.png` - Stacked layout for OG image
- Brand guidelines followed per `docs/serendipity-brand-guide.md`

## What Was NOT Changed

To maintain upgradeability and minimize disruption:
- Module names remain prefixed with `Keila*` (e.g., `KeilaWeb`, `Keila.Mailings`)
- Database schema unchanged
- Environment variables unchanged (still use `KEILA_*` prefix)
- Hex package name unchanged
- No changes to core functionality
- Code comments and internal documentation unchanged

## Docker Build

The Docker image is built using the production Dockerfile at `ops/Dockerfile`. No modifications were needed to the build process.

Build command:
```bash
docker build -f ops/Dockerfile -t serendipity-keila:latest .
```

Push to GitHub Container Registry:
```bash
docker tag serendipity-keila:latest ghcr.io/serendipitytech/keila:latest
docker push ghcr.io/serendipitytech/keila:latest
```

## Rebase Strategy

To rebase on upstream Keila updates:
1. Add upstream remote: `git remote add upstream https://github.com/pentacent/keila.git`
2. Fetch upstream: `git fetch upstream`
3. Review changes: `git log --oneline main..upstream/main`
4. Rebase: `git rebase upstream/main`
5. Resolve conflicts in the files listed above
6. Re-verify branding after rebase

The isolated nature of these changes (primarily text strings and static assets) should make rebasing straightforward.

---
*Created: 2026-03-30*
*Keila Version: v0.19.0*
