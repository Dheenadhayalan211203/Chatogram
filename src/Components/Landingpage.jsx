import Header from "./Header";
import "./Landingpage.css"
import { Navigate, useNavigate } from "react-router-dom"
const Landingpage=()=>{
    const navigate=useNavigate();
    const handlestart=()=>
    {
        navigate('/auth')
    }
    return(
        <>
            <Header/>
           <section className="main">
                           <div className="getstar">
                            <div><img src="logo.png" alt="" /></div>
                             
                             <h3>Start Chatting To Your Friends </h3>
                             <div className="getbut" onClick={handlestart }>
                                <h4>Get Started</h4>
                             </div>
                           </div>
           </section>

            
            
            
        </>
    )
}
export default Landingpage