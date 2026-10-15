import Dag from './components/Dag.jsx'
import Pipeline from './components/Pipeline.jsx'
import RetryDemo from './components/RetryDemo.jsx'
import LightsOut from './components/LightsOut.jsx'
import CarBuild from './components/CarBuild.jsx'
import Citation from './components/Citation.jsx'
import {
  profile,
  hero,
  about,
  toolkit,
  toolkitNote,
  certifications,
  experience,
  retryCaption,
  paper,
  project,
  pipelineSteps,
  dag,
  roles,
  methods,
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

function Favorites({ items }) {
  if (!items || items.length === 0) return null
  return (
    <ul className="tags" aria-label="Favorites">
      {items.map((f) => (
        <li key={f}>{f}</li>
      ))}
    </ul>
  )
}

export default function App() {
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
          <ul className="tags" aria-label="Toolkit">
            {toolkit.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <p className="muted note">{toolkitNote}</p>
          <h3 className="mini">Certified</h3>
          <ul className="tags" aria-label="Certifications">
            {certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
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

          <div className="sub first">
            <h3>{paper.heading}</h3>
            <p className="intro">{paper.blurb}</p>
            <div className="paper">
              <p className="paper-title">{paper.title}</p>
              <p className="muted">{paper.venue}</p>
              <ul className="tags" aria-label="Keywords">
                {paper.keywords.map((k) => (
                  <li key={k}>{k}</li>
                ))}
              </ul>
              <p>
                <a href={paper.doi}>Read the paper on IEEE Xplore</a>
              </p>
              <Citation text={paper.citation} />
            </div>
          </div>

          <div className="sub">
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
            <Pipeline steps={pipelineSteps} />

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
            <ul className="tags" aria-label="Research skills and tools">
              {project.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="fun" className="block">
          <h2>{fun.heading}</h2>
          <p className="intro">{fun.intro}</p>

          <div className="fun-grid">
            <article className="fun-block">
              <h3>{fun.anime.title}</h3>
              <p>{fun.anime.text}</p>
              <Favorites items={fun.anime.favorites} />
            </article>

            <article className="fun-block wide">
              <h3>{fun.f1.title}</h3>
              <p>{fun.f1.text}</p>
              <Favorites items={fun.f1.favorites} />
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
          <a href={profile.links.email}>Email</a>
          <a href={profile.links.linkedin}>LinkedIn</a>
          <a href={profile.links.github}>GitHub</a>
        </p>
        <p className="muted small">{profile.degree}</p>
      </footer>
    </>
  )
}
