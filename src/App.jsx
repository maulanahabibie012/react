import Home from "./pages/Home";
import Login from "./pages/Login";
import MenuDetail from "./pages/MenuDetail";
import Profile from "./pages/Profile";
import Pokemon from "../../Day31-react/src/pages/pokemon/index.jsx";
import ProtectedRoute from "./routes/ProtectedRoute";
import {BrowserRouter, Routes, Route} from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/menu/:id" element={<MenuDetail/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/pokemon" element={<Pokemon/>}/>

    </Routes>
    </BrowserRouter>

  );
}
export default App;