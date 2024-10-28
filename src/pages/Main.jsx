import '../styles/Main.css';

import React from 'react';

import imgHero from '../assets/img/hero.png';
import CustomButton from '../components/CustomButton';
import CustomSlider from '../components/CustomSlider';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Main = () => {
    return (
        <>
            <div className="container">
                <Navbar />
                <section className="section__request">
                    <div className="section__request__left">
                        <p>Seeking Financial Aid for Medical Emergencies or Social Causes?</p>
                        <CustomButton>REQUEST DONATION</CustomButton>
                        <CustomButton style_variant="text">DONATE AND HELP</CustomButton>
                    </div>
                    <img src={imgHero} alt="Mariupol city" className="section__request_img" />
                </section>
            </div>
            <section className="section__donations">
                <div className="container">
                    <p>Donate</p>
                    <h3>Your help is needed</h3>
                    <CustomSlider />
                </div>
            </section>
            <div className="container">
                <Footer />
            </div>
        </>
    );
};

export default Main;
