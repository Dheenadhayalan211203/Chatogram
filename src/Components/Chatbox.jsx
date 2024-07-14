import Chatboxbody from "./Chatboxbody"
import Chatboxheader from "./Chatboxheader"

const Chatbox=()=>{

    return(
        <>
          <div className="chatboxbody">
          <Chatboxheader/>
          <Chatboxbody/>
          </div>
        </>
    )

}

export default Chatbox