import '../styles/Donation.css';

import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { fetchDonationData } from '../api/DonationApi';
import imgPng from '../assets/img/doc.png';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Donation = () => {
    const { id } = useParams();
    const [donationData, setDonationData] = useState();

    useEffect(() => {
        fetchDonationData(id, setDonationData);
    }, [id]);

    if (!donationData) {
        return <div>Loading...</div>;
    }

    const { title, tag, images, description, bankDetails, upiDetails } = donationData;

    return (
        <div className="container">
            <Navbar />
            <div className="donation__header">
                <Link to={'/'} preventScrollReset={true}>
                    {'< Back'}
                </Link>
                <h2>{title}</h2>
                <span className="donation__header-tag">{tag}</span>
            </div>
            <div className="donation__gallery">
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Gallery Image ${index + 1}`} />
                ))}
            </div>
            <div className="donation__content">
                <h3 className="mt-30">About</h3>
                <p className="donation__content-about">{description}</p>
                <h3 className="mt-30">Documents</h3>
                <span>
                    <img src={imgPng} alt="Document" />
                    <img src={imgPng} alt="Document" />
                    <img src={imgPng} alt="Document" />
                </span>
                <h3 className="mt-30">Other Donation Methods</h3>
                <div className="donation__card mt-30">
                    <h3>Direct Bank Transfer</h3>
                    <span>
                        Account Number <p>{bankDetails.accountNumber}</p>
                    </span>
                    <span>
                        Beneficiary Name <p>{bankDetails.beneficiaryName}</p>
                    </span>
                    <span>
                        IFSC Code <p>{bankDetails.ifscCode}</p>
                    </span>
                </div>
                <div className="donation__card mt-30">
                    <h3>UPI</h3>
                    <span>
                        Mobile Number <p>{upiDetails.mobileNumber}</p>
                    </span>
                    <span>
                        UPI ID <p>{upiDetails.upiId}</p>
                    </span>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Donation;
