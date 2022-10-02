import "./App.css";
import Navbar from "./componets/Navbar";
import Textform from "./componets/Textform";

function App() {
  return (
  <>
  <Navbar title="TextUtils" about="textutils about" />
  
  <div className="container">
    <Textform heading = "Text analyzer"/>
  </div>
  </>
  )
}

export default App;