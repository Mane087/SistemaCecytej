import API from './API';

export const getAllMaterias = async () => {
    const response = await API.get('/materias');
    return response.data;
}

export const getMateria = async (id) => {
    const response = await API.get(`/materias/${id}`);
    return response.data;
}

export const createMateria = async (data) => {
    const response = await API.post('/materias', data);
    return response.data;
}

export const updateMateria = async (id, data) => {
    const response = await API.put(`/materias/${id}`, data);
    return response.data;
}