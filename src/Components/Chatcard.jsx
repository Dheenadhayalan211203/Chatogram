import "./Chatcard.css";

const Chatcard = () => {

    const data = [{
        name: "Rahul",
        message: "Hello",
        time: "12:00",
        messagecount: 2
    },
{
    name: "Dheena",
    message: "Hello",
    time: "12:00",
    messagecount: 2
},

{
    name: "Abishek",
    message: "Hello",
    time: "12:00",
    messagecount: 7
},
{
    name: "Avinash",
    message: "Hello",
    time: "12:00",
    messagecount: 9
},
{
    name: "Uncle",
    message: "Hello",
    time: "12:00",
    messagecount: 8
}];

    return (
        <section className="cardcont">
            {data.map((item, index) => (
                <div className="card" key={index}>
                    <img src="profileph.png" alt="" />
                    <div className="name">
                        <h3>{item.name}</h3>   
                    </div>
                    <div className="countcont">
                        <div className="count">
                            {item.messagecount}
                        </div>
                    </div>
                    <div className="time">
                         <p>{data.time}</p>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Chatcard;
