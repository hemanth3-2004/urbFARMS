import React from "react";
import Header from "./components/header/header";
import HomePage from "./components/homePage/homePage";
import Footer from "./components/footer/footer";
import Boxes from "./components/homePage/Boxes";
import InfoPage from "./components/header/InfoPage";
import ChatbotWidget from "./components/homePage/chatBot";
import FAQ from "./components/FAQs";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FarmingTypes from "./components/homePage/farmingTypes";

function App() {
  return (
    <>
    <Router>
    <Header />
      <Routes>    
        <Route path="/" element={<HomePage />} /> {/* Your Home Page */}
        <Route path="/info" element={<InfoPage />} /> {/* New Info Page */} 
        <Route path="/crops" element={<Boxes />} />  
        <Route path="/faq" element={<FAQ />} />  
        <Route path="/types" element={<FarmingTypes />} />  

      </Routes>
      <ChatbotWidget />
      <Footer />
    </Router>
    </>
  );
}

export default App;
