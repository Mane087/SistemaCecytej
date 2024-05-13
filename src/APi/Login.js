import API from './API';

export const login = async (usuario) => {
    try {
        const response = await API.post('/auth', usuario);
        return response.data;
    } catch (error) {
        return error;
    }
}