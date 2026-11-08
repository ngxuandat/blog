# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

This repo no longer holds the blog. The blog lives in `ngxuandat/ngxuandat.github.io`. This repo only serves redirects so old `https://ngxuandat.github.io/blog/...` links keep working.

- There is no build step. `.github/workflows/deploy.yml` publishes the static `site/` directory when `master` is pushed.
- `site/404.html` redirects any `/blog/<path>` to `https://ngxuandat.github.io/<path>`, using JavaScript, because GitHub Pages cannot do server-side redirects. `site/index.html` handles `/blog/` itself.
- Do not add content here. Put posts and pages in the other repo.
