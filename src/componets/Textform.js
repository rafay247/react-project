import React, {useState} from 'react'

export default function Textform(props) {

    const handleUpClick = () =>{
        let newText = text.toUpperCase() 
        setText(newText)
    }
    const handleLoClick = () =>{
        let newText = text.toLowerCase() 
        setText(newText)
    }
    const handleOnChange = (event) =>{
        setText(event.target.value)

    }
    const [text, setText] = useState("Enter the text")
    return (
        <>
        <div className='container'>
            <h2>{props.heading}</h2>
            <div className="mb-4">
                <textarea className="form-control"value ={text} onChange = {handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to Lowercase</button>
        </div>
        <di className="container my-3">
            <h1>Your text summery</h1>
            <p>{text.split(' ').length} words {text.length} character</p>
            <p>{0.008 * text.split(' ').length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </di>
        </>
    )
}




