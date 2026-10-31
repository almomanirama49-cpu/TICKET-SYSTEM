import TicketCounter from './components/TicketCounter'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>استقبال دفعة من التذاكر</h1>
      </header>

      <TicketCounter />
    </div>
  )
}

export default App
