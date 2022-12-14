import React, { useEffect, useState } from "react";
import { SliderData } from "./SliderData";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import './ImageSlider.css';

const ImageSlider = ({ slides }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const length  = slides.length;

    const nextSlide = () => {
        setCurrentImage(currentImage === length  - 1 ? 0 : currentImage + 1);
      };

    const prevSlide = () => {
        setCurrentImage(currentImage === 0 ? length  -1 : currentImage - 1);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1);
        }, 4000);
        return () => clearInterval(interval);
    }, [currentImage, length]);

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
      }
    
    return (
        <section className="slider">
            <IoIosArrowBack className="left-arrow" onClick={ prevSlide } />
            <IoIosArrowForward className="right-arrow" onClick={ nextSlide } />
            {SliderData.map((slide, index) => {
                return ((
                    <div 
                        className={  index === currentImage ? 'slide active' : 'slide' }
                        key={ index }
                    >
                        { index === currentImage && (
                            <img 
                                src={ slide.image } 
                                alt="travel carousel" 
                                className="image"
                            />
                        )}
                    </div>
                )
                )
            })}
        </section>
    )
}

export default ImageSlider;