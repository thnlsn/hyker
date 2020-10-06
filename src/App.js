import React from 'react';
import './css/style.css';

//Components
import Header from './components/Header/Header';
import About from './components/About/About';
import Features from './components/Features/Features';
import Booking from './components/Booking/Booking';
import Hikes from './components/Hikes/Hikes';
import Stories from './components/Stories/Stories';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <About />
    </div>
  );
}

export default App;
