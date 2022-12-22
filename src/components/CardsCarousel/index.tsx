import  CollectionItem  from "../../models/CollectionItem";
import "./CardsCarousel.css"

type CollectionLinkProps = {
    items: CollectionItem[];
};

export const CardCarousel = ({ items }:CollectionLinkProps)  => {
    return (
        <div className="container">
            <div className="carousel">
                { items.map(item => {
                    const {image, title, category, meta} = item;
                    return (
                        <div 
                            className="item" 
                            key={image} 
                        >
                            <div className="image" >
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
            </div>
        </div>
    );
  }