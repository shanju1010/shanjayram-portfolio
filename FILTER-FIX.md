# V4.4 Project Filter Fix

Fixed project cards becoming invisible when switching between All work, Software, and AI & experiments.

Cause: the reveal IntersectionObserver ran only once on initial mount. Newly mounted filtered project cards could retain their hidden reveal styling.

Changes:
- Reinitialize reveal observation whenever the filter changes.
- Mark project cards visible immediately on render to prevent blank states while changing filters.
- No changes to title, contact information, screenshots, project descriptions, or AURA privacy.

Check the filters in sequence: All work -> Software -> AI & experiments -> Software -> All work.
