import './StatusMessage.css'

function StatusMessage({ children, type = 'info' }) {
  return (
    <p className={`status-message status-message--${type}`} role="status">
      {children}
    </p>
  )
}

export default StatusMessage
