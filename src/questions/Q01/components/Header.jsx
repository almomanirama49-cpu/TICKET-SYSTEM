function Header({ name }) {
  return (
    <header className="header">
      <h1>لوحة متابعة التذاكر</h1>
      <p>الموظف: {name}</p>
    </header>
  )
}

export default Header
