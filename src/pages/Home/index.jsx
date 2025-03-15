import Navbar from "../../Components/Navbar";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  // const [dataUser, setData] = useState([]);
  // const getData = () => {
  //   axios
  //     .get("https://reqres.in/api/users")
  //     .then((res) => {
  //       console.log("data berhasil", res);
  //       const dataUser = res.data.data;
  //       setData(dataUser);
  //     })
  //     .catch((err) => {
  //       console.log("data error", err);
  //     });
  // };

  const [search, setSearch] = useState("");
  

  const [menu, setMenu] = useState([]);
  const [pagination, setPagination] = useState({
    perPage: 2,
    currentPage: 1,
    previousPage: null,
    nextPage: null,
    total: null,
  });
  const getMenu = () => {
    axios
      .get(`https://api.mudoapi.site/menus?name=${search}&perPage=${pagination.perPage}&page=${pagination.currentPage}`)
      .then((res) => {
        console.log(res);
        const dataMenu = res.data.data.Data;
        setMenu(dataMenu);
        setPagination({
          perPage: res.data.data.perPage,
          currentPage: res.data.data.currentPage,
          previousPage: res.data.data.previousPage,
          nextPage: res.data.data.nextPage,
          total: res.data.data.total,
        });
      })
      .catch((err) => {
        console.log("error data", err);
      });
  };
 console.log(pagination);
  const handlePrev = () => {
    setPagination({
      ...pagination,
      currentPage: pagination.currentPage - 1,
    });
  };

  const handleNext = () => {
    setPagination({
      ...pagination,
      currentPage: pagination.currentPage + 1,
    });
  };

  useEffect(() => {
    getMenu();
    //getData();
  }, []);

  useEffect(() => {
    getMenu();
    }, [search, pagination.currentPage]);


  return (
    <div>
    <Navbar />
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search"
      />
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
      <div>
        <button disabled={!pagination.previousPage} onClick={handlePrev}>Prev</button>
        {pagination.total &&
               Array.from(
                  { length: pagination.total - pagination.perPage - 1 },
                  (_, i) => i + 1
               ).map((pageNum) => (
                  <button
                     key={pageNum}
                     onClick={() => setPagination((prev) => ({ ...prev, currentPage: pageNum }))}
                  >
                     {pageNum}
                  </button>
               ))}
        <button disabled={!pagination.nextPage} onClick={handleNext}>Next</button>
      </div>
      {/* <Usersections dataUser={dataUser} /> */}
      <hr />
    </div>
  );
}

export default Home;
