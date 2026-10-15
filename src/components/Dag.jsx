import { useMemo, useState } from 'react'

const W = 160
const H = 44
const HALF_W = W / 2
const HALF_H = H / 2
const GAP = 6

// Where a straight line between two node centers meets each node's box,
// so arrows start and stop at the edges instead of the centers.
function edgePoints(a, b) {
  const dx = b.x - a.x
  const dy = b.y - a.y
  const tA = Math.min(
    dx === 0 ? Infinity : HALF_W / Math.abs(dx),
    dy === 0 ? Infinity : HALF_H / Math.abs(dy),
  )
  const tB = tA
  const len = Math.hypot(dx, dy)
  const gap = GAP / len
  return {
    x1: a.x + dx * (tA + gap),
    y1: a.y + dy * (tA + gap),
    x2: b.x - dx * (tB + gap),
    y2: b.y - dy * (tB + gap),
  }
}

export default function Dag({ dag, roles }) {
  const [selected, setSelected] = useState('age')
  const [roleFocus, setRoleFocus] = useState(null)

  const byId = useMemo(
    () => Object.fromEntries(dag.nodes.map((n) => [n.id, n])),
    [dag],
  )

  const neighbors = useMemo(() => {
    const set = new Set([selected])
    dag.edges.forEach(([a, b]) => {
      if (a === selected) set.add(b)
      if (b === selected) set.add(a)
    })
    return set
  }, [dag, selected])

  const node = byId[selected]
  const role = roles[node.role]

  const nodeState = (n) => {
    if (roleFocus) return n.role === roleFocus ? 'on' : 'dim'
    return neighbors.has(n.id) ? 'on' : 'dim'
  }

  const edgeState = ([a, b]) => {
    if (roleFocus) {
      return byId[a].role === roleFocus || byId[b].role === roleFocus
        ? 'on'
        : 'dim'
    }
    return a === selected || b === selected ? 'on' : 'dim'
  }

  const pick = (id) => {
    setSelected(id)
    setRoleFocus(null)
  }

  return (
    <div className="dag">
      <div className="dag-legend" role="group" aria-label="Highlight by role">
        {Object.entries(roles).map(([key, r]) => (
          <button
            key={key}
            type="button"
            className={`chip role-${key}${roleFocus === key ? ' active' : ''}`}
            aria-pressed={roleFocus === key}
            onClick={() => setRoleFocus(roleFocus === key ? null : key)}
          >
            <span className="chip-dot" aria-hidden="true" />
            {r.name}
          </button>
        ))}
      </div>

      <svg
        className="dag-svg"
        viewBox="0 0 760 400"
        role="img"
        aria-label="Causal diagram connecting founder age, startup success, confounders and mediators"
      >
        <defs>
          <marker
            id="arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M0,0 L10,5 L0,10 z" className="arrow-head" />
          </marker>
        </defs>

        {dag.edges.map((e) => {
          const p = edgePoints(byId[e[0]], byId[e[1]])
          return (
            <line
              key={e.join('-')}
              className={`edge ${edgeState(e)}`}
              x1={p.x1}
              y1={p.y1}
              x2={p.x2}
              y2={p.y2}
              markerEnd="url(#arrow)"
            />
          )
        })}

        {dag.nodes.map((n) => (
          <g
            key={n.id}
            className={`node role-${n.role} ${nodeState(n)}${
              n.id === selected ? ' selected' : ''
            }`}
            transform={`translate(${n.x - HALF_W}, ${n.y - HALF_H})`}
            tabIndex={0}
            role="button"
            aria-pressed={n.id === selected}
            aria-label={`${n.label}, ${roles[n.role].name}`}
            onClick={() => pick(n.id)}
            onKeyDown={(ev) => {
              if (ev.key === 'Enter' || ev.key === ' ') {
                ev.preventDefault()
                pick(n.id)
              }
            }}
          >
            <rect width={W} height={H} rx="6" />
            <text x={HALF_W} y={H / 2} textAnchor="middle" dominantBaseline="central">
              {n.label}
            </text>
          </g>
        ))}
      </svg>

      <div className="dag-readout" aria-live="polite">
        <h3>
          {node.label}
          <span className={`role-tag role-${node.role}`}>{role.name}</span>
        </h3>
        <p>{node.text}</p>
        <p className="muted">{role.text}</p>
        {dag.illustrative && (
          <p className="draft-note">
            Illustrative example. The final causal diagram will replace this.
          </p>
        )}
      </div>
    </div>
  )
}
