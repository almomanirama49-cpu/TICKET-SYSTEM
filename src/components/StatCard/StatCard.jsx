import './StatCard.css'

function StatCard({ label, value, variant = 'default' }) {
  return (
    <article className={`stat-card stat-card--${variant}`}>
      <h2 className="stat-card__label">{label}</h2>
      <p className="stat-card__value">{value}</p>
    </article>
  )
}

export default StatCard
