import axios from "axios";
import Navbar from "../../Components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    console.log(e.target.value);
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    setLoading(true);
    const payload = {
      username: username,
      password: password,
      expiresInMins: 30,
    };
    axios
      .post("https://dummyjson.com/auth/login", payload)
      .then((res) => {
        console.log("data berhasil", res);
        const token = res.data.accessToken;
        localStorage.setItem("AccessToken", token);
        setMessage("Berhasil Login");
        setTimeout(() => {
            navigate("/");
        })
      })
      .catch((err) => {
        console.log("data error", err.response);
        setMessage(err.response.data.message);
      })
      .finally(() => {
        setLoading(false)
    });
  };

  return (
    <div>
      <Navbar />
      <h1>Silahkan Login</h1>
      <div>
        <label htmlFor="userName">User Name</label>
        <br />
        <input
          onChange={handleUsernameChange}
          type="text"
          name=""
          id=""
          placeholder="Username"
        />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          onChange={handlePasswordChange}
          type="password"
          name=""
          id=""
          placeholder="Password"
        />
        <br />
        <button disabled={loading} onClick={handleSubmit}>
            {loading ? "Loading..." : "Login"}
        </button>
        {message && (
            <div style={{ color: "red"  }}>{message}</div>
        )
        }
      </div>
    </div>
  );
}
