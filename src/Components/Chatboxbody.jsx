import "./Chatboxbody.css";

const Chatboxbody = () => {

    const messages = [
        { sender: "Hi", receiver: "Hello" },
        { sender: "How are you?", receiver: "I'm good, thanks!"},
           { sender: "epdi irukeenga", receiver: "nalla iruken"
         },
         { sender: "Saaptengala", receiver: "Aaaaah Sapten"
         }
    ];

    return (
        <>
        <div className="whole"> 
            {messages.map((message, index) => (
                <section className="container" key={index}>
                    <div className="sendermsg">
                        <p>{message.sender}</p>
                    </div>
                    <div className="recievermsg">
                        <p>{message.receiver}</p>
                    </div>
                </section>
            ))}
        </div>
        <div className="searchbar">
            <input type="text" placeholder="Message"></input>
             
        </div>
        </>
    );
}

export default Chatboxbody;
