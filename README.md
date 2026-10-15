# Portfolio site

A small interactive portfolio built with Vite and React. It features the Causify research project on whether founder age drives startup success, with a clickable causal diagram and a step-by-step view of the data pipeline.

## Run it on your computer

You need Node 18 or newer.

```bash
npm install
npm run dev
```

Open the address it prints (usually http://localhost:5173).

## Change the content

Almost everything you see lives in `src/data.js`:

- `profile`: your name, degree, and links. Replace the GitHub and email placeholders.
- `project`: the headline question, summary, and tags.
- `pipelineSteps`: the dataset steps and numbers.
- `dag`: the causal diagram. The nodes there are illustrative. Replace them with the team's final diagram, then set `illustrative` to `false` to remove the draft note.
- `methods` and `role`: the methods and your contributions.

Colors and fonts are at the top of `src/styles.css`.

## Put it on GitHub Pages

1. Create a public repo. Name it `YOUR-USERNAME.github.io` for a site at the root, or any name for a site at `YOUR-USERNAME.github.io/repo-name`.
2. Push this folder to the `main` branch.
3. In the repo, go to Settings, then Pages, and set the source to **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` builds and publishes the site on every push to `main`.

## Before you make it public

- Check with your advisor that the project, numbers, and diagram can be shown publicly.
- This site shows counts only. Do not add founder-level records, names, or LinkedIn profile data. That information belongs to the lab and to the people in it.
- Never commit API keys or tokens.
