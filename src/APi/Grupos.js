import API from './API';

export const getAllGrupos = async () => {
    const response = await API.get('/grupo');
    return response.data;
}

export const getGrupo = async (id) => {
    const response = await API.get(`/grupo/${id}`);
    return response.data;
}

export const createGrupo = async (data) => {
    const response = await API.post('/grupo', data);
    return response.data;
}

export const updateGrupo = async (id, data) => {
    const response = await API.put(`/grupo/${id}`, data);
    return response.data;
}
