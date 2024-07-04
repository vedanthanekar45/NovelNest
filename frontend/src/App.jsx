import Homepage from "./components/homepage"
import Register from "./components/authentication_components/Register"
import Login from "./components/authentication_components/Login"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
