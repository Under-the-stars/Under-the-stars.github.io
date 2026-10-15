import { useState } from 'react'

export default function Pipeline({ steps }) {
  const [active, setActive] = useState(0)
  const step = steps[active]
  const last = steps.length - 1

  return (
    <div className="pipeline">
      <ol className="steps" role="tablist" aria-label="Pipeline steps">
        {steps.map((s, i) => (
          <li key={s.id}>
            <button
              type="button"
              role="tab"
              id={`tab-${s.id}`}
              aria-selected={i === active}
              aria-controls="step-panel"
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
        id="step-panel"
        role="tabpanel"
        aria-labelledby={`tab-${step.id}`}
        aria-live="polite"
      >
        <div className="stat">
          <span className="stat-num">{step.stat}</span>
          <span className="stat-unit">{step.unit}</span>
        </div>
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
