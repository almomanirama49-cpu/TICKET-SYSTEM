import { useState } from 'react'

function TicketCounter() {
  const [openTickets, setOpenTickets] = useState(0)

  function receiveThreeTickets() {
    setOpenTickets((prev) => prev + 1)
    setOpenTickets((prev) => prev + 1)
    setOpenTickets((prev) => prev + 1)

    console.log('Inside handler:', openTickets)
  }

  function resetCounter() {
    setOpenTickets(0)
  }

  return (
    <section className="ticket-counter">
      <h2>Open Tickets: {openTickets}</h2>

      <div className="buttons">
        <button onClick={receiveThreeTickets}>استقبال ٣ تذاكر</button>
        <button className="reset-button" onClick={resetCounter}>
          إعادة ضبط العداد
        </button>
      </div>

      {openTickets > 0 && <p className="message">توجد تذاكر تحتاج إلى معالجة</p>}
    </section>
  )
}

export default TicketCounter
