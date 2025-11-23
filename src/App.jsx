import React from 'react'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import LandingPage from './stores/pages/LandingPage'
import Kitchen from './stores/components/Kitchen'
import MobilePage from './stores/pages/MobilePage'
import ComputerPage from './stores/pages/ComputerPage'
import FridgePage from './stores/pages/FridgePage'
import WatchPage from './stores/pages/WatchPage'
import MenPage from './stores/pages/MenPage'
import WomanPage from './stores/pages/WomanPage'
import FurniturePage from './stores/pages/FurniturePage'
import AcPage from './stores/pages/AcPage'
import KitchenPage from './stores/pages/KitchenPage'
import SpeakerPage from './stores/pages/SpeakerPage'
import TvPage from './stores/pages/TvPage'

import MobileSingle from './stores/singles/singles/MobileSingle'
import ComputerSingle from './stores/singles/singles/ComputerSingle'
import FridgeSingle from './stores/singles/singles/FridgeSingle'
import WatchSingle from './stores/singles/singles/WatchSingle'
import MenSingle from './stores/singles/singles/MenSingle'
import WomanSingle from './stores/singles/singles/WomanSingle'
import FurnitureSingle from './stores/singles/singles/FurnitureSingle'
import AcSingle from './stores/singles/singles/AcSingle'
import KitchenSingle from './stores/singles/singles/KitchenSingle'
import SpeakerSingle from './stores/singles/singles/SpeakerSingle'
import UserCart from './stores/userCart'



const App = () => {
  return (
    
    <div>
      <Routes>
        
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<LandingPage/>}/>
        
        <Route path='/mobiles' element={<MobilePage/>}/>
        <Route path='/computers' element={<ComputerPage/>}/>
        <Route path='/fridges' element={<FridgePage/>}/>
        <Route path='/watch' element={<WatchPage/>}/>
        <Route path='/men' element={<MenPage/>}/>
       < Route path='/woman' element={<WomanPage/>}/>
       < Route path='/fur' element={<FurniturePage/>}/>
        < Route path='/ac' element={<AcPage/>}/>
        < Route path='/ki' element={<KitchenPage/>}/>
        < Route path='/spe' element={<SpeakerPage/>}/>
        < Route path='/tv' element={<TvPage/>}/>
        
            <Route path='/mobiles/:id' element={<MobileSingle/>}/>
            <Route path='/computers/:id' element={<ComputerSingle/>}/>
            <Route path='/fridges/:id' element={<FridgeSingle/>}/>
           < Route path='/watch/:id' element={<WatchSingle/>}/>
            < Route path='/men/:id' element={<MenSingle/>}/>
            < Route path='/woman/:id' element={<WomanSingle/>}/>
             < Route path='/fur/:id' element={<FurnitureSingle/>}/>
             < Route path='/ac/:id' element={<AcSingle/>}/>
             < Route path='/ki/:id' element={<KitchenSingle/>}/>
             < Route path='/spe/:id' element={<SpeakerSingle/>}/>
             <Route path='/tv/:id' element={<ComputerSingle/>}/>
             <Route path='/cart' element={<UserCart/>}/>
      </Routes>
       
           
    </div>
    
  )
}

export default App