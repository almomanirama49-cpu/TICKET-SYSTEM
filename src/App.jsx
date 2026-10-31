import { useState } from 'react'
import AgentHeader from './components/AgentHeader/AgentHeader.jsx'
import StatCard from './components/StatCard/StatCard.jsx'
import TicketActions from './components/TicketActions/TicketActions.jsx'
import StatusMessage from './components/StatusMessage/StatusMessage.jsx'
import {
  AGENT_NAME,
  INITIAL_OPEN_TICKETS,
  MAX_CAPACITY,
  MIN_OPEN_TICKETS,
} from './constants/agent.js'
import { LABELS, MESSAGES } from './constants/messages.js'
import './App.css'

function App() {
  const [openTickets, setOpenTickets] = useState(INITIAL_OPEN_TICKETS)

  const availableCapacity = MAX_CAPACITY - openTickets
  const isAtMax = openTickets >= MAX_CAPACITY
  const isEmpty = openTickets <= MIN_OPEN_TICKETS

  const handleReceive = () => {
    setOpenTickets((prev) => Math.min(prev + 1, MAX_CAPACITY))
  }

  const handleComplete = () => {
    setOpenTickets((prev) => Math.max(prev - 1, MIN_OPEN_TICKETS))
  }

  const handleReset = () => {
    setOpenTickets(INITIAL_OPEN_TICKETS)
  }

  return (
    <main className="dashboard">
      <AgentHeader title={LABELS.title} label={LABELS.agent} name={AGENT_NAME} />

      <section className="dashboard__stats">
        <StatCard label={LABELS.maxCapacity} value={MAX_CAPACITY} />
        <StatCard label={LABELS.openTickets} value={openTickets} variant="warning" />
        <StatCard label={LABELS.availableCapacity} value={availableCapacity} variant="success" />
      </section>

      <TicketActions
        onReceive={handleReceive}
        onComplete={handleComplete}
        onReset={handleReset}
        canReceive={!isAtMax}
        canComplete={!isEmpty}
      />

      {isAtMax && <StatusMessage type="danger">{MESSAGES.maxReached}</StatusMessage>}
      {isEmpty && <StatusMessage type="info">{MESSAGES.noTickets}</StatusMessage>}
    </main>
  )
}

export default App
