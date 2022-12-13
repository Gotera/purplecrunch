import { FC } from "react";
import ImageSlider from "../../components/Carousel/ImageSlider";
import { SliderData } from "../../components/Carousel/SliderData";

export const Overview: FC = () => {
    return (
        <div className="overview">
            <ImageSlider slides={SliderData} />
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
