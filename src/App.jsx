import useThemeStore from "./context";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoutes from "./components/PrivateRoutes";
import Register from "./components/Register";
import MainPage from "./components/MainPage";
function App() {
  const { darkTheme } = useThemeStore();
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className=" min-h-screen bg-[rgb(242,243,244)] dark:bg-[#1f1b24] mx-auto pt-[70px]">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<PrivateRoutes />}>
              <Route path="*" element={<MainPage />} />
            
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
