import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar";
import Story from "./components/Story/Story";
import Features from "./components/Features/Features";
import Gallery from "./components/Gallery/Gallery";
import Video from "./components/Videos/Video";
import Condition from "./components/Condition/Condition";
import Contact from "./components/Contact/Contact";
import { useEffect, useState } from "react";

function App() {

  const [scroll, setScroll] = useState(0);
  

  useEffect(() => {
    const handleScroll = () => {
      const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setScroll((window.scrollY / total) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <div id="hero">
        <Hero />
      </div>

      <Story />
      <Features />
      <Gallery />
      <Video />
      <Condition />
      <Contact />
      <div className="scroll-bar">
        <div style={{ width: `${scroll}%` }}></div>
      </div>
    </>
  )
}

export default App
