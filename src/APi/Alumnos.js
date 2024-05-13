import API from './API';


export const getAlumnos = async () => {
    const response = await API.get('/Alumnos');
    return response.data;
}

export const getAlumno = async (id) => {
    const response = await API.get(`/Alumnos/${id}`);
    return response.data;
}

export const createAlumno = async (alumno) => {
    const response = await API.post('/Alumnos', alumno);
    return response.data;
}

export const updateAlumno = async (id, alumno) => {
    const response = await API.put(`/Alumnos/${id}`, alumno);
    return response.data;
}