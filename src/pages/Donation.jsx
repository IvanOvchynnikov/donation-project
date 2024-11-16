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
        const x = async () => {
            const data = await fetchDonationData(id);
            setDonationData(data);
        };
        x().then();
    }, [id]);

    if (!donationData) {
        return <div>Loading...</div>;
    }

    // Destructure the fields from the fetched donation data
    const {
        title,
        tag,
        image,
        description,
        bank_account_number,
        bank_beneficiary_name,
        bank_ifsc_code,
        upi_mobile_number,
        upi_id,
    } = donationData;

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
                <img src={image} alt={`Gallery`} />
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
                        Account Number <p>{bank_account_number}</p>
                    </span>
                    <span>
                        Beneficiary Name <p>{bank_beneficiary_name}</p>
                    </span>
                    <span>
                        IFSC Code <p>{bank_ifsc_code}</p>
                    </span>
                </div>
                <div className="donation__card mt-30">
                    <h3>UPI</h3>
                    <span>
                        Mobile Number <p>{upi_mobile_number}</p>
                    </span>
                    <span>
                        UPI ID <p>{upi_id}</p>
                    </span>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Donation;
