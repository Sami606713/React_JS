import React from 'react'
import Header from './components/web/header.jsx'
import Footer from './components/web/footer.jsx'
import { First_Card, Rent_Card } from './components/web/card.jsx'
import Slider from './components/web/slider.jsx'
import './App.css'
function App() {
  const products = [
    {
      "id": 1,
      "img_url": "src/assets/chatbot.jpg",
      "text": "Lace Applique Mermaid Strapless Wedding Dress",
      "rent_price": "$500",
      "sale_price": "$500"
    },
    {
      "id": 2,
      "img_url": "src/assets/chatbot.jpg",
      "text": "Lace Applique Mermaid Strapless Wedding Dress",
      "rent_price": "$500",
      "sale_price": "$500"
    },
    {
      "id": 3,
      "img_url": "src/assets/chatbot.jpg",
      "text": "Lace Applique Mermaid Strapless Wedding Dress",
      "rent_price": "$500",
      "sale_price": "$500"
    },
    {
      "id": 4,
      "img_url": "src/assets/chatbot.jpg",
      "text": "Lace Applique Mermaid Strapless Wedding Dress",
      "rent_price": "$500",
      "sale_price": "$500"
    }
  ]
  return (
    <>
      <Header item1="How it works" item2="Discover Our Collections" item3="Home Try-On" item4="Bridal Party HQ" logo="SAMI" />

      <First_Card />
      <div className="just_rent flex flex-col md:flex-row bg-white mt-12 p-5 md:p-20 gap-8 md:gap-10">
        <Rent_Card
          text="Make your special day memorable without breaking the bank"
        />
        <Rent_Card
          text="Buy your favorite dress and wear it without repeat"
        />
      </div>


      <Slider products={products} />
      <Footer />
    </>
  )
}

export default App
