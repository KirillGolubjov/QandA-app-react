import React, { useState } from 'react'
import { AiOutlineQuestion } from 'react-icons/ai'
import data from './data'
import SingleQuestion from './Question'
function App() {
  const [questions, setQuestions] = useState(data)

  return (
    <main className="main">
      <div className="container">
        <h3>questions and answers</h3>
        <section className="info">
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />
          })}
        </section>
      </div>
    </main>
  )
}

export default App
