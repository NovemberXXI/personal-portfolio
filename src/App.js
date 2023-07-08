import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Mywork from "./components/Mywork";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";


function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Mywork/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
