import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import Header from './components/Header'
import MainBody from './components/MainBody'
import Footer from './components/Footer'


function App() {
    return (
      <div>
        <Header />
        <MainBody />
        <Footer />
      </div>
    )
  }

  export default App
