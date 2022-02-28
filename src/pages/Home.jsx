import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import  Slider  from '../components/Slider'

const Home = () => { // Create Home function and export it 
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <Slider/>
    </div>
  )
}

export default Home