import React from "react"
import axios from 'axios'
import { useAuth } from "../../auth/useAuth";
import LoadingDots from "../animations/LoadingDots";
import { getCsrfToken } from "../../auth/getCSRF";
import { useNavigate } from "react-router-dom";
import { fetchUserData } from "../../auth/fetchUserData";

function Login() {
    const navigate = useNavigate();
    const { setUser, loggedIn, setLoggedIn } = useAuth();
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // await login(username, password);
        try {
            const csrfToken = await getCsrfToken();
            if (!csrfToken) {
                console.error('Failed to get CSRF token');
                return;
            }
            await axios.post('http://127.0.0.1:8000/api/login/', {
                username,
                password,
            }, {
                headers: {
                    'X-CSRFToken': csrfToken,
                    'Content-Type': 'application/json',
                }, withCredentials: true
            });
            const user = await fetchUserData();
            setUser(user);
            setLoggedIn(true);
            // After successful login, redirect to homepage
            navigate('/')
        } catch (error) {
            setLoggedIn(false);         
            console.error('Login failed:', error);
        }
        setIsLoading(false);
    };

      // Password Show or Hide
      const [showPassword, setShowPassword] = React.useState(false); // State to toggle visibility
      const handleCheckboxChange = () => {
        setShowPassword(!showPassword);
      };

    return (
        <div className="bg-[#1d1d1d]">
            <div className="h-screen flex items-center justify-center">
                <div className="login-box text-xl flex-col items-center relative bg-[#1d1d1d] z-0 justify-center">
                    <div className="prata flex justify-center z-2 text-green-700 text-5xl mt-10">
                        <h1>Login</h1>
                    </div>
                    <div className="prata text-white flex justify-center z-2 text-2xl mt-6">
                        <h1>To continue with NovlNest</h1>
                    </div>
                    <form onSubmit={handleLogin} className="w-80 ml-[90px] mt-12">

                        <input onChange={(e) => setUsername(e.target.value)}
                        autoComplete='off' name="username" type="text" placeholder="Username"
                        className="block rounded-xl bg-[#1d1d1d] text-white h-16 mb-6 p-4 w-full border-white border"/>

                        <input onChange={(e) => setPassword(e.target.value)}
                        autoComplete='off' name="password" type={showPassword ? 'text' : 'password'} placeholder="Password"
                        className="block rounded-xl h-16 bg-[#1d1d1d] text-white mb-8 p-4 w-full border-white border"/>
                        <label className="flex">
                            <input type="checkbox" className="bg-white w-5 h-5 mb-4" checked={showPassword} onChange={handleCheckboxChange}/>
                            <p className="prata text-white ml-2">Show Password</p>
                        </label>

                        <button className="bg-green-700 h-12 rounded-xl mt-2 w-full text-white" 
                        disabled={isLoading}>
                            {isLoading ? <LoadingDots />: "Login"}
                        </button>
                    </form>
                    {loggedIn ?
                        <div className="prata flex justify-center z-2 text-red-600 text-xl mt-6">
                            <h1>Invalid Login Credentials!</h1>
                        </div> : <></>}
                    <div className="prata text-white flex justify-center z-2 text-2xl mt-6">
                        <h1>Not a user yet? Register <a href='/signup' className="text-green-700">here!</a></h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;