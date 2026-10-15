import Dag from './components/Dag.jsx'
import Pipeline from './components/Pipeline.jsx'
import {
  profile,
  project,
  pipelineSteps,
  dag,
  roles,
  methods,
  role,
} from './data.js'

export default function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top">
          {profile.name}
        </a>
        <nav aria-label="Sections">
          <a href="#diagram">Causal diagram</a>
          <a href="#data">Dataset</a>
          <a href="#methods">Methods</a>
          <a href="#role">My role</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <h1>{project.question}</h1>
          <p className="lede">{project.summary}</p>
          <p className="meta">
            <span>Researcher at Causify</span>
            <span>{project.period}</span>
            <span>{project.place}</span>
          </p>
        </section>

        <section id="diagram" className="block">
          <h2>How we think about it</h2>
          <p className="intro">
            Age and success could be linked for reasons that have nothing to do
            with age itself. The causal diagram is how the team keeps those
            reasons apart. Click any box to see what it is and why it is
            treated the way it is.
          </p>
          <Dag dag={dag} roles={roles} />
        </section>

        <section id="data" className="block">
          <h2>Building the dataset</h2>
          <p className="intro">
            The analysis needs one clean row per founder, with a known outcome
            for each company. Getting there took six steps. Click through them
            to see the numbers.
          </p>
          <Pipeline steps={pipelineSteps} />
        </section>

        <section id="methods" className="block">
          <h2>How we test it</h2>
          <p className="intro">
            The team plans two methods for the analysis. They are not run yet,
            so there are no results on this page.
          </p>
          <div className="methods">
            {methods.map((m) => (
              <article key={m.title} className="method">
                <h3>
                  {m.title}
                  <span className="status">{m.status}</span>
                </h3>
                <p>{m.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="role" className="block">
          <h2>What I did</h2>
          <ul className="role-list">
            {role.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
          <ul className="tags" aria-label="Skills and tools">
            {project.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </section>
      </main>

      <footer id="contact" className="site-footer">
        <p>
          {profile.degree}. Open to talking about research and data work.
        </p>
        <p className="links">
          <a href={profile.links.email}>Email</a>
          <a href={profile.links.linkedin}>LinkedIn</a>
          <a href={profile.links.github}>GitHub</a>
        </p>
      </footer>
    </>
  )
}
