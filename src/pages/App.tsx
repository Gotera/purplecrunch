import React from 'react';
import ImageSlider from '../components/Carousel/ImageSlider';
import { SliderData } from '../components/Carousel/SliderData';
import './Global.css'

function App() {
  return (
    <div className="Carousel">
      <ImageSlider slides={ SliderData }/>
    </div>
  );
}

export default App;
