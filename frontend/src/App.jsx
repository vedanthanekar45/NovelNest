import Homepage from "./components/Homepage"
import Register from "./components/authentication_components/Register"
import {Login} from "./components/authentication_components/Login"
import {CreatePost} from "./components/CreatePost"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path ='/createpost' element={<CreatePost />}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App
