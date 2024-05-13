import React, { useState, useEffect } from 'react';
import { createLibro, getLibro, updateLibro } from '../APi/Libros';

const ModalLibros = ({ num_serie, isOpen, onClose }) => {

    const [libro, setLibro] = useState({
        num_serie: '',
        nombre_libro: '',
        ubicacion: '',
        clasificacion: '',
        cantidad: ''
    });

    useEffect(() => {
        const getLibroData = async () => {
            console.log(num_serie[0].num_serie);
            const id = num_serie[0].num_serie;
            const response = await getLibro(id);
            setLibro(response);
        };
        if (num_serie) {
            getLibroData();
        }
    }, []);

    const handleChange = (e) => {
        setLibro({ ...libro, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("num serie",num_serie);
        if (num_serie  && num_serie.length > 0) {
            console.log("entro a update");
            const id = num_serie[0].num_serie;
            await updateLibro(id, {
                num_serie: parseInt(libro.num_serie),
                nombre_libro: libro.nombre_libro,
                ubicacion: libro.ubicacion,
                clasificacion: libro.clasificacion,
                cantidad: parseInt(libro.cantidad)
            }
        );
        } else {
            console.log("entro a create");
            await createLibro(
                {
                    num_serie: parseInt(libro.num_serie),
                    nombre_libro: libro.nombre_libro,
                    ubicacion: libro.ubicacion,
                    clasificacion: libro.clasificacion,
                    cantidad: parseInt(libro.cantidad)
                }
            );
        }
        onClose();
    }


    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
            <div className="bg-white p-5 rounded-lg shadow-xl w-3/4 max-w-2xl">
                <h2 className="font-bold text-xl mb-4">Agregar Libro</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                        {Object.keys(libro).map((key) => (
                            <input
                                key={key}
                                type={key === 'correo_electronico' ? 'email' : 'text'}
                                name={key}
                                placeholder={key.replace('_', ' ').toUpperCase()}
                                value={libro[key]}
                                onChange={handleChange}
                                className="p-2 border rounded"
                            />
                        ))}
                    </div>
                    <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Guardar Libro
                    </button>
                    <button type="button" onClick={onClose} className="mt-4 ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Cancelar
                    </button>
                </form>
            </div>
        </div>
    );

}

export default ModalLibros;
