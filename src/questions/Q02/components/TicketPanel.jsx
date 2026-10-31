import { useState } from 'react'

function TicketPanel({ id, subject = 'Untitled Ticket', status, children }) {
  const [isExpanded, setIsExpanded] = useState(false)

  function toggleDetails() {
    setIsExpanded((prev) => !prev)
  }

  return (
    <div className="ticket-panel">
      <div className="ticket-header">
        <span className="ticket-id">#{id}</span>
        <h3 className="ticket-subject">{subject}</h3>
        <span className={`ticket-status ${status.toLowerCase()}`}>{status}</span>
      </div>

      <button className="ticket-button" onClick={toggleDetails}>
        {isExpanded ? 'إخفاء التفاصيل' : 'عرض التفاصيل'}
      </button>

      {isExpanded && <div className="ticket-details">{children}</div>}
    </div>
  )
}

export default TicketPanel
