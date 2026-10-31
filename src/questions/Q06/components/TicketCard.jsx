import StatusBadge from './StatusBadge'

const nextStep = {
  Open: { label: 'بدء المعالجة', nextStatus: 'Pending' },
  Pending: { label: 'إغلاق التذكرة', nextStatus: 'Closed' },
  Closed: { label: 'إعادة فتح التذكرة', nextStatus: 'Open' },
}

function TicketCard({ ticket, onChangeStatus }) {
  const { id, subject, status, assignedTo } = ticket
  const { label, nextStatus } = nextStep[status]

  return (
    <div className="ticket-card">
      <div className="ticket-header">
        <span className="ticket-id">#{id}</span>
        <h3 className="ticket-subject">{subject}</h3>
        <StatusBadge status={status} />
      </div>

      <p className="ticket-assigned">الموظف المسؤول: {assignedTo}</p>

      <button className="ticket-button" onClick={() => onChangeStatus(id, nextStatus)}>
        {label}
      </button>
    </div>
  )
}

export default TicketCard
