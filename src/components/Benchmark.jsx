import { useState } from 'react'

const fmt = (v) => `${v.toFixed(2)}%`

function gap(lang, single) {
  const d = lang - single
  if (Math.abs(d) < 0.005) return 'Tied with the single agent'
  return `${d > 0 ? '+' : ''}${d.toFixed(1)} points vs the single agent`
}

export default function Benchmark({ data }) {
  const keys = Object.keys(data.scenarios)
  const [key, setKey] = useState(keys[0])
  const [table, setTable] = useState(false)
  const sc = data.scenarios[key]
  const systems = data.systems.filter((s) => sc.values[s.id])

  return (
    <div className="bench">
      <div className="bench-top">
        <div className="bench-tabs" role="tablist" aria-label="Data condition">
          {keys.map((k) => (
            <button
              key={k}
              type="button"
              role="tab"
              aria-selected={k === key}
              className={`chip role-treatment${k === key ? ' active' : ''}`}
              onClick={() => setKey(k)}
            >
              {data.scenarios[k].label}
            </button>
          ))}
        </div>
        <button
          type="button"
          className="btn tiny"
          aria-pressed={table}
          onClick={() => setTable((t) => !t)}
        >
          {table ? 'Show chart' : 'Show as table'}
        </button>
      </div>

      <p className="muted small bench-note">{sc.note}</p>

      <ul className="bench-legend" aria-label="Systems compared">
        {systems.map((s) => (
          <li key={s.id}>
            <span
              className="swatch"
              style={{ background: `var(${s.color})` }}
              aria-hidden="true"
            />
            {s.name}
          </li>
        ))}
      </ul>

      {table ? (
        <div className="bench-table-wrap">
          <table className="bench-table">
            <caption className="sr-only">
              F1 score by dataset and system, {sc.label.toLowerCase()}
            </caption>
            <thead>
              <tr>
                <th scope="col">Dataset</th>
                {systems.map((s) => (
                  <th scope="col" key={s.id}>
                    {s.short}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.datasets.map((d, i) => (
                <tr key={d}>
                  <th scope="row">{d}</th>
                  {systems.map((s) => (
                    <td key={s.id}>{fmt(sc.values[s.id][i])}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="bench-groups">
          {data.datasets.map((d, i) => (
            <div className="bench-group" key={d}>
              <h5>{d}</h5>
              {systems.map((s) => {
                const v = sc.values[s.id][i]
                return (
                  <div
                    className="bench-row"
                    key={s.id}
                    role="img"
                    aria-label={`${d}, ${s.short}: ${fmt(v)} F1`}
                    title={`${s.name} on ${d}: ${fmt(v)} F1`}
                  >
                    <span className="bench-name">{s.short}</span>
                    <span className="bench-track">
                      <span
                        className="bench-bar"
                        style={{ width: `${v}%`, background: `var(${s.color})` }}
                      />
                    </span>
                    <span className="bench-val">{fmt(v)}</span>
                  </div>
                )
              })}
              <p className="bench-gap">
                {gap(sc.values.langgraph[i], sc.values.single[i])}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
