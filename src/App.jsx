import Header from "./components/Header";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import useThemeStore from "./context";
function App() {
  const { darkTheme } = useThemeStore();
  return (
    <div className={darkTheme ? 'dark' : ''}>
    <div className="min-h-screen bg-[rgb(248,248,244)] dark:bg-slate-900 mx-auto">
        <Header />
      <Navbar />
      <MainContent/>
      </div>
      </div>
  );
}

export default App;
