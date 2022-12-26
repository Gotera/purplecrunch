import  CollectionItem  from "../../models/CollectionItem";
import "./CardsCarousel.css"
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useRef } from "react";

type CollectionLinkProps = {
    items: CollectionItem[];
};

export const CardCarousel = ({ items }:CollectionLinkProps)  => {
    const carousel  = useRef(null);

    const handleLeftClick = (event: any, ) => {
        event.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth
    }

    const handleRightClick = (event: any) => {
        event.preventDefault();
        console.log(carousel.current);
    }

    return (
        <div className="container">
            <div className="carousel" ref={ carousel }>
                { items.map(item => {
                    const {image, title, category, meta} = item;
                    return (
                        <div 
                            className="item" 
                            key={image} 
                        >
                            <div className="CellCardimage" >
                                <img 
                                    src={ image } 
                                    alt={ title }
                                />
                            </div>
                            <div className="info">
                                <span className="title"> 
                                    { title } 
                                </span>
                                <div className="groupInfo">
                                    <span className="category"> 
                                        { category } 
                                    </span>
                                    <span className="meta">
                                        ● { meta } 
                                    </span>
                                </div>
                            </div>
                        </div>
                        );
                    })
                }

                <IoIosArrowBack className="CardCarousel-left-arrow" onClick={ handleLeftClick }/>
                <IoIosArrowForward className="CardCarousel-right-arrow" onClick={ handleRightClick }/>
            </div>
        </div>
    );
  }