import React, { useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Works from "./components/Works";
import Contact from "./components/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { animation } from "./profile";

function App() {
  useEffect(() => {
    AOS.init({
      duration: animation.duration,
      once: animation.once,
      disable: !animation.animate,
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Header />
      <About />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
