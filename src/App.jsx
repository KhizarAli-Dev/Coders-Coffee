import React from 'react'
import Hero from './Components/Hero/Hero'
import CoffeeSection from './Components/CoffeeSection/CoffeeSection'
import Contact from './Components/Contact/Contact'
import MobileApp from './Components/MobileApp/MobileApp'

function App() {
  return (
    <>
    <div className='overflow-x-hidden'>
    <Hero/>
    </div>
    <CoffeeSection/>
    <Contact/>
    <MobileApp/>
    </>
  )
}

export default App