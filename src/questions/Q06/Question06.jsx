import { useState } from 'react'
import Panel from './components/Panel'
import StatCard from './components/StatCard'
import TicketCard from './components/TicketCard'
import './Question06.css'

const initialTickets = [
  {
    id: 1001,
    subject: 'Login Issue',
    status: 'Open',
    assignedTo: 'Ahmad',
  },
  {
    id: 1002,
    subject: 'Payment Failed',
    status: 'Pending',
    assignedTo: 'Sara',
  },
  {
    id: 1003,
    subject: 'Report Download',
    status: 'Closed',
    assignedTo: 'Omar',
  },
]

function Question06() {
  const [tickets, setTickets] = useState(initialTickets)

  const [first, second, third] = tickets

  const total = tickets.length
  const openCount = tickets.filter((ticket) => ticket.status === 'Open').length
  const pendingCount = tickets.filter((ticket) => ticket.status === 'Pending').length
  const closedCount = tickets.filter((ticket) => ticket.status === 'Closed').length
  const activeCount = openCount + pendingCount
  const allClosed = closedCount === total

  function changeStatus(id, newStatus) {
    setTickets((prev) =>
      prev.map((ticket) => (ticket.id === id ? { ...ticket, status: newStatus } : ticket)),
    )
  }

  function resetBoard() {
    setTickets(initialTickets.map((ticket) => ({ ...ticket })))
  }

  return (
    <div className="q06">
      <header className="header">
        <h1>لوحة التذاكر</h1>
      </header>

      <Panel title="الإحصاءات">
        <div className="stats">
          <StatCard title="الإجمالي" value={total} />
          <StatCard title="المفتوحة" value={openCount} />
          <StatCard title="المعلقة" value={pendingCount} />
          <StatCard title="المغلقة" value={closedCount} />
          <StatCard title="النشطة" value={activeCount} />
        </div>
      </Panel>

      {allClosed && <p className="message">تم إنجاز جميع التذاكر</p>}

      <Panel title="التذاكر">
        <div className="tickets">
          <TicketCard ticket={first} onChangeStatus={changeStatus} />
          <TicketCard ticket={second} onChangeStatus={changeStatus} />
          <TicketCard ticket={third} onChangeStatus={changeStatus} />
        </div>
      </Panel>

      <button className="reset-button" onClick={resetBoard}>
        إعادة ضبط اللوحة
      </button>
    </div>
  )
}

export default Question06
