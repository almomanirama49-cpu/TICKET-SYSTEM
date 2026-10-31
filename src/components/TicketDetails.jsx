function TicketDetails({ ticket, onToggleAssignee, onTogglePriority, onToggleDepartment }) {
  const { id, subject, status, priority, assignedTo, requester } = ticket
  const { name, department, email } = requester

  return (
    <div className="ticket-details">
      <div className="ticket-header">
        <span className="ticket-id">#{id}</span>
        <h2 className="ticket-subject">{subject}</h2>
        <span className="ticket-status">{status}</span>
      </div>

      {priority === 'Urgent' && <p className="alert">هذه التذكرة عاجلة</p>}

      <div className="info">
        <p>الأولوية: {priority}</p>
        <p>الموظف المسؤول: {assignedTo}</p>
      </div>

      <div className="info">
        <h3>صاحب الطلب</h3>
        <p>الاسم: {name}</p>
        <p>القسم: {department}</p>
        <p>البريد الإلكتروني: {email}</p>
      </div>

      <div className="buttons">
        <button onClick={onToggleAssignee}>
          {assignedTo === 'Ahmad' ? 'تحويل إلى Sara' : 'تحويل إلى Ahmad'}
        </button>
        <button onClick={onTogglePriority}>
          {priority === 'Normal' ? 'تعيين كعاجلة' : 'تعيين كعادية'}
        </button>
        <button onClick={onToggleDepartment}>
          {department === 'Sales' ? 'نقل إلى قسم IT' : 'نقل إلى قسم Sales'}
        </button>
      </div>
    </div>
  )
}

export default TicketDetails
