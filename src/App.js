
import "./App.css";
import LandingPage from "./Components/Landingpage/LandingPage";
import Header from "./Components/Navbar/Header";
import Competitorpage from "./Components/CompetitorsPage/Competitorpage";
import SliderSetion from "./Components/SliderSection/SliderSetion";
import React from "react";
import ContactUs from "./Components/ContactUsSection/ContactUs";
import Footer from './Components/Footer/Footer'
function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage/>
      <Competitorpage/>
      <SliderSetion/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
