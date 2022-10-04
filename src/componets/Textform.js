import React, { useState } from 'react'

export default function Textform(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }
    const handleClearClick = () => {
        let newText = ""
        setText(newText)
    }
    const handleOnChange = (event) => {
        setText(event.target.value)

    }
    const [text, setText] = useState("")
    return (
        <>
            <div className="container">
                <div className='container my-3' >
                    <h1>{props.heading}</h1>
                    <div className="mb-4">
                        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
                    </div>
                    <button className='btn btn-secondary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className='btn btn-secondary mx-1' onClick={handleLoClick}>Convert to Lowercase</button>
                    <button className='btn btn-secondary mx-1' onClick={handleClearClick}>Clear text</button>
                </div>
                <div className="container my-2">
                    <h2>Your text summery</h2>
                    <p>{text.split(' ').length - 1} words {text.length} character</p>
                    <p>{0.008 * (text.split(' ').length - 1)} Minutes read</p>
                    <h3>Preview</h3>
                    <p>{text}</p>
                </div>
            </div>
        </>
    )
}




