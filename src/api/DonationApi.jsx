import axios from 'axios';

export const fetchDonationData = async (id) => {
    try {
        const response = await axios.get(`http://localhost:8000/api/donations/${id}`);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch donation data:', error);
    }
};
