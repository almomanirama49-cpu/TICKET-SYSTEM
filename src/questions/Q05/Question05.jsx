import TicketCard from './components/TicketCard'
import './Question05.css'

const ticket = {
  id: 1005,
  subject: 'Cannot Download Invoice',
  status: 'Pending',
  assignedTo: 'Omar',
  description: 'المستخدم لا يستطيع تنزيل الفاتورة من حسابه',
}

function Question05() {
  const { id, subject, status, assignedTo, description } = ticket

  return (
    <div className="q05">
      <header className="header">
        <h1>متابعة التذاكر</h1>
      </header>

      <TicketCard
        id={id}
        subject={subject}
        status={status}
        assignedTo={assignedTo}
        description={description}
      />
    </div>
  )
}

export default Question05
