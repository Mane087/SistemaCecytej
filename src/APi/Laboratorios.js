import APi from './API';

export const getAllLaboratorios = async () => {
    const response = await APi.get('/laboratorio');
    return response.data;
}

export const getLaboratorio = async (id) => {
    const response = await APi.get(`/laboratorio/${id}`);
    return response.data;
}

export const createLaboratorio = async (laboratorio) => {
    const response = await APi.post('/laboratorio', laboratorio);
    return response.data;
}

export const updateLaboratorio = async (id, laboratorio) => {
    const response = await APi.put(`/laboratorio/${id}`, laboratorio);
    return response.data;
}