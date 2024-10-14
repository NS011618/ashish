import {  BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";

import { Header, Home, Skills, Projects, Experience, Contact , ThemeContextProvider} from "./components";


function App() {
  return (
    <>
      <div className="font-sans">
      <ThemeContextProvider>
        <Header />
      </ThemeContextProvider>
        <Home />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </>
  );
}

export default App;
