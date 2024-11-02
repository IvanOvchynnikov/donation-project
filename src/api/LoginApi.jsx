import axios from 'axios';

export const handleLogin = async (username, password) => {
    try {
        return await axios.post('http://localhost:8000/api/login', {
            username,
            password,
        });
    } catch (error) {
        console.error('Login failed:', error.response?.data || error.message);
    }
};
