# Deployment preparation (Vite + React)

## Local verification

```powershell
npm install
npm run build
npm run preview
```

Check `http://localhost:4173/` and confirm all project cards, screenshots, live links, AURA controls, and keyboard interaction.

## Vercel

1. Create a GitHub repository containing this portfolio only (not private AURA code).
2. Import the repository into Vercel.
3. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.
4. Deploy and check the assigned public URL.
5. Replace relative Open Graph/Twitter image paths with the full deployed URL if link previews fail.
6. Add your deployed portfolio URL to LinkedIn and GitHub.

Do not put passwords, API keys, private AURA source code, or `.env` secrets into the public repository.
