import './Content.css'
import { useState } from 'react'

export function Content(){

    const [content, setContent] = useState("Ecrivez ici.....")

    return (
        <div>
            <textarea name="content" id="content" cols="150" rows="10" defaultValue={content} onChange={e => {setContent(e.target.value)}}></textarea>
            <div dangerouslySetInnerHTML={{__html: content}}>

            </div>
        </div>
    )
}