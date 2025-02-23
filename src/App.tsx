import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import CFS from "./pages/CFS";
import Home from "./pages/Home";

function App() {
  return (
    <main className="font-sans">
      <Navbar />
      <Home />
      <About />
      <CFS />
    </main>
  );
}

export default App;
