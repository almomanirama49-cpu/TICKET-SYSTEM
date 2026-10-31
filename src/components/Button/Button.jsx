import './Button.css'

function Button({ children, onClick, disabled = false, variant = 'primary' }) {
  return (
    <button
      type="button"
      className={`button button--${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
