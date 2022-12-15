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
                    <div className="subdiv-span">
                        <span>
                            Série
                        </span>
                        <span>
                            Leg | Dub
                        </span>
                    </div>
                <p>
                    Japão, era Taisho. Tanjiro, um bondoso jovem que ganha a vida vendendo carvão, descobre que sua família foi massacrada por um demônio. E pra piorar, Nezuko, sua...
                </p>
                <div className="button-group">
                    <button>
                        COMEÇAR A ASSISTIR S1 E1
                    </button>
                    <button>
                        ADICIONAR A FILA
                    </button>
                </div>

            </div>

        </div>
    )
};