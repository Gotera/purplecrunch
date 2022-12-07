import React from 'react';
import ImageSlider from '../components/carousel/ImageSlider';
import { SliderData } from '../components/carousel/SliderData';
import './App.css'

function App() {
  return (
    <div className="Carousel">
      <ImageSlider slides={ SliderData }/>
    </div>
  );
}

export default App;