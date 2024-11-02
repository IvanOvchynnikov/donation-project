import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/CustomSlider.css';

import React, { useEffect, useRef,useState } from 'react';
import Slider from 'react-slick';

import { fetchCards } from '../api/SliderApi';
import CustomCard from './CustomCard';

function PreviousNextMethods() {
    const [cards, setCards] = useState([]);
    const sliderReference = useRef(null);

    useEffect(() => {
        const response = fetchCards().then();
        setCards([...response.data.cards]);
    }, []);
    const next = () => {
        sliderReference.current.slickNext();
    };

    const previous = () => {
        sliderReference.current.slickPrev();
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };

    return (
        <div className="slider-container slider">
            <Slider ref={sliderReference} {...settings}>
                {cards.map((card) => (
                    <CustomCard
                        key={card.id}
                        title={card.title}
                        category={card.category}
                        goal={card.goal}
                        collected={card.collected}
                        remaining={card.goal - card.collected}
                        imageUrl={card.image_url}
                    />
                ))}
            </Slider>
            <div style={{ textAlign: 'center' }}>
                <button className="button donation__swiper_button" onClick={previous}>
                    {'<'}
                </button>
                <button className="button donation__swiper_button" onClick={next}>
                    {'>'}
                </button>
            </div>
        </div>
    );
}

export default PreviousNextMethods;
