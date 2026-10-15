import { useEffect, useRef, useState } from 'react'

export default function Citation({ text }) {
  const [state, setState] = useState('idle') // idle, copied, failed
  const timer = useRef(null)

  useEffect(() => () => clearTimeout(timer.current), [])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setState('copied')
    } catch {
      setState('failed')
    }
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setState('idle'), 2200)
  }

  return (
    <div className="citation">
      <p className="citation-text">{text}</p>
      <button type="button" className="btn" onClick={copy}>
        {state === 'copied'
          ? 'Copied'
          : state === 'failed'
            ? 'Copy failed, select the text instead'
            : 'Copy citation'}
      </button>
    </div>
  )
}
