import React from "react"

function Navbar() {
    return (
        <div>
            <nav className="bg-white">
                <div className="logo text-[#0d9221] ml-14 mt-9 text-4xl">
                    <a href="#"><h2>NovelNest</h2></a>
                </div>
                <div className="nav-buttons">
                    <a href="#"><h3 className="webpage-butt text-xl text-center hover:text-[#0d9221]">
                        Home
                    </h3></a>
                    <a href="#"><h3 className="webpage-butt text-xl text-center hover:text-[#0d9221]">
                        Explore
                    </h3></a>
                    <a href="#"><h3 className="webpage-butt text-xl text-center hover:text-[#0d9221]">
                        Sell
                    </h3></a>
                    <a href="#"><h3 className="webpage-butt text-xl text-center hover:text-[#0d9221]">
                        About Us
                    </h3></a>
                    <button className="login-butt text-white cursor-pointer outline-none 
                    border-none text-base text-center transition-all 
                    duration-300 ease-linear relative bg-[#0d9221] 
                    rounded-[10px] hover:bg-[#2db40c]">
                        Login
                    </button>
                    <button className="register-butt text-white cursor-pointer outline-none 
                    border-none text-base text-center transition-all 
                    duration-300 ease-linear relative bg-[#0d9221] 
                    rounded-[10px] hover:bg-[#2db40c]">
                        Register
                    </button>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;