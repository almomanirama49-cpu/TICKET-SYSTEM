import TicketPanel from './components/TicketPanel'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>بطاقات التذاكر</h1>
      </header>

      <div className="tickets">
        <TicketPanel id={1001} subject="Login Issue" status="Open">
          <p>صاحب الطلب: Lina</p>
          <p>وصف المشكلة: المستخدم لا يستطيع الدخول إلى حسابه.</p>
        </TicketPanel>

        <TicketPanel id={1002} subject="Payment Failed" status="Pending">
          <p>صاحب الطلب: Omar</p>
          <p>وصف المشكلة: ظهرت رسالة خطأ أثناء الدفع.</p>
        </TicketPanel>

        <TicketPanel id={1003} status="Closed">
          <p>صاحب الطلب: Sara</p>
          <p>ملاحظة الحل: تم حل المشكلة وإبلاغ المستخدم.</p>
        </TicketPanel>
      </div>
    </div>
  )
}

export default App
