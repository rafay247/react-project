import { useState } from "react";
import "./App.css";
// import About from "./componets/About";
import Navbar from "./componets/Navbar";
import Textform from "./componets/Textform";

function App() {

  const [Mode, setMode] = useState('Light');

  return (
  <>
  <Navbar title="TextUtils" about="textutils about" mode={Mode} />
  <Textform heading = "Enter the text to analyze"/>
  {/* <About/> */}
  </>
  )
}

export default App;