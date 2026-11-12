# OCODEJS Learning — Deployment Notes

## Cloudflare Pages staging

- Project: `ocodejs-docs-rtf-staging`
- Preview hostname: https://ocodejs-docs-rtf-staging.pages.dev
- Preview branch: `feat/cloudflare-pages-staging-deploy`
- Build command: `npm run build`
- Output directory: `dist`
- Production branch: `main`
- Automatic Production deployments: disabled
- GitHub Pages environment URL: `http://ocodejs.co/docs.rtf/` (from the successful Pages deployment log).
- The frontend detects the `/docs.rtf` base path on `ocodejs.co`; Cloudflare Preview remains rooted at `/`.
- Custom domains / DNS: none changed by this project.

## Build output

The build validates `index.html` and `studio.html`, then publishes only those two pages, a preview-only no-index `_headers` rule, and `deployment.json`. Cloudflare Pages automatically falls back to `index.html` for SPA routes when no top-level `404.html` exists. The GitHub Pages workflow creates a separate `404.html` fallback in its upload artifact. Repository documentation and workflow source files are not copied into the public artifact.

## Product boundaries

This repository currently contains a static frontend prototype. Authentication, contact submission, student data, course purchases, and checkout are demonstrations only. No real payment or account operation is performed. Production launch requires backend integration, security review, privacy/legal review, and explicit production approval.
