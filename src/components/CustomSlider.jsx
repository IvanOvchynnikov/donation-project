import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/CustomSlider.css';

import React, { useRef } from 'react';
import Slider from 'react-slick';

import { fetchCards } from '../api/SliderApi';
import useFetch from '../hooks/useFetch';
import CustomCard from './CustomCard';

function PreviousNextMethods() {
    const sliderReference = useRef(null);

    const { data: cards } = useFetch(fetchCards);
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

    if (!cards) {
        return;
    }
    console.log(cards);
    return (
        <div className="slider-container slider">
            <Slider ref={sliderReference} {...settings}>
                {cards.map((card, index) => (
                    <CustomCard
                        key={index}
                        id={card.id}
                        title={card.title}
                        category={card.tag}
                        goal={1000}
                        collected={0}
                        remaining={1000}
                        imageUrl={'src/' + card.image}
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
