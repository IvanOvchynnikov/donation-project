import axios from 'axios';

export const fetchCards = async () => {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/donations`);
        const data = response.data;
        return data;
    } catch (error) {
        console.error('Error fetching cards:', error);
        return [];
    }
};
