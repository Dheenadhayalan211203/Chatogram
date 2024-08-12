import axios from "axios";
import React, { useState } from "react";
import "./Startup.css";
import { Navigate, useNavigate } from "react-router-dom";

const Startup = () => {
    const [mailid, setEmail] = useState();
    const [password, setPassword] = useState();
    const [clickevent,setclickevent]=useState("");
    const navigate=useNavigate();
     


    const handleLogin = async (e) => {
        e.preventDefault();
        setclickevent(<img src="loading.gif" alt="loading..." />)

        const loginData = { mailid, password };
         
         
        try {
            const response = await axios.post("https://chatogram-backend-1.onrender.com/login", loginData);
              

             response.data.islogin? navigate('/dashboard', ) :navigate('/unf')
            
             
            
        } catch (error) {
            console.error("Login error:", error);
        }

         
    };

     

    return (
        <div className="startup">
            <section className="logincont">
                <div><img src="logo.png" alt="Company Logo" /></div>
                <form onSubmit={handleLogin}>
                    <input type="email" placeholder="Email eg: abc@gmail.com" required onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit" className="loginbut">
                        <h3>Login</h3>
                    </button>
                </form>

                <div className="signup">
                    <p>Don't have an account?</p>
                       
                       <div className="sucon">
                       <a href="/signup">Signup</a> 
                       </div>
                </div>

                <section className="loading">

                    <div className="gif">
                         {clickevent}
                        
                    </div>

                </section>
                  
                     
            </section>
        </div>
    );
}

export default Startup;
