import { ActionFunction } from "react-router-dom";

const action:ActionFunction=async({request})=>{
    
      console.log("request: " +request.method )
    return "every thins is going fast"

}
export default action