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
    const handleCopyClick = () => {
        let text = document.getElementById('myBox')
        text.select();
        navigator.clipboard.writeText(text.value)

    }
    const handleRmoveSpacerClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const btnClassObj =  `btn btn-${props.mode === 'dark' ? 'light': 'dark'} mx-1`

    const [text, setText] = useState("")
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div className='container my-3' >
                    <h1>{props.heading}</h1>
                    <div className="mb-4" >
                        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6" style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                    </div>
                    <button className={btnClassObj} onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className={btnClassObj} onClick={handleLoClick}>Convert to Lowercase</button>
                    <button className={btnClassObj} onClick={handleClearClick}>Clear text</button>
                    <button className={btnClassObj} onClick={handleCopyClick}>Copy text</button>
                    <button className={btnClassObj} onClick={handleRmoveSpacerClick}>Remove extra spaces</button>
                </div>
                <div className="container my-2">
                    <h2>Your text summery</h2>
                    <p>{text.split(' ').length - 1} words {text.length} character</p>
                    <p>{0.008 * (text.split(' ').length - 1)} Minutes read</p>
                    <h3>Preview</h3>
                    <p>{text.length > 0 ? text : "Enter something in the above textbox to preview it here"}</p>
                </div>
            </div>
        </>
    )
}




