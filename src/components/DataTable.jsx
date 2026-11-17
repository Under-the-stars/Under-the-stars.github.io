export default function DataTable({ title, note, head, rows }) {
  return (
    <div className="data-table">
      {title && <h5>{title}</h5>}
      {note && <p className="muted small">{note}</p>}
      <div className="bench-table-wrap">
        <table className="bench-table">
          <caption className="sr-only">{title}</caption>
          <thead>
            <tr>
              {head.map((h) => (
                <th scope="col" key={h}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, ri) => (
              <tr key={ri}>
                {r.map((c, i) =>
                  i === 0 ? (
                    <th scope="row" key={i}>
                      {c}
                    </th>
                  ) : (
                    <td key={i}>{c}</td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
