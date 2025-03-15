import { useState } from "react";
import axios from "axios";

const useUser = () => {
    const [users, setUser] = useState([]);

    const getUser = async() => {
        try {
            const response = await axios.get("https://reqres.in/api/users?page=1");
            setUser(response.data.data);
        } catch (error) {
            console.log(error);
            
        }
    };
    const oldUser = async() => {
        console.log("test");
    };

    return {
        users,
        getUser,
        oldUser,
    };
}

export default useUser;