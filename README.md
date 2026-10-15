# Portfolio site

A personal site built with Vite and React. It has an intro, experience, research (a published paper and the Causify study, with a clickable causal diagram and a step-by-step data pipeline), and an "Off the clock" section with an F1 reaction game and a car build log.

## Run it on your computer

You need Node 18 or newer.

```bash
npm install
npm run dev
```

Open the address it prints (usually http://localhost:5173).

## Change the content

Almost everything you see lives in `src/data.js`:

- `profile` and `themes`: your name, email, links, and the list of looks. The first theme in the list is the default one visitors see. If you change the default, also change `'manga'` in the small script at the top of `index.html`.
- `hero`, `about`, `toolkit`, `certifications`: the top of the page.
- `experience`: your jobs. Add a `role` or `when` to any entry to show a title or dates.
- `paper`: the published paper and its citation.
- `project`, `pipelineSteps`, `methods`: the Causify study.
- `benchmarkProject` and `benchmark`: the agent benchmark, its five agents, and the F1 scores behind the chart.
- `forecastingProject`: the Transformer forecasting project.
- `dag`: the causal diagram. The nodes there are illustrative. Replace them with the team's final diagram, then set `illustrative` to `false` to remove the draft note.
- `fun` and `carBuild`: the "Off the clock" section. Add favorite shows or teams to the `favorites` lists, and flip `done` to `true` as you hit each car-build stage.

The three looks (Manga, Pit wall, Graph paper) are blocks of colors, fonts, and borders at the top of `src/styles.css`. Visitors switch between them with the buttons in the header, and the site remembers their choice. The chart colors in each look were checked for color-blind safety and contrast, so re-check them if you change them.

## Put it on GitHub Pages

1. Create a public repo. Name it `YOUR-USERNAME.github.io` for a site at the root, or any name for a site at `YOUR-USERNAME.github.io/repo-name`.
2. Push this folder to the `main` branch.
3. In the repo, go to Settings, then Pages, and set the source to **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` builds and publishes the site on every push to `main`.

## Before you make it public

- Check with your advisor that the project, numbers, and diagram can be shown publicly.
- This site shows counts only. Do not add founder-level records, names, or LinkedIn profile data. That information belongs to the lab and to the people in it.
- Never commit API keys or tokens.
