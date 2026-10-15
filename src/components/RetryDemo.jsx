import { useEffect, useRef, useState } from 'react'

const STAGES = [
  'Messy transcript',
  'Agents get to work',
  'Schema check',
  'Structured report',
]

const REJECTIONS = [
  'a decision has no owner',
  'a date is not actually a date',
  'a required field came back empty',
]

export default function RetryDemo({ caption }) {
  const [phase, setPhase] = useState('idle') // idle, running, done
  const [active, setActive] = useState(-1)
  const [failed, setFailed] = useState(false)
  const [retries, setRetries] = useState(0)
  const [log, setLog] = useState([])
  const timers = useRef([])

  const clearTimers = () => {
    timers.current.forEach(clearTimeout)
    timers.current = []
  }

  useEffect(() => clearTimers, [])

  const run = () => {
    clearTimers()
    setLog([])
    setRetries(0)
    setFailed(false)
    setActive(0)
    setPhase('running')

    const failures = 1 + Math.floor(Math.random() * 2) // 1 or 2 rejections
    let time = 0
    const step = (ms, fn) => {
      time += ms
      timers.current.push(setTimeout(fn, time))
    }
    const say = (line) => setLog((l) => [...l, line])

    step(0, () => say('Transcript in. Three languages and one run-on sentence.'))
    step(900, () => {
      setActive(1)
      say('Agents are pulling out decisions, owners, and dates.')
    })

    for (let i = 0; i < failures; i++) {
      step(1100, () => {
        setActive(2)
        setFailed(false)
        say(`Schema check, attempt ${i + 1}.`)
      })
      step(900, () => {
        setFailed(true)
        setRetries(i + 1)
        say(`Rejected: ${REJECTIONS[i]}. Sending it back.`)
      })
      step(900, () => {
        setFailed(false)
        setActive(1)
        say('Trying again. No complaints filed.')
      })
    }

    step(1100, () => {
      setActive(2)
      say(`Schema check, attempt ${failures + 1}.`)
    })
    step(900, () => {
      setActive(3)
      setPhase('done')
      say('Passed. Report delivered. Silent failures: 0.')
    })
  }

  return (
    <div className="retry">
      <ol className="stages" aria-label="Pipeline stages">
        {STAGES.map((name, i) => {
          let cls = 'stage'
          if (active > i) cls += ' passed'
          if (active === i) {
            cls += failed && i === 2 ? ' fail' : ' active'
            if (phase === 'done' && i === 3) cls += ' pass'
          }
          return (
            <li key={name} className={cls}>
              {name}
            </li>
          )
        })}
      </ol>

      <div className="retry-controls">
        <button
          type="button"
          className="btn primary"
          onClick={run}
          disabled={phase === 'running'}
        >
          {phase === 'idle'
            ? 'Run the pipeline'
            : phase === 'running'
              ? 'Running'
              : 'Run it again'}
        </button>
        <p className="counters">
          <span>
            Retries: <strong>{retries}</strong>
          </span>
          <span>
            Silent failures: <strong>0</strong>
          </span>
        </p>
      </div>

      <ul className="retry-log" aria-live="polite">
        {log.length === 0 && (
          <li className="muted">Press the button and watch one transcript go through.</li>
        )}
        {log.map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>

      {caption && <p className="muted small">{caption}</p>}
    </div>
  )
}
