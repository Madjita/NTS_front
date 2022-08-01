import React from 'react';
import './H.css'

type Props = {
    className?: string,
    count?: number
}



 
const H:  React.FC<Props> = ({count}) => {



    return(
        <div className="PromoCarousel">
            <p>{count}</p>
            <div className="carouselSingle">
                <div className="CarouselItem" data-automation="carousel-initial">
                    <div className="CarouselItem__header">Welcome to the free plan</div>
                    <div className="CarouselItem__text">Relax and enjoy! You can use the free version for as long as you want.</div>
                </div>
            </div>
        </div>
    )
}

export default H;