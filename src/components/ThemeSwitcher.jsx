export default function ThemeSwitcher({ themes, value, onChange }) {
  return (
    <div className="theme-switch" role="group" aria-label="Choose a look">
      <span className="theme-label">Look</span>
      {themes.map((t) => (
        <button
          key={t.id}
          type="button"
          className={`theme-btn${value === t.id ? ' on' : ''}`}
          aria-pressed={value === t.id}
          onClick={() => onChange(t.id)}
        >
          {t.name}
        </button>
      ))}
    </div>
  )
}
