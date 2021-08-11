import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Overlay from "./components/Overlay/Overlay";
import Square from "./components/Square/Square";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Overlay />
      <Square />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
