import { useState } from 'react'

function TicketCard({ id, subject, status, assignedTo, description }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isFollowed, setIsFollowed] = useState(false)

  function toggleDetails() {
    setIsExpanded((prev) => !prev)
  }

  function toggleFollow(event) {
    event.stopPropagation()
    setIsFollowed((prev) => !prev)
  }

  return (
    <div className="ticket-card" onClick={toggleDetails}>
      <div className="ticket-header">
        <span className="ticket-id">#{id}</span>
        <h2 className="ticket-subject">{subject}</h2>
        <span className="ticket-status">{status}</span>
      </div>

      {isFollowed && <p className="follow-badge">تابع هذه التذكرة</p>}

      {isExpanded && (
        <div className="ticket-details">
          <p>الموظف المسؤول: {assignedTo}</p>
          <p>الوصف: {description}</p>
        </div>
      )}

      <button className="follow-button" onClick={toggleFollow}>
        {isFollowed ? 'إلغاء المتابعة' : 'متابعة التذكرة'}
      </button>
    </div>
  )
}

export default TicketCard
