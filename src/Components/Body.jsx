import Chatbox from "./Chatbox"
 
import Chatcard from "./Chatcard"
import Header from "./Header"
const Body=()=>{
    return(
        <>

         <Header/>
         <div className="appbody">
         <Chatcard/>
         <Chatbox/>
          
         </div>
        </>
    )
}

export default Body