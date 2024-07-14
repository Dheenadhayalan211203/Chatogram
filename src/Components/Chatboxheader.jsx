import "./Chatboxheader.css"

const Chatboxheader=()=>{

    const data=[{
        name:"Rahul",
        message:"Hello",
        time:"12:00",
        image:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
        
    }]
    return(
        <>
         {data.map(data=>(
            <section className="header">
            <div className="headcont">
                <div className="profimg">
                     <img src={data.image} alt="" />
                </div>
                <div className="name">

                        <p>{data.name}</p>

                    </div>
            </div>
        </section>
         ))}
        </>
    )
}

export default Chatboxheader