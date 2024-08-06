import { useState } from 'react'
import './Signup.css'
import axios from 'axios'

const Signup=()=>{

    const[mailid,setmailid]=useState("")
    const[password,setpassword]=useState("")
    const[confirmpassword,setconfirmpassword]=useState("")
    const[name,setname]=useState("")
    const[phone,setphone]=useState("")

    const handlesignup=async(e)=>
    {
        e.preventDefault()
        const newuser={mailid,password,confirmpassword,name,phone}

         try{
             

    const response=await axios.post("https://chatogram-backend-1.onrender.com/signup",newuser)
    console.log(response.data)
         }

         catch
         {
            console.log("Error in adding the User or User Already exists")
         }
    }

   
    return(
        <>
            
  <div className="backround">
    
  <div className="container">

<div className="box">
    <h1>Signup</h1>
    <div className="logo">
        <img src="logo.png" alt="logo" />
    </div>
    <section className="forms">

        <form   action="submit" onSubmit={handlesignup}>
            <input type="text" placeholder='Emailid' onChange={(e)=>{ setmailid(e.target.value)}} required/>
            <input type="password" placeholder='Password' onChange={(e)=>{setpassword(e.target.value)}}  required/>
            <input type="password" placeholder='Confirm Password' onChange={(e)=>{setconfirmpassword(e.target.value)}}  required/>
            <input type="text" placeholder='Name' onChange={(e)=>{setname(e.target.value)}} required/>
            <input type="text" placeholder='Phone' onChange={(e)=>{setphone(e.target.value)}} required/>
            <input className='button' type="submit" placeholder='Signup'  />
        </form>

        <div className="signup">
                     <div className="logc">
                     <p>Back to Login </p>
                     </div>
                       
                       <div className="sucon">
                       <a href="/auth">Login</a> 
                       </div>
                </div>

    </section>
</div>
</div> 
  </div>
                
        
        </>
    )
}

export default Signup