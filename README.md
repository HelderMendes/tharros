# Tharros — Training en Coaching

Marketing website for Tharros Training en Coaching, built with React, TypeScript, and Vite.

## Stack

- React 18 + TypeScript
- Vite 7
- Tailwind CSS + shadcn/ui (Radix primitives)
- React Router 7
- EmailJS (contact form delivery)

## Getting Started

This project uses **pnpm** exclusively — do not use `npm` or `yarn`.

```bash
pnpm install
pnpm dev
```

## Scripts

| Command             | Description                          |
| ------------------- | ------------------------------------ |
| `pnpm dev`          | Start the local dev server           |
| `pnpm build`        | Production build                     |
| `pnpm preview`      | Preview the production build locally |
| `pnpm lint`         | Run ESLint                           |
| `pnpm format`       | Format with Prettier                 |
| `pnpm format:check` | Check formatting without writing     |

## Environment Variables

Create a `.env` file in the project root (gitignored) with:

```
VITE_RECAPTCHA_SITE_KEY=
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
VITE_CONTACT_RECIPIENT_EMAIL=
```

These same variables must also be configured in the Vercel project settings for production, since `.env` is not committed to the repository.

## Contact Form / Email Flow

The contact form ([src/pages/Contact.tsx](src/pages/Contact.tsx)) sends form submissions directly from the browser via [EmailJS](https://www.emailjs.com/), no backend required.

- **Lead notification** — the primary template (`VITE_EMAILJS_TEMPLATE_ID`) sends the submission details to the business inbox (`VITE_CONTACT_RECIPIENT_EMAIL`, via the hidden `to_email` field).
- **Auto-reply confirmation** — linked as a secondary template in the EmailJS dashboard (Auto-Reply tab), sent back to the submitter's own address.
- reCAPTCHA v2 protects the form; verification is enforced server-side by EmailJS (configured per-template in the dashboard), not just client-side.

Template content and recipient linking are managed entirely in the EmailJS dashboard, not in this codebase.

## Deployment

Deployed on Vercel. See [vercel.json](vercel.json) for SPA rewrite configuration.
