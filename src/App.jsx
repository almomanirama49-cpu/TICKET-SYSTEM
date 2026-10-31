import { useState } from 'react'
import TicketDetails from './components/TicketDetails'
import './App.css'

const initialTicket = {
  id: 204,
  subject: 'Login Issue',
  status: 'Open',
  priority: 'Normal',
  assignedTo: 'Ahmad',
  requester: {
    name: 'Lina',
    department: 'Sales',
    email: 'lina@example.com',
  },
}

function App() {
  const [ticket, setTicket] = useState(initialTicket)
  const [isEdited, setIsEdited] = useState(false)

  function toggleAssignee() {
    setTicket((prev) => ({
      ...prev,
      assignedTo: prev.assignedTo === 'Ahmad' ? 'Sara' : 'Ahmad',
    }))
    setIsEdited(true)
  }

  function togglePriority() {
    setTicket((prev) => ({
      ...prev,
      priority: prev.priority === 'Normal' ? 'Urgent' : 'Normal',
    }))
    setIsEdited(true)
  }

  function toggleDepartment() {
    setTicket((prev) => ({
      ...prev,
      requester: {
        ...prev.requester,
        department: prev.requester.department === 'Sales' ? 'IT' : 'Sales',
      },
    }))
    setIsEdited(true)
  }

  function resetTicket() {
    setTicket(initialTicket)
    setIsEdited(false)
  }

  return (
    <div className="app">
      <header className="header">
        <h1>تعديل بيانات التذكرة</h1>
      </header>

      <TicketDetails
        ticket={ticket}
        onToggleAssignee={toggleAssignee}
        onTogglePriority={togglePriority}
        onToggleDepartment={toggleDepartment}
      />

      {isEdited && <p className="message">تم تعديل بيانات التذكرة</p>}

      <button className="reset-button" onClick={resetTicket}>
        إعادة ضبط
      </button>
    </div>
  )
}

export default App
