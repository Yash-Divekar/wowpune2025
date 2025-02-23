import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import CFS from "./pages/CFS";
import {Home, Previous_speaker, Previous_Sponcers , FAQ , Footer} from "./pages/index";

function App() {
  return (
    <main className="font-sans">
      <Navbar />
      <Home />
      <About />
      <Previous_speaker />
      <CFS />
      <Previous_Sponcers />
      <FAQ />
      <Footer />
    </main>
  );
}

export default App;
