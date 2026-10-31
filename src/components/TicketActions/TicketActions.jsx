import Button from '../Button/Button.jsx'
import { LABELS } from '../../constants/messages.js'
import './TicketActions.css'

function TicketActions({ onReceive, onComplete, onReset, canReceive, canComplete }) {
  return (
    <section className="ticket-actions">
      <Button onClick={onReceive} disabled={!canReceive}>
        {LABELS.receive}
      </Button>
      <Button onClick={onComplete} disabled={!canComplete} variant="secondary">
        {LABELS.complete}
      </Button>
      <Button onClick={onReset} variant="outline">
        {LABELS.reset}
      </Button>
    </section>
  )
}

export default TicketActions
