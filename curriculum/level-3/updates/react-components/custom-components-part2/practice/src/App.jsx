import React from 'react'
import './App.css'

function App() {
  const username = "Menoko OG- Original Geek!"

  const userStyles = {
    backgroundColor: "blue",
    color: "white",
    textAlign: "center"
  }
  

  return (
    <>
      <h1 style={userStyles}>Hello, {username}</h1>
      <ol>
        <li>This is react !!! and  {username} loves it !!</li>
        <li>React is awesome !!!!!</li>
      </ol>
        
    </>
  )
}

export default App
