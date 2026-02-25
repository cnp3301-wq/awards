import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ImportantDates from './components/ImportantDates';
import AwardCategories from './components/AwardCategories';
import YouthEntrepreneurAward from './components/YouthEntrepreneurAward';
import GeneralInstructions from './components/GeneralInstructions';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ImportantDates />
      <AwardCategories />
      <YouthEntrepreneurAward />
      <GeneralInstructions />
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
