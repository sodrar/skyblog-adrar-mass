import './Slider.css'

export function Slider() {
    return (
        <div>
            <label>
                <input type="range" defaultValue={10} />
            </label>
        </div>
    )
}