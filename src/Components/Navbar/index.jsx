import "./style.css"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
   const token = localStorage.getItem("AccessToken");
   const navigate = useNavigate();

   const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
   };

    return (
        <>
        <div style={{display:"flex", justifyContent:"space-between"}}>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/pokemon">Pokemon</Link>
            {token && <button onClick={handleLogout}>Logout</button>}
        </div>
        </>
    );
    };

export default Navbar;