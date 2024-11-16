import axios from 'axios';

export const handleRegister = async (email, nickname, password) => {
    try {
        console.log(email, nickname, password);
        return await axios.post('http://localhost:8000/api/signup', {
            email,
            nickname,
            password,
        });
    } catch {
        alert('Registration failed');
    }
};
