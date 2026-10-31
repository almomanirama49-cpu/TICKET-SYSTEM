import './AgentHeader.css'

function AgentHeader({ title, label, name }) {
  return (
    <header className="agent-header">
      <h1 className="agent-header__title">{title}</h1>
      <p className="agent-header__agent">
        {label}: <span className="agent-header__name">{name}</span>
      </p>
    </header>
  )
}

export default AgentHeader
