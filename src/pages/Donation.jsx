import '../styles/Donation.css';

import React from 'react';

import imgPng from '../assets/img/doc.png';
import imgKid from '../assets/img/kid.png';
import imgKids from '../assets/img/kids.png';
import imgWoman from '../assets/img/woman.png';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Donation = () => {
    return (
        <div className="container">
            <Navbar />
            <div className="donation__header">
                <a href="#">{'< Back'}</a>
                <h2>Let’s Make Education For All</h2>
                <span className="donation__header-tag">🚨 Emergency Requirement</span>
            </div>
            <div className="donation__gallery">
                <img src={imgKid} alt="Child Smiling" />
                <img src={imgKids} alt="Child Happy" />
                <img src={imgWoman} alt="Woman happy" />
            </div>
            <div className="donation__content">
                <h3 className="mt-30">About</h3>
                <p className="donation__content-about">
                    Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque reiciendis. Qui beatae vel
                    magnam repudiandae ipsum repellat repudiandae. Voluptate at dolores ut dolor sint occaecati
                    similique. Velit eius ab delectus temporibus. For dynamic content, add a rich text field to any
                    collection and then connect a rich text element to that field in the settings panel. Headings,
                    paragraphs, block-quotes, figures, images, and figure captions can all be styled.
                </p>
                <h3 className="mt-30">Documents</h3>
                <span>
                    <img src={imgPng} alt="Document" />
                    <img src={imgPng} alt="Document" />
                    <img src={imgPng} alt="Document" />
                </span>
                <h3 className="mt-30">Other Donation Methods</h3>
                <div className="donation__card mt-30">
                    <h3>Directly Bank Transfer</h3>
                    <span>
                        Account Number <p>2223330000456987</p>
                    </span>
                    <span>
                        Beneficiary Name <p>Organization</p>
                    </span>
                    <span>
                        IFSC Code <p>WRDSBI0BNKPIS</p>
                    </span>
                </div>
                <div className="donation__card mt-30">
                    <h3>UPI</h3>
                    <span>
                        Mobile Number <p>8939406129</p>
                    </span>
                    <span>
                        UPI ID <p>21551</p>
                    </span>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Donation;
