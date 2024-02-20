import { useState } from 'react'
import './Slider.css'

export function Slider({name, onValueChange, min, max}) {
    
    const updateValue = e => {
        onValueChange(e.target.value)
    }

    return (
        <div>
            <label>
                {name}
                <input type="range" min={min} max={max} onInput={updateValue} defaultValue={10} />
            </label>
        </div>
    )
}