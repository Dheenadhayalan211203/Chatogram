import './Signup.css'

const Signup=()=>{
    return(
        <>
           <div className="container">

            <div className="box">
                 <form action="submit">

                    <img src="logo.png" alt="" />
                    <input type="text " placeholder='Emailid' />
                    <input type="text" placeholder="Password" />
                    <input type="text " placeholder='confirm password' />
                    <input type="text" />
                 </form>
            </div>
            
            </div>   
        </>
    )
}

export default Signup