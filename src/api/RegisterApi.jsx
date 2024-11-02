import axios from 'axios';

export const handleRegister = async (email, username, password) => {
    try {
        return await axios.post('http://localhost:8000/api/register', {
            email,
            username,
            password,
        });
    } catch (error) {
        console.error('Registration failed:', error.response?.data || error.message);
    }
};
