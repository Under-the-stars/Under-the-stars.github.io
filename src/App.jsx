import { useEffect, useState } from 'react'
import Dag from './components/Dag.jsx'
import Pipeline from './components/Pipeline.jsx'
import RetryDemo from './components/RetryDemo.jsx'
import LightsOut from './components/LightsOut.jsx'
import CarBuild from './components/CarBuild.jsx'
import Citation from './components/Citation.jsx'
import Benchmark from './components/Benchmark.jsx'
import ThemeSwitcher from './components/ThemeSwitcher.jsx'
import {
  profile,
  themes,
  hero,
  about,
  toolkit,
  toolkitNote,
  certifications,
  experience,
  retryCaption,
  researchIndex,
  paper,
  project,
  pipelineSteps,
  dag,
  roles,
  methods,
  benchmarkProject,
  benchmark,
  forecastingProject,
  fun,
  carBuild,
  contact,
} from './data.js'

function Job({ job }) {
  return (
    <article className="job">
      <div className="job-head">
        <h4>{job.org}</h4>
        {job.role && <span className="job-role">{job.role}</span>}
        {job.when && <span className="job-when">{job.when}</span>}
      </div>
      <p className="quip">{job.quip}</p>
      <ul>
        {job.points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </article>
  )
}

function Tags({ items, label }) {
  if (!items || items.length === 0) return null
  return (
    <ul className="tags" aria-label={label}>
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  )
}

const themeIds = themes.map((t) => t.id)

export default function App() {
  const [theme, setTheme] = useState(() => {
    const current = document.documentElement.dataset.theme
    return themeIds.includes(current) ? current : themes[0].id
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  const chooseTheme = (id) => {
    setTheme(id)
    try {
      localStorage.setItem('theme', id)
    } catch {
      // storage can be blocked; the choice just won't be remembered
    }
  }

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top">
          {profile.name}
        </a>
        <nav aria-label="Sections">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#research">Research</a>
          <a href="#fun">Off the clock</a>
          <a href="#contact">Contact</a>
        </nav>
        <ThemeSwitcher themes={themes} value={theme} onChange={chooseTheme} />
      </header>

      <main id="top">
        <section className="hero">
          <h1>{hero.headline}</h1>
          <p className="lede">{hero.subline}</p>
          <p className="meta">{hero.intro}</p>
          <p className="cta-row">
            <a className="btn primary" href="#retry">
              Watch an agent retry
            </a>
            <a className="btn" href="#research">
              Read the research
            </a>
            <a className="btn" href="#fun">
              Skip to the fun part
            </a>
          </p>
        </section>

        <section id="about" className="block">
          <h2>The short version</h2>
          <div className="prose">
            {about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <h3 className="mini">Toolkit</h3>
          <Tags items={toolkit} label="Toolkit" />
          <p className="muted note">{toolkitNote}</p>
          <h3 className="mini">Certified</h3>
          <Tags items={certifications} label="Certifications" />
        </section>

        <section id="experience" className="block">
          <h2>Where I’ve been useful</h2>
          <h3 className="group">Right now</h3>
          <div className="jobs">
            {experience.now.map((j) => (
              <Job key={j.org} job={j} />
            ))}
          </div>

          <div id="retry" className="sub">
            <h3>Watch an agent retry</h3>
            <p className="intro">
              Here is the idea behind my pipeline in thirty seconds. Work goes
              in, a strict schema checks it, and anything that fails goes back
              instead of slipping through.
            </p>
            <RetryDemo caption={retryCaption} />
          </div>

          <h3 className="group">Before that</h3>
          <div className="jobs">
            {experience.before.map((j) => (
              <Job key={j.org} job={j} />
            ))}
          </div>
        </section>

        <section id="research" className="block">
          <h2>Research, with citations</h2>
          <ul className="research-index" aria-label="Jump to a project">
            {researchIndex.map((r) => (
              <li key={r.href}>
                <a href={r.href}>{r.label}</a>
              </li>
            ))}
          </ul>

          <div id="paper" className="sub first">
            <h3>{paper.heading}</h3>
            <p className="intro">{paper.blurb}</p>
            <div className="paper">
              <p className="paper-title">{paper.title}</p>
              <p className="muted">{paper.venue}</p>
              <Tags items={paper.keywords} label="Keywords" />
              <p className="paper-link">
                <a href={paper.doi}>Read the paper on IEEE Xplore</a>
              </p>
              <Citation text={paper.citation} />
            </div>
          </div>

          <div id="causify" className="sub">
            <h3>{project.question}</h3>
            <p className="intro">
              {project.summary} It runs {project.period}, remotely.
            </p>

            <h4 className="minor">How we think about it</h4>
            <p className="intro">
              Age and success could be linked for reasons that have nothing to
              do with age itself. The causal diagram is how the team keeps
              those reasons apart. Click any box to see what it is and how it
              is treated.
            </p>
            <Dag dag={dag} roles={roles} />

            <h4 className="minor">Building the dataset</h4>
            <p className="intro">
              The analysis needs one clean row per founder, with a known
              outcome for each company. Getting there took six steps. Click
              through them to see the numbers.
            </p>
            <Pipeline steps={pipelineSteps} name="dataset" label="Dataset steps" />

            <h4 className="minor">How we test it</h4>
            <p className="intro">
              The team plans two methods for the analysis. They are not run
              yet, so there are no results on this page.
            </p>
            <div className="methods">
              {methods.map((m) => (
                <article key={m.title} className="method">
                  <h5>
                    {m.title}
                    <span className="status">{m.status}</span>
                  </h5>
                  <p>{m.text}</p>
                </article>
              ))}
            </div>
            <Tags items={project.tags} label="Research skills and tools" />
          </div>

          <div id="benchmark" className="sub">
            <h3>{benchmarkProject.title}</h3>
            <p className="muted project-tag">{benchmarkProject.tag}</p>
            <p className="intro">{benchmarkProject.blurb}</p>

            <h4 className="minor">What I wanted to know</h4>
            <ul className="plain-list">
              {benchmarkProject.questions.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>

            <h4 className="minor">The five agents</h4>
            <p className="intro">{benchmarkProject.agentsIntro}</p>
            <Pipeline
              steps={benchmarkProject.agents}
              name="agents"
              label="Agents in order"
            />

            <h4 className="minor">Head to head</h4>
            <p className="intro">{benchmarkProject.datasetsNote}</p>
            <Benchmark data={benchmark} />

            <h4 className="minor">What I found</h4>
            <ul className="plain-list">
              {benchmarkProject.findings.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <Tags items={benchmarkProject.tags} label="Tools used" />
            <p className="paper-link">
              <a href={benchmarkProject.repo}>See the code on GitHub</a>
            </p>
          </div>

          <div id="forecasting" className="sub">
            <h3>{forecastingProject.title}</h3>
            <p className="muted project-tag">{forecastingProject.tag}</p>
            <p className="intro">{forecastingProject.blurb}</p>
            <ul className="plain-list">
              {forecastingProject.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <p className="muted">{forecastingProject.note}</p>
            <Tags items={forecastingProject.tags} label="Tools used" />
            <p className="paper-link">
              <a href={forecastingProject.repo}>See the code on GitHub</a>
            </p>
          </div>
        </section>

        <section id="fun" className="block">
          <h2>{fun.heading}</h2>
          <p className="intro">{fun.intro}</p>

          <div className="fun-grid">
            <article className="fun-block">
              <h3>{fun.anime.title}</h3>
              <p>{fun.anime.text}</p>
              <Tags items={fun.anime.favorites} label="Favorites" />
            </article>

            <article className="fun-block">
              <h3>{fun.f1.title}</h3>
              <p>{fun.f1.text}</p>
              <Tags items={fun.f1.favorites} label="Favorites" />
              <LightsOut />
            </article>

            <article className="fun-block">
              <h3>{fun.cars.title}</h3>
              <p>{fun.cars.text}</p>
              <CarBuild stages={carBuild} />
            </article>
          </div>
        </section>
      </main>

      <footer id="contact" className="site-footer">
        <h2>Say hello</h2>
        <p>{contact}</p>
        <p className="links">
          <a href={profile.links.email}>{profile.email}</a>
          <a href={profile.links.linkedin}>LinkedIn</a>
          <a href={profile.links.github}>GitHub</a>
        </p>
        <p className="muted small">{profile.degree}</p>
      </footer>
    </>
  )
}
