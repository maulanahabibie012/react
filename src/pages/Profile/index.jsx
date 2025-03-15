import axios from "axios";
import { useEffect, useState } from "react";
import useUser from "../../hooks/useUser";

const Profile = () => {
    const {users, getUser} = useUser();

    const [profile, setProfile] = useState({})

    const getProfile = async () => {
        const token = localStorage.getItem("AccessToken");
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        try {
            const response = await axios.get("https://dummyjson.com/auth/me", config);
            setProfile(response.data);
            console.log("response",response);
        } catch (error) {
            console.error("error", error.response);
        }
    };

    useEffect(() => {
        getProfile();
        getUser();
    }, [])

    return  (
        <div>
        <div className="profile">
            <h1>Profile</h1>
            <p>Username : {profile.username}</p>
            <img src={profile.image} alt="" />
            <p>Gender : {profile.gender}</p>
        </div>
        {
            users.length && users.map((user) => (
                <p key={user.id}>{user.email}</p>
            ))
        }
        </div>
    );
}
export default Profile;