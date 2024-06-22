import React from 'react'
import Form from "./components/Form";
import UglyThings from "./components/UglyThings";
import { UglyThingsContextProvider } from "./context/UglyThingsContext";

import './App.css'

function App() {
  

  return (
    <>
    <UglyThingsContextProvider>
      <Form />
      <UglyThings />
    </UglyThingsContextProvider>
  </>
  )
}

export default App
// npm run dev