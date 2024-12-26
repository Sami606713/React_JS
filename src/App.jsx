import React from 'react'
import Header from './components/web/header.jsx'
import Footer from './components/web/footer.jsx'
import {First_Card,Rent_Card}  from './components/web/card.jsx'
import './App.css'
function App() {

  return (
    <>
      <Header item1="How it works" item2="Discover Our Collections" item3="Home Try-On" item4="Bridal Party HQ" logo="SAMI"/>

      <First_Card/>
      <div className='just_rent'>
        <Rent_Card text="Wear Dress now"/>

        <Rent_Card text="Wear Dress now"/>
      </div>
      
      <Footer/>
    </>
  )
}

export default App
