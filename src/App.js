import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Bio from "./Pages/Bio";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import Itineraries from "./Pages/Itineraries";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path ='/bio' element={<Bio/>}/>
        <Route path ='/contact' element={<Contact/>}/>
        <Route path ='/itineraries' element={<Itineraries/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
