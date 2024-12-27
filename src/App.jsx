import React from 'react'
import Header from './components/web/header.jsx'
import Footer from './components/web/footer.jsx'
import { First_Card, Rent_Card, Party_Card } from './components/web/card.jsx'
import {Slider, Pic_Slider} from './components/web/slider.jsx'
import './App.css'
function App() {
  const products = [
    {
      "id": 1,
      "img_url": "src/assets/image-1.jpg",
      "text": "Lace Applique Mermaid Strapless Wedding Dress",
      "rent_price": "$500",
      "sale_price": "$500"
    },
    {
      "id": 2,
      "img_url": "src/assets/image-1.jpg",
      "text": "Lace Applique Mermaid Strapless Wedding Dress",
      "rent_price": "$500",
      "sale_price": "$500"
    },
    {
      "id": 3,
      "img_url": "src/assets/image-3.jpg",
      "text": "Lace Applique Mermaid Strapless Wedding Dress",
      "rent_price": "$500",
      "sale_price": "$500"
    },
    {
      "id": 4,
      "img_url": "src/assets/image.jpg",
      "text": "Lace Applique Mermaid Strapless Wedding Dress",
      "rent_price": "$500",
      "sale_price": "$500"
    }
  ]

  const only_img=[
    {
      "id":1,
      "text":"",
      "img_url":"src/assets/image-7.jpg"
    },
    {
      "id":2,
      "text":"",
      "img_url":"src/assets/image-6.jpg"
    },
    {
      "id":3,
      "text":"",
      "img_url":"src/assets/image-5.jpg"
    },
    {
      "id":4,
      "text":"",
      "img_url":"src/assets/image-7.jpg"
    },
  ]
  return (
    <>
      <Header item1="How it works" item2="Discover Our Collections" item3="Home Try-On" item4="Bridal Party HQ" logo="SAMI" />

      <First_Card />
      <div className="just_rent flex flex-col md:flex-row bg-white mt-12 p-5 md:p-20 gap-8 md:gap-10">
        <Rent_Card
          item={{"text":"Buy your favorite dress and wear it without repeat","head":"Just Rent","img_url":'src/assets/image-11.jpg',"btn_text":"Rent Now"}}
        />
        <Rent_Card
          item={{"text":"Buy your favorite dress and wear it without repeat","head":"Buy and Repeat","img_url":'src/assets/image-12.jpg',"btn_text":"Buy Now"}}
        />
      </div>


      <Slider products={products} text='Designer Dress Collection'/>

      <div className='mx-auto sm:grid-cols-2 sm:px-6 md:gap-12 lg:px-8'>
        <Party_Card item={{"head":"Bridal Party HQ","btn_text":"Explore Our Plateform","img_url":'src/assets/image-13.jpg'}}/>
        <Party_Card item={{"head":"Get A Free Home Try Now","btn_text":"Book Your Home Try-Now","img_url":'src/assets/image-14.jpg',"reverse":true}}/>
      </div>

      <Pic_Slider products={only_img} text='Cherish Your Special Movement'/>
      <Footer />
    </>
  )
}

export default App
