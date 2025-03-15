import { Navigate, Outlet } from "react-router-dom";
const ProtectedRoute = ({children}) => {
    const token = localStorage.getItem("AccessToken");

    if(!token){
        return <Navigate to="/login" />
    }
    return <>
    {children || <Outlet />}
    </>
}

export default ProtectedRoute;