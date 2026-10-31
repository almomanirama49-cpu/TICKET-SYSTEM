import { useState } from 'react'
import Question01 from './questions/Q01/Question01'
import Question02 from './questions/Q02/Question02'
import Question03 from './questions/Q03/Question03'
import Question04 from './questions/Q04/Question04'
import Question05 from './questions/Q05/Question05'
import Question06 from './questions/Q06/Question06'
import './App.css'

const questions = [
  { number: 1, title: 'متابعة التذاكر', Component: Question01 },
  { number: 2, title: 'بطاقات التذاكر', Component: Question02 },
  { number: 3, title: 'تعديل التذكرة', Component: Question03 },
  { number: 4, title: 'استقبال دفعة', Component: Question04 },
  { number: 5, title: 'متابعة تذكرة', Component: Question05 },
  { number: 6, title: 'لوحة التذاكر', Component: Question06 },
]

function App() {
  const [current, setCurrent] = useState(1)

  const { Component } = questions.find((question) => question.number === current)

  return (
    <div className="app">
      <nav className="question-nav">
        {questions.map(({ number, title }) => (
          <button
            key={number}
            className={number === current ? 'active' : ''}
            onClick={() => setCurrent(number)}
          >
            <span className="question-number">السؤال {number}</span>
            {title}
          </button>
        ))}
      </nav>

      <Component />
    </div>
  )
}

export default App
