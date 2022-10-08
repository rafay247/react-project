import React from 'react'

export default function About(props) {

    // const [myStyle,setStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? 'black' : 'white'
    }
    // const [btnText,setBtnText] = useState("Dark mode")

    return (
        <>
            <div className='container' style={myStyle}>
                <h1 className='my-3'>About Us</h1>
                <div className="accordion my-3" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <strong>Analyze your text</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic iste excepturi ut exercitationem est expedita maiores praesentium, id ipsam incidunt.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <strong> Free to use</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est labore magnam illo eaque repudiandae ad quo corporis distinctio minima! Aliquid.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <strong>Browser compatible</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ipsa velit quas, aut accusantium tempore dolor aliquam. Molestiae magni aperiam perspiciatis placeat, exercitationem nam nemo nobis accusamus, distinctio, dolore recusandae.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
