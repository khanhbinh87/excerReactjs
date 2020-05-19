import React from 'react';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContentFunc from './components/MainContentFunc';
import MainContentClass from './components/MainContentClass';

function App() {
  return (
    <div>
        <Header />
        {/* <MainContentFunc /> */}
        <MainContentClass />
        <Footer />
    </div>
  );
}

export default App;
