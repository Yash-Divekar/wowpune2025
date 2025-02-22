import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <main>
      <Navbar />
      <Home />
      <About />
    </main>
  );
}

export default App;
