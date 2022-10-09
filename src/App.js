import React, { useState } from 'react'
import "./App.css";
// import About from "./componets/About";
import Navbar from "./componets/Navbar";
import Textform from "./componets/Textform";
import Alert from "./componets/Alert";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
  }
  setTimeout(() => {
    setAlert(null)
  }, 2500);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been eanabled", 'success')
      // document.title = "TextUtils - Dark mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been eanabled", 'success')
      // document.title = "TextUtils - Light mode";
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
        
        {/* <Routes>
          <Route exact path="about" element={<About mode={mode} />} />
          <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
        </Routes>

      </Router> */}
    </>
  )
}

export default App;