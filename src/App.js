import React, { useState } from 'react'
import "./App.css";
import About from "./componets/About";
import Navbar from "./componets/Navbar";
import Textform from "./componets/Textform";
import Alert from "./componets/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  const [mode, setMode] = useState('');
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
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been eanabled", 'success')
      // document.title = "TextUtils - Light mode";
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been eanabled", 'success')
      // document.title = "TextUtils - Dark mode";
    }
  };
  return (
    <>
      <Router>
        <Navbar title="TextUtils" about="about" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
        </Routes>

      </Router>
    </>
  )
}

export default App;