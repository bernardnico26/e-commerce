import { Navigate, useNavigate } from "react-router-dom";

const Redirection=()=>{
    const token = JSON.parse(localStorage.getItem("userToken"))
    if( token != null){
        return <Navigate to="/article" />
    }else{
        return <Navigate to="/login"/>
    }
}
export default Redirection;