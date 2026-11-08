# Redirect to ngxuandat.github.io

The blog moved to https://ngxuandat.github.io (repo: `ngxuandat/ngxuandat.github.io`).

This repo only keeps `https://ngxuandat.github.io/blog/...` links working. `site/404.html` is served by
GitHub Pages for every unknown path under `/blog/` and redirects to the same path on the new site
(for example `/blog/posts/foo/` goes to `/posts/foo/`). `site/index.html` redirects `/blog/`.

Pushing to `master` deploys `site/` via `.github/workflows/deploy.yml`. The old Astro source is in git history.
