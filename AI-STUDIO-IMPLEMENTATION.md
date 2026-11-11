# OCodeJS AI Studio — Implementation Notes

## Product direction
Turn the learning portal into an OCodeJS-built AI coding and UI design assistant. Primary workflows:
- Text-to-UI generation.
- Screenshot/image-to-UI analysis.
- Figma URL/import workflow.
- React, Next.js App Router, TypeScript, Tailwind CSS and shadcn/ui output targets.
- Model selector: Agents Mini, Agents Pro, Agents Max.
- Live preview, source copy/download, GitHub synchronization and terminal handoff.

## Current implementation
`studio.html` is a responsive frontend prototype linked from the portal homepage/navigation. It includes prompt entry, local image selection, Figma URL input, framework/style controls, model selection, preview shell, source panel, copy/download and terminal command affordance.

**Important:** The current Generate action creates a deterministic local starter template. It does not call an AI model. Image bytes and Figma URL are not uploaded or parsed. GitHub OAuth/sync, project persistence and deployment are not connected. The UI labels these limitations explicitly.

## Recommended service architecture
- `POST /api/v1/generations`: prompt, mode, framework, styling, model, project context.
- `POST /api/v1/assets`: authenticated image upload; validate MIME, size and dimensions; store in private object storage.
- `POST /api/v1/figma/import`: OAuth-backed Figma file inspection; never accept arbitrary server-side fetch URLs without SSRF protection.
- `GET /api/v1/generations/:id`: generation status and artifact manifest.
- `GET /api/v1/generations/:id/preview`: sandboxed preview origin.
- `POST /api/v1/github/exports`: user-authorized GitHub App installation; create branch/commit/PR only after explicit user selection.
- `POST /api/v1/deployments`: deploy to an approved OCodeJS target after confirmation.

## Model routing
Expose stable internal model IDs `agents-mini`, `agents-pro`, `agents-max`. Route them server-side to configured providers. Do not expose provider API keys in browser code. Add rate limits, usage budgets, request tracing, timeouts, cancellation and per-user quotas.

## Security requirements
- Keep model/API credentials in server-side environment variables or secret manager.
- Authenticate and authorize all project, asset, generation and export endpoints.
- Scan and constrain uploads; use signed, short-lived asset URLs.
- Treat prompts, uploaded content and Figma data as untrusted input.
- Render generated previews in isolated sandbox origins/iframes with restrictive CSP; never execute generated code in the main application origin.
- Validate GitHub repository permissions and show the exact diff before committing.
- Never trigger production deploys without explicit user confirmation.
- Add audit events, deletion controls, retention limits and abuse protections.

## Production readiness checklist
1. Implement model gateway and Agents Mini/Pro/Max routing.
2. Implement streaming generation and job persistence.
3. Add image vision pipeline and Figma OAuth/API integration.
4. Add isolated preview/build workers for Vite/Next.js.
5. Add GitHub App OAuth, branch/PR export and terminal CLI.
6. Add auth, database, object storage, quotas, billing/usage metering and audit logs.
7. Add automated tests, accessibility checks and security review.

## Local preview
Open `studio.html` from the deployed static site. The prototype does not require secrets or a backend.
