import Navbar from "../../Components/Navbar";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Usersections from "../../Components/Usersections";


function Home() {
  const [dataUser, setData] = useState([]);
  const getData = () => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((res) => {
        console.log("data berhasil", res);
        const dataUser = res.data.data;
        setData(dataUser);
      })
      .catch((err) => {
        console.log("data error", err);
      });
  };


  const [menu, setMenu] = useState([]);
  const getMenu = () => {
    axios
      .get("https://api.mudoapi.site/menus")
      .then((res) => {
        console.log(res);
        const dataMenu = res.data.data.Data;
        setMenu(dataMenu);
      })
      .catch((err) => {
        console.log("error data", err);
      });
  };
  useEffect(() => {
    getMenu();
    getData();
  }, []);

  return (
    <div>
    <Navbar />
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        {menu.map((menu) => (
          <div
            style={{ border: "1px solid black", width: "200px" }}
            key={menu.id}>
            <img style={{ width: "200px" }} src={menu.imageUrl} alt="menu" />
            <h1>{menu.name}</h1>
            <p>{menu.priceFormatted}</p>
            <p>{menu.description}</p>
            <button>
                <Link to={`/menu/${menu.id}`}>See Detail</Link>
            </button>
          </div>
        ))}
      </div>
      <Usersections dataUser={dataUser} />
      <hr />
    </div>
  );
}

export default Home;
