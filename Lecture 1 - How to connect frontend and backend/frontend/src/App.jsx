/* eslint-disable no-unused-vars */


import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])
  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => setJokes(response.data)).catch((error) => console.log(error));
  },[jokes])
  return (
    <>
      <h1>How to Connect frontend to backend</h1>
      <div>
        <h1>{jokes.length}</h1>
        <div>
          {jokes.map((curr, index) => {
            return (
              <div key={index}>
                <h2>{curr.id}</h2>
                <h3>{curr.title}</h3>
                <h4>{curr.content}</h4>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App
