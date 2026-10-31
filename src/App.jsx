import { useState } from 'react'
import Header from './components/Header'
import StatCard from './components/StatCard'
import './App.css'

const agentInfo = {
  name: 'Ahmad',
  maxTickets: 8,
  startTickets: 2,
}

function App() {
  const { name, maxTickets, startTickets } = agentInfo

  const [tickets, setTickets] = useState(startTickets)

  const available = maxTickets - tickets

  function receiveTicket() {
    setTickets((prev) => (prev < maxTickets ? prev + 1 : prev))
  }

  function completeTicket() {
    setTickets((prev) => (prev > 0 ? prev - 1 : prev))
  }

  function resetTickets() {
    setTickets(startTickets)
  }

  return (
    <div className="app">
      <Header name={name} />

      <div className="cards">
        <StatCard title="السعة القصوى" value={maxTickets} />
        <StatCard title="التذاكر غير المنجزة" value={tickets} />
        <StatCard title="السعة المتاحة" value={available} />
      </div>

      <div className="buttons">
        <button onClick={receiveTicket} disabled={tickets === maxTickets}>
          استلام تذكرة
        </button>
        <button onClick={completeTicket} disabled={tickets === 0}>
          إنجاز تذكرة
        </button>
        <button onClick={resetTickets}>إعادة ضبط</button>
      </div>

      {tickets === maxTickets && (
        <p className="message">وصل الموظف إلى الحد الأقصى للتذاكر</p>
      )}

      {tickets === 0 && (
        <p className="message">لا توجد تذاكر تحتاج إلى معالجة</p>
      )}
    </div>
  )
}

export default App
