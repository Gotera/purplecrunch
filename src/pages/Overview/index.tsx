import { FC } from "react";
import ImageSlider from "../../components/Carousel/ImageSlider";
import { SliderData } from "../../components/Carousel/SliderData";
import HeadingRecomendation from "../../components/HeadingRecomendation";
import { Highlight } from "../../components/Highlight Type01";
import { HighlightData } from "../../components/Highlight Type01/Data/HighlightData";
import "./"
import  {CardCarousel }  from "../../components/CardsCarousel/index"
import { CollectionData } from "../../components/CardsCarousel/Data/CollectionData"

export const Overview: FC = () => {
    return (
        <div className="overview">
            <ImageSlider slides={SliderData} />
            <Highlight item={ HighlightData }/>
            <HeadingRecomendation />
            <CardCarousel items={ CollectionData }/>
        </div>
    )
}; 

export const Populars: FC = () => {
    return (
        <div className="overview">
            Populares    
        </div>
    )
}; 

export const News: FC = () => {
    return (
        <div className="overview">
            Novidades 
        </div>
    )
}; 

export const Genres: FC = () => {
    return (
        <div className="overview">
            Gêneros 
        </div>
    )
}; 

export const Order: FC = () => {
    return (
        <div className="overview">
            Order 
        </div>
    )
}; 

export const History: FC = () => {
    return (
        <div className="overview">
            History 
        </div>
    )
}; 

export const Configurations: FC = () => {
    return (
        <div className="overview">
            Configurations 
        </div>
    )
}; 
