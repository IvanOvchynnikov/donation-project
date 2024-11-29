import axios from 'axios';

export const handleLogin = async (nickname, password) => {
    try {
        return await axios.post('http://localhost:8000/api/login', {
            nickname,
            password,
        });
    } catch {
        alert('Login failed');
    }
};
