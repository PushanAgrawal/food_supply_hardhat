import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Register from './Components/Register'
import AI from './Components/AI'
import BI from './Components/BI'

import { Box } from '@mui/material'
import SI from './Components/SI'
import PI from './Components/PI'
import SR from './Components/SR'
import PR from './Components/PR'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='app'>

    <div>
    <div className="white-grad"/>
    <Header></Header>
    
    {/* <Hero></Hero> */}

    </div>
    <Register></Register>
  <Box
   margin={10}  
  >

  </Box>
    <AI></AI>
  <Box
   margin={10}  
  >

  </Box>
    <BI></BI>
  <Box
   margin={10}  
  >

  </Box>
    <SI></SI>
  <Box
   margin={10}  
  >

  </Box>
    <SR></SR>
  <Box
   margin={10}  
  >

  </Box>
    <PI></PI>
  <Box
   margin={10}  
  >

  </Box>
    <PR></PR>
  </div>
    
  
  )
}

export default App
