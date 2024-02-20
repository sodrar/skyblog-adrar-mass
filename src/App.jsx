import { useState } from 'react'
import './App.css'
import { Content } from './components/Content/Content'
import { Slider } from './components/Content/Slider/Slider'

function App() {

  const [styleContent, setStyleContent] = useState({
    color: "rgba(255,0,0,1)"
  })

  function updateTextSize(newSize) {
    console.log(newSize)
    setStyleContent({
      ...styleContent,
      fontSize: parseInt(newSize)
    })
    console.log(styleContent)
  }

  return (
    <div className='app'>
      <h1>TP SKYBLOG</h1>
      <Slider name='Taille du texte' min={0} max={100} onValueChange={updateTextSize} />
      <Content style={styleContent} />
    </div>
  )
}

export default App
