import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './components/HeroSection'
import HeroVideo from './components/HeroVideo'
import BrandService from './components/BrandService'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeroSection/>
      <HeroVideo/>
      <BrandService/>
    </>
  )
}

export default App
