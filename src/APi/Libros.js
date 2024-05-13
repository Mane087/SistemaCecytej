import API from "./API";

export const getLibros = async () => {
  const response = await API.get("/libros");
  return response.data;
};

export const getLibro = async (id) => {
  const response = await API.get(`/libros/${id}`);
  return response.data;
};

export const createLibro = async (libro) => {
  const response = await API.post("/libros", libro);
  return response.data;
};

export const updateLibro = async (id, libro) => {
  const response = await API.put(`/libros/${id}`, libro);
  return response.data;
};

// PRESTAMOS

export const getPrestamos = async () => {
  const response = await API.get("/prestamos-libros");
  return response.data;
};

export const getPrestamo = async (id) => {
  const response = await API.get(`/prestamos-libros/${id}`);
  return response.data;
};

export const createPrestamo = async (prestamo) => {
  const response = await API.post("/prestamos-libros", prestamo);
  return response.data;
};

export const updatePrestamo = async (id, prestamo) => {
  const response = await API.put(`/prestamos-libros/${id}`, prestamo);
  return response.data;
};

// DEVOLUCIONES

export const getDevoluciones = async () => {
  const response = await API.get("/devoluciones-libros");
  return response.data;
};

export const getDevolucion = async (id) => {
  const response = await API.get(`/devoluciones-libros/${id}`);
  return response.data;
};

export const createDevolucion = async (devolucion) => {
  const response = await API.post("/devoluciones-libros", devolucion);
  return response.data;
};

export const updateDevolucion = async (id, devolucion) => {
  const response = await API.put(`/devoluciones-libros/${id}`, devolucion);
  return response.data;
};
