import { Navigate, Outlet } from "react-router-dom";

const ProtectedRouter =()=>{
    if (localStorage.length>0) {
        return (
        <>
            <Outlet/>
        </>)
    }else{
        return (<Navigate to="/login"/>)
    }
}
export default ProtectedRouter;