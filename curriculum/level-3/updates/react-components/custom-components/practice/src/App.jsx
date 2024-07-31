import React from 'react'
import './App.css'

function App() {
  const username = "Menoko OG- Original Geek!"

  const userStyles = {
    backgroundColor: "blue",
    color: "white",
  }
  

  return (
    <>
      <h style={userStyles}>Hello, {username}</h>
      <ol>
        <li>This is react !!!</li>
        <li>React is awesome !!!!!</li>
      </ol>
        
    </>
  )
}

export default App
