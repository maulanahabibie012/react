import "./style.css";
import { Link } from "react-router-dom";


const Sidebar = () => {
   
    return (
        <>
        <div style={{display:"flex", justifyContent:"space-around"}}>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
        </div>
        </>
    );
    };

export default Sidebar;