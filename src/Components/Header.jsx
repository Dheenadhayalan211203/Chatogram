import './header.css'

const Header=(props)=>{
    

    return(

        <>
        
        <section className="headcontainer">
            <div className="logocont">
                <div className="imgcont">
                    <img src="logo.png" alt="Logo" />
                </div>
                <div className="logtit">
                    <p>Chatogram</p>
                </div>
            </div>

            <div className="profcont">
                <section className="profpic">
                    <img src="profileph.png" alt="profilepic" />
                </section>
                <div className="logtit">
                    <p>{props.name}</p>
                </div>
            </div>
        </section>

        </>
    )

    
 }

 export default Header