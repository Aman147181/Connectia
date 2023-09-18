import Header from "./components/Header";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
function App() {
  return (
    <div className="min-h-screen bg-white mx-auto">
      <Header />
      <Navbar />
      <MainContent/>
    </div>
  );
}

export default App;
