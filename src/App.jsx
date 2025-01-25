import React from 'react'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Contact from './pages/contact.jsx'
import Home_Try_On from './pages/home_try_on.jsx'
import Bridal_Party from './pages/bridal_party.jsx'
import Rental_Policy from './pages/rental_policy.jsx'
import Header from './components/web/header/header.jsx'
import Footer from './components/web/footer/footer.jsx'
import { Dress_Detail } from './pages/dress_detail.jsx'
import { Fit_Guide_Page } from './pages/fit_guide_pages/fit_guide_page.jsx'
import FAQ from './pages/faq.jsx'
import Cart_Page from './pages/cart_page.jsx'
import Fit_Guide from './pages/fit_guide.jsx'
import Collections from './pages/collections.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <main>
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/policies" element={<Rental_Policy />} />
            <Route path="/guide" element={<Fit_Guide />} />
            <Route path="/guide/page" element={<Fit_Guide_Page />} />
            <Route path="/try-home" element={<Home_Try_On />} />
            <Route path="/bridal-party" element={<Bridal_Party />} />
            <Route path="/collection" element={<Collections />} />
            <Route path="/dress_detail" element={<Dress_Detail />} />
            <Route path="/cart" element={<Cart_Page />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </main>
    </>
  )
}

export default App
