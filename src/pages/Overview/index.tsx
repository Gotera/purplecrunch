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

export const Users: FC = () => {
    return (
        <div className="overview">
            Users 
        </div>
    )
}; 

export const Revenue: FC = () => {
    return (
        <div className="overview">
            Revenue 
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
