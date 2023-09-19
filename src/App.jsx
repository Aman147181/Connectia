import Header from "./components/Header";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import useThemeStore from "./context";
function App() {
  const { darkTheme } = useThemeStore();
  return (
    <div className={darkTheme ? 'dark' : ''}>
    <div className="min-h-screen bg-[rgb(221,221,220)] dark:bg-[#1f1b24] mx-auto pt-[70px]">
        <Header />
      <Navbar />
        <MainContent />
        <MainContent />
        <MainContent />
        <MainContent/>
      </div>
      </div>
  );
}

export default App;
