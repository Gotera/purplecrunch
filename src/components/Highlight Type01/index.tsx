import React from "react"
import "./Highlight Type01.css"
import HighlightItem from "../../models/StaticCardItem";

interface HighlightProps {
    item: HighlightItem;
}

export const Highlight: React.FC<HighlightProps> = ({ item }: HighlightProps) => {
    return (
        <div className="highlight01ShowCard">
            <img 
                className="showCardImage"
                src="/assets/images/f7adcedd1d7c53ae18d851003a3cfae4.jpg"
                alt="Banner on Hightlighttype01"
            />
            
            <div className="showCardTextContainer">
                <h4 className="showCardTittle"> 
                    { item.title }
                </h4>
                    <div className="subdiv-span">
                        <span>
                            { item.category }
                        </span>
                        <span>
                            { item.meta }
                        </span>
                    </div>
                <p>
                    { item.text }
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