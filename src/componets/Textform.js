import React, {useState} from 'react'

export default function Textform(props) {

    const handleUpClick = () =>{
        let newText = text.toUpperCase() 
        setText(newText)
    }
    const handleOnChange = (event) =>{
        setText(event.target.value)

    }
    const [text, setText] = useState("Enter the text")
    return (
        <div>
            <h2>{props.heading}</h2>
            <div className="mb-4">
                <textarea className="form-control"value ={text} onChange = {handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
        </div>
    )
}
