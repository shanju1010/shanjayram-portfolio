# Portfolio V5.5 — Production Preparation

- Converted large portrait and five original application screenshots to optimized WebP, updating React image references and removing superseded PNG files.
- Added a 1200×630 branded social preview, social metadata, favicon, improved description, and portrait image preload.
- Preserved AURA's private interactive showcase, roadmap, marquee resume behavior, and responsive design.
- Added async image decoding and refined modal keyboard focus handling.
- No public AURA source or implementation details were added.

## Validation and release checklist

- ZIP archive integrity was verified.
- Dependency installation timed out in the build environment; **production build and browser testing have not been verified**.
- On your Windows computer run: `npm install`, then `npm run build`, then `npm run preview`.
- Check image quality and mobile responsiveness, all seven project details, and the AURA roadmap.
- Test keyboard navigation: Tab/Shift+Tab inside case-study dialogs, Escape to close, and focus returning to the card.
- Check all outbound project links and the two user-provided deployment URLs.
- Before deploying, set the final public URL in canonical and social-sharing metadata. `og:image` and `twitter:image` currently use relative paths; some social scrapers require absolute URLs.
- Do not deploy private source, secrets, or internal AURA implementation.
