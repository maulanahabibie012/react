import Navbar from "../../Components/Navbar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export default function MenuDetail() {
    const { id } = useParams();
    const [menu, setMenu] = useState({});
    const getMenu = () => {
        axios
            .get(`https://api.mudoapi.site/menu/${id}`)
            .then(res => {
                console.log(res);
                const dataMenu = res.data.data;
                setMenu(dataMenu);
            })
            .catch(err => {
                console.log("error data", err);
            });
    }
    useEffect(() => {
        getMenu();
    }, [])
    return (
        <div>
            <Navbar/>
            <h1>Ini Detail Menu</h1>
            <h2>ID Menu : {useParams().id}</h2>
            <div>
                <h2>{menu.name}</h2>
                <img style={{width:"200px"}} src={menu.imageUrl} alt="" />
                <h3>Price : {menu.priceFormatted}</h3>
                <p>{menu.description}</p>
            </div>
        </div>
    );
}