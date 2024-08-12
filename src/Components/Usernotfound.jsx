import './Usernotfound.css'

const Usernotfound=()=>
{
    return (
        <>

        <section className="notcont"  >
            <img src="unf.webp" alt="Account Not found" />
        </section>

        <section className="messcont">

            <div className="mes">
                <h1>
                    User Not Found
                </h1>
                <h3>
                    Invalid Username or Password
                </h3>
            </div>

        </section>
        
        </>
    )
}

export default Usernotfound