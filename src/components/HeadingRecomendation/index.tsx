import { FC } from "react";
import './Heading.css'

const HeadingRecomendation: FC = () => {
    return (
        <div className="HeadingRecomendationContainer">
            <div className="headingTitle">
                Recomendações para Você
            </div>
            <div className="feedDivider"/>
            <div className="carouselCardsWrapper">
            </div>
        </div>
    )
}

export default HeadingRecomendation;