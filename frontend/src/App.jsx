import Homepage from "./components/Homepage"
import Register from "./components/authentication_components/Register"
import {Login} from "./components/authentication_components/Login"
import CreatePost from "./components/CreatePost"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import React from "react"
import './App.css'
import axios from 'axios'

export const userContext = React.createContext();
function App() {

  React.useEffect(() => {
    axios.get('http://localhost:3000/')
    .then(user => {
      console.log(user)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <userContext.Provider value="">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path ='/createpost' element={<CreatePost />}></Route>
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App
