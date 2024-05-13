import React, { useState, useEffect } from 'react';
import { createMateria, getMateria, updateMateria } from '../APi/Materias';

const ModalMaterias = ({ clave_materia, isOpen, onClose }) => {

    const [materia, setMateria] = useState({
        clave_materia: '',
        nombre: '',
        grado: '',
        horario: '',
        alumnosNumero_control: '',
    });

    useEffect(() => {
        const getMateriaData = async () => {
            console.log(clave_materia[0].clave_materia);
            const id = clave_materia[0].clave_materia;
            const response = await getMateria(id);
            setMateria(response);
        };
        if (clave_materia) {
            getMateriaData();
        }
    }, []);

    const handleChange = (e) => {
        setMateria({ ...materia, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("clave m",clave_materia);
        if (clave_materia  && clave_materia.length > 0) {
            console.log("entro a update");
            const id = clave_materia[0].clave_materia;
            await updateMateria(id, {
                clave_materia: parseInt(materia.clave_materia),
                nombre: materia.nombre,
                grado: materia.grado,
                horario: materia.horario,
                alumnosNumero_control: materia.alumnosNumero_control
            }
        );
        } else {
            console.log("entro a create");
            await createMateria(
                {
                    clave_materia: parseInt(materia.clave_materia),
                    nombre: materia.nombre,
                    grado: materia.grado,
                    horario: materia.horario,
                    alumnosNumero_control: materia.alumnosNumero_control
                }
            );
        }
        onClose();
    }

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
            <div className="bg-white p-5 rounded-lg shadow-xl w-3/4 max-w-2xl">
                <h2 className="font-bold text-xl mb-4">Agregar Materia</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                        {Object.keys(materia).map((key) => (
                            <input
                                key={key}
                                type={key === 'correo_electronico' ? 'email' : 'text'}
                                name={key}
                                placeholder={key.replace('_', ' ').toUpperCase()}
                                value={materia[key]}
                                onChange={handleChange}
                                className="p-2 border rounded"
                            />
                        ))}
                    </div>
                    <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Guardar Materia
                    </button>
                    <button type="button" onClick={onClose} className="mt-4 ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Cancelar
                    </button>
                </form>
            </div>
        </div>
    );

}

export default ModalMaterias;