# Visual Changes Reference

This document describes the visual changes users will see after the rebrand.

## Color Changes

### Before (Keila)
- Primary color: Emerald green (#10b981, #059669)
- Logo: Elephant icon in emerald
- Overall feel: Green tech branding

### After (Serendipity)
- Primary color: Serendipity blue (#4FC4F0)
- Logo: Serendipity S-circle icon in blue
- Overall feel: Professional civic tech branding

All instances of:
- `text-emerald-500` → now renders as Serendipity blue #4FC4F0
- `text-emerald-600` → now renders as Serendipity blue #1a8ab8
- `bg-emerald-*` → now renders with Serendipity blue tones

## Logo Changes

### Sidebar (Logged In Users)
**Before**: Elephant icon + "Keila" text
**After**: Serendipity S-circle icon + "Serendipity" text

Location: Left sidebar, top section

### Public Header (Logged Out)
**Before**: Larger elephant icon + "Keila" text in emerald
**After**: Larger Serendipity icon + "Serendipity" text in blue

Location: Top center of login/register pages

### Footer
**Before**: 
- Elephant icon + "Keila" bold text
- "Open Source Newsletters" tagline
- Links to keila.io docs, GitHub, Twitter, newsletter

**After**:
- Serendipity icon + "Serendipity" bold text
- "Newsletter Platform" tagline
- Link to serendipitytechnology.com only

## Page Titles (Browser Tab)

All pages now show:
- "Dashboard · Serendipity" (was "Dashboard · Keila")
- "Login · Serendipity" (was "Login · Keila")
- Etc.

## Meta Tags (Social Sharing)

When sharing links on social media:
- OG image: Now shows Serendipity stacked logo
- Description: "Newsletter Platform" (was "Open Source Newsletters")

## Text Changes by Page

### Login Page
- Email placeholder: "you@example.com" (was "you@keila.io")
- No other visible changes

### Register Page
- Heading: "Start sending emails with Serendipity now" (was "...with Keila now")
- Description: "Register your Serendipity account..." (was "...your Keila account...")
- Email placeholder: "you@example.com" (was "you@keila.io")

### Dashboard / Main App
- Sidebar logo text: "Serendipity" (was "Keila")
- Footer: "Serendipity · Newsletter Platform" (was "Keila · Open Source Newsletters")
- All functionality identical

### Admin Pages
- "running Serendipity v0.19.0" (was "running Keila v0.19.0")
- "your Serendipity instance" (was "your Keila instance")
- No functional changes

### Campaign Editor
- Link dialog placeholder: "https://serendipitytechnology.com" (was "https://keila.io")
- Title placeholder: "Newsletter Platform" (was "Open Source Newsletters")
- Liquid template docs link points to serendipitytechnology.com

### API Keys Page
- Description: "use the Serendipity API" (was "use the Keila API")

### Public Forms
- Page titles include "· Serendipity" (was "· Keila")
- Form submission pages say "Newsletter Platform" (was "Open Source Newsletter Tool")

## What Stayed the Same

### URLs
- All URLs unchanged (e.g., `/projects`, `/campaigns`, etc.)
- API endpoints unchanged

### Functionality
- All features work identically
- Database queries unchanged
- Email sending behavior unchanged
- Contact management unchanged
- Campaign creation flow unchanged

### Environment Variables
- Still use `KEILA_*` prefix for compatibility
- Configuration file structure unchanged

### Module Names in Code
- Still `KeilaWeb.Router`
- Still `Keila.Projects`
- Internal naming unchanged for maintainability

## Verification Steps

After deployment, check these pages:

1. **Login page** - See Serendipity logo and blue colors
2. **Register page** - Verify text says "Serendipity" not "Keila"
3. **Dashboard sidebar** - Logo shows Serendipity icon + text
4. **Footer** - Shows Serendipity branding, links to serendipitytechnology.com
5. **Browser tab** - Title ends with "· Serendipity"
6. **Campaign editor** - Link placeholders reference serendipitytechnology.com
7. **Admin pages** - Say "Serendipity instance" not "Keila instance"

All pages should show blue accents (#4FC4F0) instead of green.

---
*Created: 2026-03-30*
