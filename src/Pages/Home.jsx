import React from 'react'
import ImageSlider from '../Components/ImageSlider'
import { SliderData } from '../Components/SliderData'
import Testimonials from '../Components/Testimonials'

const Home = () => {
  return (
    <div>
      <ImageSlider slides={SliderData}/>
      <Testimonials />
    </div>
  )
}

export default Home