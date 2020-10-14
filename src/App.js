import React from 'react';
import './css/icon-font.css';
import './css/style.css';

//Components
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import About from './components/About/About';
import Features from './components/Features/Features';
import Hikes from './components/Hikes/Hikes';
import Testimonials from './components/Testimonials/Testimonials';
import Booking from './components/Booking/Booking';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Header />
      {/* The "main" element is purely semantic, it is used as the wrapper for the sections between the header and footer, or the "main" bulk of your page content */}
      <main>
        <About />
        <Features />
        <Hikes />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
      <Modal />
    </div>
  );
}

export default App;
