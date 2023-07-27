import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";


function App() {
  const [mode, setMode]  = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
      setAlert(null);
      },1500);

  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#27374D';
      showAlert("Dark Mode has been enabled","success");
      // document.title = 'TextUtils - Dark Mode';
     
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","success");
      // document.title = 'TextUtils - Light Mode'; 
    }
  }

  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">   
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>} >
            </Route>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode}/>}>
            </Route>
          </Routes>
      </div>
      </Router>
    </>
  )
}

export default App;
