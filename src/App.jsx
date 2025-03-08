import Home from "./pages/Home";
import Login from "./pages/Login";
import MenuDetail from "./pages/MenuDetail";

import {BrowserRouter, Routes, Route} from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/menu/:id" element={<MenuDetail/>}/>
    </Routes>
    </BrowserRouter>

  );
}
export default App;