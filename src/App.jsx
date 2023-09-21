import Header from "./components/Header";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import useThemeStore from "./context";
import { Routes,Route } from "react-router-dom";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Search from "./components/Search";
function App() {
  const { darkTheme } = useThemeStore();
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="min-h-screen bg-[rgb(242,243,244)] dark:bg-[#1f1b24] mx-auto pt-[70px]">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/search" element={<Search />}/>
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />}/>
        </Routes>
        
      </div>
    </div>
  );
}

export default App;
