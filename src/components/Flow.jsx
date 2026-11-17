// Architecture diagram: five agents in a row, with two loop-back arrows
// from the Reviewer. Colors come from the theme tokens, so it follows
// light and dark mode.
const NODE_W = 112
const NODE_H = 44
const STEP = 132
const X0 = 8
const Y = 34

export default function Flow({ steps, caption }) {
  const cx = (i) => X0 + i * STEP + NODE_W / 2
  const reviewer = 3
  const eda = 1
  const architect = 2
  const loopY = Y + NODE_H + 38

  return (
    <figure className="flow">
      <div className="flow-scroll">
        <svg
          viewBox="0 0 680 150"
          role="img"
          aria-label="Planner, EDA Analyst, ML Architect, Quality Reviewer, Report Writer in order. The Quality Reviewer can send the work back to the EDA Analyst or the ML Architect."
        >
          <defs>
            <marker id="flow-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0 0 L10 5 L0 10 z" fill="var(--muted)" />
            </marker>
            <marker id="flow-arrow-back" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0 0 L10 5 L0 10 z" fill="var(--outcome)" />
            </marker>
          </defs>

          {steps.slice(0, -1).map((s, i) => (
            <line
              key={s.id}
              x1={X0 + i * STEP + NODE_W + 2}
              y1={Y + NODE_H / 2}
              x2={X0 + (i + 1) * STEP - 3}
              y2={Y + NODE_H / 2}
              stroke="var(--muted)"
              strokeWidth="1.5"
              markerEnd="url(#flow-arrow)"
            />
          ))}

          {[
            { to: eda, label: 'retry: clean the data', dx: -10 },
            { to: architect, label: 'retry: model', dx: 10 },
          ].map((r) => (
            <path
              key={r.label}
              d={`M ${cx(reviewer) + r.dx} ${Y + NODE_H + 2} V ${loopY - (r.to === eda ? 0 : 16)} H ${cx(r.to)} V ${Y + NODE_H + 4}`}
              fill="none"
              stroke="var(--outcome)"
              strokeWidth="1.5"
              strokeDasharray="5 4"
              markerEnd="url(#flow-arrow-back)"
            />
          ))}
          <text x={cx(eda) + 4} y={loopY + 14} className="flow-note" fill="var(--outcome)">
            retry: clean the data
          </text>
          <text x={cx(architect) + 20} y={loopY - 20} className="flow-note" fill="var(--outcome)">
            retry: model
          </text>

          {steps.map((s, i) => (
            <g key={s.id}>
              <rect
                x={X0 + i * STEP}
                y={Y}
                width={NODE_W}
                height={NODE_H}
                rx="8"
                fill="var(--panel)"
                stroke={i === reviewer ? 'var(--outcome)' : 'var(--ink)'}
                strokeWidth={i === reviewer ? 2.5 : 1.5}
              />
              <text
                x={cx(i)}
                y={Y + NODE_H / 2 + 4}
                textAnchor="middle"
                className="flow-label"
                fill="var(--ink)"
              >
                {s.label}
              </text>
            </g>
          ))}
          <text x={X0 + reviewer * STEP + NODE_W + 4} y={Y + NODE_H / 2 - 8} textAnchor="start" className="flow-note" fill="var(--muted)">
            pass
          </text>
        </svg>
      </div>
      <figcaption className="muted small">{caption}</figcaption>
    </figure>
  )
}
