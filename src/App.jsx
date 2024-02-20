import { useState } from 'react'
import './App.css'
import { Content } from './components/Content/Content'
import { Slider } from './components/Slider/Slider'
import { ColorPicker } from './components/ColorPicker/ColorPicker'

function App() {

  const [styleContent, setStyleContent] = useState({
    color: "rgba(255,0,0,1)"
  })

  const updateTextSize = (newSize) => {
    setStyleContent({
      ...styleContent,
      fontSize: parseInt(newSize)
    })
  }

  const updateInterlettrage = (newInter) => {
    setStyleContent({
      ...styleContent,
      letterSpacing: `${newInter}px`
    })
    console.log
  }

  const updatePadding = (newPadding) => {
    setStyleContent({
      ...styleContent,
      padding: `${newPadding}px`
    })
  }

  const updateTextColor = (colorObject) => {
    let temp = {...styleContent}
    temp.color = `rgba(${colorObject.red},${colorObject.green},${colorObject.blue},1)`
    setStyleContent({...temp})
  }

  return (
    <div className='app'>
      <h1>TP SKYBLOG</h1>
      <div>
        <Slider name='Taille du texte' min={0} max={100} onValueChange={updateTextSize} />
      </div>
      <div>
        <Slider name="Interlettrage" min={0} max={10} onValueChange={updateInterlettrage} />
      </div>
      <div>
        <Slider name="Padding" min={0} max={150} onValueChange={updatePadding} />
      </div>
      <div>
        <ColorPicker onValueChange={updateTextColor}/>
      </div>
      <Content style={styleContent} />
    </div>
  )
}

export default App
