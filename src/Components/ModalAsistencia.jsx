import React, { useState, useEffect } from 'react';
import { createAsistencia, getAsistencia, updateAsistencia } from '../APi/Asistencia';

const ModalAsistencia = ({ clave_asistencia, isOpen, onClose }) => {

    const [asistencia, setAsistencia] = useState({
        numero_control: '',
    });

    useEffect(() => {
        const getAsistenciaData = async () => {
            console.log(clave_asistencia[0].clave_asistencia);
            const id = clave_asistencia[0].clave_asistencia;
            const response = await getAsistencia(id);
            setAsistencia(response);
        };
        if (clave_asistencia) {
            getAsistenciaData();
        }
    }, []);

    const handleChange = (e) => {
        setAsistencia({ ...asistencia, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("clave a", clave_asistencia);
        if (clave_asistencia && clave_asistencia.length > 0) {
            console.log("entro a update");
            const id = clave_asistencia[0].clave_asistencia;
            await updateAsistencia(id, asistencia);
        } else {
            console.log("entro a create");
            await createAsistencia(asistencia);
        }
        onClose();
    }

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
        <div className="bg-white p-5 rounded-lg shadow-xl w-3/4 max-w-2xl">
            <h2 className="font-bold text-xl mb-4">Agregar Asistencia</h2>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                    {Object.keys(asistencia).map((key) => (
                        <input
                            key={key}
                            type={key === 'correo_electronico' ? 'email' : 'text'}
                            name={key}
                            placeholder={key.replace('_', ' ').toUpperCase()}
                            value={asistencia[key]}
                            onChange={handleChange}
                            className="p-2 border rounded"
                        />
                    ))}
                </div>
                <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Guardar Asistencia
                </button>
                <button type="button" onClick={onClose} className="mt-4 ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Cancelar
                </button>
            </form>
        </div>
    </div>
    );
}

export default ModalAsistencia;