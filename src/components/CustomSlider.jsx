import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/CustomSlider.css';

import React, { useRef } from 'react';
import Slider from 'react-slick';

import CustomCard from './CustomCard';

function PreviousNextMethods() {
    let sliderReference = useRef(null);
    const next = () => {
        sliderReference.slickNext();
    };
    const previous = () => {
        sliderReference.slickPrev();
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
            <Slider
                ref={(slider) => {
                    sliderReference = slider;
                }}
                {...settings}
            >
                <CustomCard />
                <CustomCard />
                <CustomCard />
                <CustomCard />
                <CustomCard />
                <CustomCard />
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
