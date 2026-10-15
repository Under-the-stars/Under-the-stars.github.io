import { useState } from 'react'

// Click-through steps. `name` keeps element ids unique when the page has
// more than one of these. A step's `stat` and `unit` are optional.
export default function Pipeline({ steps, name = 'pipeline', label = 'Steps' }) {
  const [active, setActive] = useState(0)
  const step = steps[active]
  const last = steps.length - 1
  const panelId = `${name}-panel`

  return (
    <div className="pipeline">
      <ol
        className="steps"
        role="tablist"
        aria-label={label}
        style={{ '--cols': steps.length }}
      >
        {steps.map((s, i) => (
          <li key={s.id}>
            <button
              type="button"
              role="tab"
              id={`${name}-tab-${s.id}`}
              aria-selected={i === active}
              aria-controls={panelId}
              className={`step${i === active ? ' active' : ''}${
                i < active ? ' done' : ''
              }`}
              onClick={() => setActive(i)}
            >
              <span className="step-dot" aria-hidden="true" />
              <span className="step-title">{s.title}</span>
            </button>
          </li>
        ))}
      </ol>

      <div
        className="step-panel"
        id={panelId}
        role="tabpanel"
        aria-labelledby={`${name}-tab-${step.id}`}
        aria-live="polite"
      >
        {step.stat ? (
          <div className="stat">
            <span className="stat-num">{step.stat}</span>
            <span className="stat-unit">{step.unit}</span>
          </div>
        ) : (
          <h5 className="step-heading">{step.title}</h5>
        )}
        <p>{step.text}</p>
        <div className="step-nav">
          <button
            type="button"
            className="btn"
            disabled={active === 0}
            onClick={() => setActive(active - 1)}
          >
            Previous step
          </button>
          <button
            type="button"
            className="btn"
            disabled={active === last}
            onClick={() => setActive(active + 1)}
          >
            Next step
          </button>
        </div>
      </div>
    </div>
  )
}
