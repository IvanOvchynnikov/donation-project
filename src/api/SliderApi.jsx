import axios from 'axios';

export const fetchCards = async () => {
    try {
        return await axios.get(`http://localhost:8000/api/cards`);
    } catch (error) {
        console.error('Error fetching cards:', error);
    }
};
