import React, { FC } from "react"
import "./Highlight Type01.css"

export const Highlight: FC = () => {
    return (
        <div className="highlight01ShowCard">
            <img 
                className="showCardImage"
                src="/assets/images/f7adcedd1d7c53ae18d851003a3cfae4.jpg"
                alt="Banner on Hightlighttype01"
            />
            <div className="showCardTextContainer">
                <h4 className="showCardTittle"> 
                    Demon Slayer: Kimetsu no Yaiba 
                </h4>
                {/* <span>
                    Série
                </span>
                <span>
                    Leg | Dub
                </span>
                <p>
                    Japão, era Taisho. Tanjiro, um bondoso jovem que ganha a vida vendendo carvão, descobre que sua família foi massacrada por um demônio. E pra piorar, Nezuko, sua...
                </p>
                <button>
                    COMEÇAR A ASSISTIR S1 E1
                </button>
                <button>
                    ADICIONAR A FILA
                </button> */}
            </div>

        </div>
    )
}; 