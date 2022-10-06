import React, { useState } from 'react'
import "./App.css";
// import About from "./componets/About";
import Navbar from "./componets/Navbar";
import Textform from "./componets/Textform";
import Alert from "./componets/Alert";

function App() {

  const [mode, setMode] = useState('Light');
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
      showAlert("dark mode is eanabled", 'success')
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode is eanabled", 'success')

    }
  };
  return (
    <>
      <Navbar title="TextUtils" about="textutils about" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
      {/* <About/> */}
    </>
  )
}

export default App;