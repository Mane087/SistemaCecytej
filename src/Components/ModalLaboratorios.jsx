import React, { useState, useEffect } from 'react';
import { createLaboratorio, getLaboratorio, updateLaboratorio } from '../APi/Laboratorios';

const ModalLaboratorios = ({clave_laboratorio, isOpen, onClose }) => {
    const [laboratorio, setLaboratorio] = useState({
        clave_laboratorio: '',
        nombre: '',
        ubicacion: '',
        disponibilidad_semanal: '',
        horario: '',
        capacidad: ''
    });

    useEffect(() => {
        const getLaboratorioData = async () => {
            console.log(clave_laboratorio[0].clave_laboratorio);
            const id = clave_laboratorio[0].clave_laboratorio;
            const response = await getLaboratorio(id);
            setLaboratorio(response);
        };
        if (clave_laboratorio) {
            getLaboratorioData();
        }
    }, []);

    const handleChange = (e) => {
        setLaboratorio({ ...laboratorio, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("clave l",clave_laboratorio);
        if (clave_laboratorio && clave_laboratorio.length > 0) {
            console.log("entro a update");
            const id = clave_laboratorio[0].clave_laboratorio;
            await updateLaboratorio(id, {
                clave_laboratorio: parseInt(laboratorio.clave_laboratorio),
                nombre: laboratorio.nombre,
                ubicacion: laboratorio.ubicacion,
                disponibilidad_semanal: laboratorio.disponibilidad_semanal,
                horario: laboratorio.horario,
                capacidad: parseInt(laboratorio.capacidad)
            });
        } else {
            console.log("entro a create");
            await createLaboratorio(
                {
                    clave_laboratorio: parseInt(laboratorio.clave_laboratorio),
                    nombre: laboratorio.nombre,
                    ubicacion: laboratorio.ubicacion,
                    disponibilidad_semanal: laboratorio.disponibilidad_semanal,
                    horario: laboratorio.horario,
                    capacidad: parseInt(laboratorio.capacidad)
                }
            );
        }
        onClose();
    }

    if (!isOpen) return null;



    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
        <div className="bg-white p-5 rounded-lg shadow-xl w-3/4 max-w-2xl">
            <h2 className="font-bold text-xl mb-4">Agregar Laboratorio</h2>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                    {Object.keys(laboratorio).map((key) => (
                        <input
                            key={key}
                            type={key === 'correo_electronico' ? 'email' : 'text'}
                            name={key}
                            placeholder={key.replace('_', ' ').toUpperCase()}
                            value={laboratorio[key]}
                            onChange={handleChange}
                            className="p-2 border rounded"
                        />
                    ))}
                </div>
                <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Guardar Laboratorio
                </button>
                <button type="button" onClick={onClose} className="mt-4 ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Cancelar
                </button>
            </form>
        </div>
    </div>
    )
}   

export default ModalLaboratorios