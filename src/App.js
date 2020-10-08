import React from 'react';
import './css/icon-font.css';
import './css/style.css';

//Components
import Header from './components/Header/Header';
import About from './components/About/About';
import Features from './components/Features/Features';
import Hikes from './components/Hikes/Hikes';
import Stories from './components/Stories/Stories';
import Booking from './components/Booking/Booking';
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
