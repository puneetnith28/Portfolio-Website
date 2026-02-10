import { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/sections/Hero.jsx";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import VolunteerExperience from "./components/sections/VolunteerExperience";
import Education from "./components/sections/Education";
import StartCanvas from "./components/canvas/Stars";
import Projects from "./components/sections/Projects";
// import Certificates from "./components/sections/Certificates";
import Blogs from "./components/sections/Blogs";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar />
        <StartCanvas />
        <div>
          <Hero />
          <Skills />
          <Experience />
          <VolunteerExperience />
          <Projects />
          {/* <Certificates /> */}
          <Blogs />
          <Education />
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
