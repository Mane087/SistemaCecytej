import API from "./API";

export const getAsistencias = async () => {
    const response = await API.get('/asistencia');
    return response.data;
}

export const getAsistencia = async (id) => {
    const response = await API.get(`/asistencia/${id}`);
    return response.data;
}

export const createAsistencia = async (data) => {
    const response = await API.post('/asistencia', data);
    return response.data;
}

export const updateAsistencia = async (id, data) => {
    const response = await API.put(`/asistencia/${id}`, data);
    return response.data;
}