import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ImportantDates from './components/ImportantDates';
import AwardCategories from './components/AwardCategories';
import YouthEntrepreneurAward from './components/YouthEntrepreneurAward';
import GeneralInstructions from './components/GeneralInstructions';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ImportantDates />
      <AwardCategories />
      <YouthEntrepreneurAward />
      <GeneralInstructions />
      <Footer />
    </div>
  );
}

export default App;
