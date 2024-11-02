import axios from 'axios';

export const fetchDonationData = async (id, setDonationData) => {
    try {
        const response = await axios.get(`http://localhost:8000/api/donations/${id}`);
        setDonationData(response.data);
    } catch (error) {
        console.error('Failed to fetch donation data:', error);
    }
};
