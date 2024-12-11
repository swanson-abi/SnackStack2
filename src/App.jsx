
import NavBar from "./Components/NavBar/navbar";
import Home from "./Pages/Home/home";
import Login from "./Pages/Login/login";
import Write from "./Pages/Write/write";
import Single from "./Pages/Single/single";
import Register from "./Pages/Register/register";
import Settings from "./Pages/Settings/settings";
import Calendar from "./Pages/Calendar/calendar";
import Cuisine from "./Pages/Cuisine";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Searched from "./Pages/Searched";
import RecipeDetail from "./Pages/RecipeDetail";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cuisine/:type" element={<Cuisine />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Write" element={<Write />} />
        <Route path="/Calendar" element={<Calendar />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
