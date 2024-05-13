import API from "./API";

export const getAllPersonal = async () => {
    const response = await API.get('/RH');
    return response.data;
}

export const getPersonal = async (id) => {
    const response = await API.get(`/RH/${id}`);
    return response.data;
}

export const createPersonal = async (personal) => {
    const response = await API.post('/RH', personal);
    return response.data;
}

export const updatePersonal = async (id, personal) => {
    const response = await API.put(`/RH/${id}`, personal);
    return response.data;
}