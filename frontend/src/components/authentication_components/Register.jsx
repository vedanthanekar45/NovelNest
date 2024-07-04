import React from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";

function Register() {
    const [email, setEmail] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const navigate = useNavigate();

    function createUser(event) {
        event.preventDefault()
        axios.post('http://localhost:3000/register', {email, username, password})
        .then((result) => console.log(result))
        .catch((err) => console.log(err))
        navigate('/login')
    }

    return (
        <div>
            <div className="login-box flex items-center bg-green-100 h-screen">
                <form onSubmit={createUser} className="w-72 mx-auto">

                    <input onChange={(event) => {setEmail(event.target.value)}}
                    autoComplete='off' name="email" type="email" placeholder="Email"
                    className="block rounded-xl h-12 mb-6 p-4 w-full border-black border"/>

                    <input onChange={(event) => {setUsername(event.target.value)}}
                    autoComplete='off' name="username" type="text" placeholder="Username"
                    className="block rounded-xl h-12 mb-6 p-4 w-full border-black border"/>

                    <input onChange={(event) => {setPassword(event.target.value)}}
                    autoComplete='off' name="password" type="password" placeholder="Password"
                    className="block rounded-xl h-12 mb-6 p-4 w-full border-black border"/>

                    <button className="bg-green-700 h-12 rounded-xl w-full text-white">Register</button>
                </form>
            </div>
        </div>
    )
}

export default Register;