# LeetLeitner at hyoussef.tech/leetleitner

The portfolio routes `/leetleitner/` and its assets to a separate LeetLeitner Vercel project using `next.config.ts`. The domain stays attached to this portfolio project. The portfolio homepage and contact endpoint remain in this project.

1. Push and import the LeetLeitner repository as a separate Vercel project. Its `vercel.json` builds with `npm run build` and publishes `dist`, containing the `/leetleitner/` folder.
2. Confirm `https://YOUR-APP-PROJECT.vercel.app/leetleitner/` loads.
3. On the PORTFOLIO Vercel project, add `LEETLEITNER_ORIGIN=https://YOUR-APP-PROJECT.vercel.app` for Production (and Preview if desired). Use the stable production project URL, not a per-commit preview URL, and omit `/leetleitner` from the variable.
4. Push the portfolio changes and redeploy it after setting the variable.
5. Visit `https://hyoussef.tech/leetleitner`. It redirects to `/leetleitner/` and keeps your domain while serving the app.

If Deployment Protection is enabled on the upstream app's production domain, ordinary visitors and the proxy must be able to fetch its files without a sign-in page. Do not put credentials into client code.

Without `LEETLEITNER_ORIGIN`, no app rewrite is installed. This keeps the normal portfolio operational until the app is deployed.

## Local verification

In `C:/Work/LeetLeitner`, run `npm run build`, then `npm run preview -- --port 4173`.

In this portfolio directory (PowerShell):

```powershell
$env:LEETLEITNER_ORIGIN = 'http://127.0.0.1:4173'
npm run dev -- --port 4174
```

Open `http://localhost:4174/` for the portfolio and `http://localhost:4174/leetleitner/` for the app. Proxying retains the `/leetleitner/` prefix. Assets and service worker must stay under that prefix. No app HTML rewrite should be applied to `/` or `/_next`.

LocalStorage is scoped by origin rather than URL path: data on localhost or the app's `.vercel.app` origin does not automatically appear on `hyoussef.tech`. Export a `.txt` file and import it at the final URL to transfer it. The app's service worker is scoped to `/leetleitner/` and should not control the portfolio homepage.
