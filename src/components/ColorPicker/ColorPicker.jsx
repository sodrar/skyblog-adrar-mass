import { useEffect, useState } from "react"

export function ColorPicker({ onValueChange }) {

    const [red, setRed] = useState(255)
    const [green, setBlue] = useState(0)
    const [blue, setGreen] = useState(0)

    function updateRed(event) {
        setRed(event.target.value)
    }

    function updateBlue(event) {
        setBlue(event.target.value)
    }

    function updateGreen(event) {
        setGreen(event.target.value)
    }

    useEffect(() => {
        onValueChange({
            red: red,
            green: green,
            blue: blue
        });
    }, [red, green, blue])

    return (
        <div >
            <label>Red
                <input type="range" onInput={updateRed} max="255" defaultValue={red} />
            </label>
            <label>Green
                <input type="range" onInput={updateBlue} max="255" defaultValue={green} />
            </label>
            <label>Blue
                <input type="range" onInput={updateGreen} max="255" defaultValue={blue} />
            </label>
        </div>
    )
}
