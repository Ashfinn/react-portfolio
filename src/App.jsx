import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Navbar";
import About from "./components/About";
import Blog from "./components/Blog";
import Certs from "./components/Certs";
import Contact from "./components/Contact";
import Exp from "./components/Experience";
import Project from "./components/Project";
import Hero from "./components/Hero";
import ZoomBackground from "./components/Background";
function App() {
  return (
    <ZoomBackground>
      <Nav />
      <Hero />
      <About />
      <Project />
      <Exp />
      <Certs />
      {/* <Blog /> */}
      <Contact />
      <Footer />
    </ZoomBackground>
  );
}

export default App;
