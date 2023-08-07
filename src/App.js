import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/navbar';
import Home from './Components/Home/home';
import Offers from './Components/Offers/offers';
import Popular from './Components/Popular/popular'

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Offers/>
    <Popular/>
    {/* <About/>
    <Blog/>
    <Footer/> */}
    </>
  );
}

export default App;
