import React,{useState} from 'react'
import "./App.css";
// import About from "./componets/About";
import Navbar from "./componets/Navbar";
import Textform from "./componets/Textform";

function App() {

  const [mode, setMode] = useState('Light');
  
  const toggleMode = () => {
    if (mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = 'black';
    }
    else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
    }
};
  return (
  <>
  <Navbar title="TextUtils" about="textutils about" mode={mode} toggleMode = {toggleMode} />
  {/* <Textform heading = "Enter the text to analyze"/> */}
  <Textform heading="Enter the text to analyze below" mode={mode}/>
  {/* <About/> */}
  </>
  )
}

export default App;