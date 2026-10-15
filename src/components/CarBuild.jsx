export default function CarBuild({ stages }) {
  const done = stages.filter((s) => s.done).length
  const pct = Math.round((done / stages.length) * 100)

  return (
    <div className="build">
      <p className="build-count">
        Build log: {done} of {stages.length} stages done
      </p>
      <div
        className="meter"
        role="img"
        aria-label={`${done} of ${stages.length} stages done`}
      >
        <span style={{ width: `${pct}%` }} />
      </div>
      <ul className="build-list">
        {stages.map((s) => (
          <li key={s.label} className={s.done ? 'done' : ''}>
            <span className="tick" aria-hidden="true">
              {s.done ? '✓' : ''}
            </span>
            <span>{s.label}</span>
            <span className="sr-only">{s.done ? ' (done)' : ' (not yet)'}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
