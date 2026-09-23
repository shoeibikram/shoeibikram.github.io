# Shoaib Ikram — Portfolio

A static, single-page portfolio site. No build step, no dependencies — just HTML, CSS, and vanilla JS.

## Files
```
index.html          the page
style.css            all styling
script.js            popup/modal behavior
images/profile-bg.jpg   hero background photo
assets/Shoaib_Ikram_CV.pdf   downloadable CV
```

## Deploy to GitHub Pages

1. Create a new repository on GitHub (e.g. `portfolio` or `shoeibikram.github.io` if you want it at the root of your GitHub domain).
2. Upload all the files in this folder to the repository, keeping the same structure (the `images/` and `assets/` folders must stay where they are, next to `index.html`).
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to **Deploy from a branch**, choose the **main** branch and **/ (root)** folder, then **Save**.
5. GitHub will give you a live URL, usually:
   - `https://<your-username>.github.io/<repo-name>/` — or
   - `https://<your-username>.github.io/` if the repo is named `<your-username>.github.io`

It can take a minute or two to go live after the first deploy.

## Editing later
- Text content lives directly in `index.html` inside each `<div class="modal-panel">` block.
- Colors and layout are controlled by the CSS variables at the top of `style.css`.
- To swap the CV, replace `assets/Shoaib_Ikram_CV.pdf` with a new file of the same name (or update the `href` in `index.html` if you rename it).
