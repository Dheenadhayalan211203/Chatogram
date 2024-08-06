import './Dashboard.css'


import Header from "./Header";

const Dashboard = () => {
  return (
    <>
      <section className="daashboard">
        <Header />
        <section className="dashcont">
          <div className="chatcardcont">

             <div className="chatcard">

                <div className="prof">
                    <img src="profileph.png" alt="profile" />

                </div>

                <div className="frname">
                    <p>Xyz</p>
                </div>

                <div className="details">

                    <div className="mscont">
                        <p>3</p>
                    </div>

                    <div className="time">

                        <p>10 : 24 </p>
                    </div>

                </div>

             </div>

          </div>

          <div className="chatboxcont">

             <div className="chatbox">
                <sectioon className="head">

                </sectioon>
             </div>
          

          </div>
        </section>
      </section>
    </>
  );
};

export default Dashboard;
