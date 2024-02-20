import { useState } from 'react'
import './App.css'
import { Content } from './components/Content/Content'
import { Slider } from './components/Content/Slider/Slider'

function App() {

  return (
    <div className='app'>
      <h1>TP SKYBLOG</h1>
      <Slider />
      <Content />
    </div>
  )
}

export default App
