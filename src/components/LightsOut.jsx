import { useEffect, useRef, useState } from 'react'

function verdict(ms) {
  if (ms < 200) return 'Pole position reflexes.'
  if (ms < 300) return 'Solid points finish.'
  if (ms < 450) return 'Midfield. Check your tire pressure.'
  return 'Wet weather reflexes. Go again.'
}

export default function LightsOut() {
  const [phase, setPhase] = useState('idle') // idle, lights, go, result, early
  const [lit, setLit] = useState(0)
  const [ms, setMs] = useState(null)
  const [best, setBest] = useState(null)
  const timers = useRef([])
  const t0 = useRef(0)

  const clearTimers = () => {
    timers.current.forEach(clearTimeout)
    timers.current = []
  }

  useEffect(() => clearTimers, [])

  const start = () => {
    clearTimers()
    setPhase('lights')
    setLit(0)
    setMs(null)
    for (let i = 1; i <= 5; i++) {
      timers.current.push(setTimeout(() => setLit(i), i * 800))
    }
    const hold = 600 + Math.random() * 2200
    timers.current.push(
      setTimeout(() => {
        setLit(0)
        setPhase('go')
        t0.current = performance.now()
      }, 5 * 800 + hold),
    )
  }

  const press = () => {
    if (phase === 'lights') {
      clearTimers()
      setLit(0)
      setPhase('early')
    } else if (phase === 'go') {
      const t = Math.round(performance.now() - t0.current)
      setMs(t)
      setBest((b) => (b === null ? t : Math.min(b, t)))
      setPhase('result')
    } else {
      start()
    }
  }

  const message = {
    idle: 'Five lights come on, one by one. When they all go out, press the button.',
    lights: 'Wait for it...',
    go: 'Go!',
    result: `${ms} ms. ${ms !== null ? verdict(ms) : ''}`,
    early: 'Jump start! The stewards would like a word.',
  }[phase]

  const label = {
    idle: 'Start the lights',
    lights: 'Hold...',
    go: 'Now!',
    result: 'Go again',
    early: 'Try again',
  }[phase]

  return (
    <div className="lights-out">
      <div className="gantry" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((n) => (
          <span key={n} className={`light${lit >= n ? ' on' : ''}`} />
        ))}
      </div>
      <p className={`lights-msg${phase === 'go' ? ' go' : ''}`} aria-live="polite">
        {message}
      </p>
      <button
        type="button"
        className="btn primary"
        onPointerDown={(e) => {
          e.preventDefault()
          press()
        }}
        onClick={(e) => {
          // keyboard activation (Enter or Space) has detail 0
          if (e.detail === 0) press()
        }}
      >
        {label}
      </button>
      {best !== null && <p className="muted small">Your best: {best} ms</p>}
    </div>
  )
}
