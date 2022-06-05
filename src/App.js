import About from "./components/About";
import Contact from "./components/Contact";
import Hobbies from "./components/Hobbies";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Work from "./components/Work";


function App() {
  return (
    <div>
     <Navbar></Navbar>
     <Home></Home>
     <About />
     <Skills />
     <Work />
     <Hobbies />
     <Contact />
    </div>
  );
}

export default App;
