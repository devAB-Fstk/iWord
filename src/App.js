import './App.css';
import { useState } from 'react';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {

  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
    msg : message,
    type : type
  })
  setTimeout(() =>{
    setAlert(null);
  },2000)
}
  

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#242c38';
      showAlert("Dark Mode has been Enabled", "success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been Enabled", "primary");
    }
  }

  

  return (
   <>
  {/* <BrowserRouter> */}
    {/* <Navbar title="TextUtils" aboutText=" About"/> */}
    <Navbar title="Textutils" aboutText=" About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">

    {/* /users ----------> component1
    /users/home -------->component2
    if we dont use exact keyword in this case it can render wrong
    component */}
        {/* <Routes>
          <Route exact path="/about" element = { <About />}>
          </Route> */}
          {/* <Route exact path="/"element = {<TextForm showAlert = {showAlert} heading = 'Enter your Text to analyze' mode={mode}/>}>
          </Route>
        </Routes> */}
        <TextForm showAlert = {showAlert} heading = 'Enter your Text to analyze' mode={mode}/>
    </div>
    {/*  </BrowserRouter> */}
   </>
  );
}

export default App;
