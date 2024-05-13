import React, { useState, useEffect } from 'react';
import { createGrupo, getGrupo, updateGrupo } from '../APi/Grupos';

const ModalGrupos = ({ clave_grupo, isOpen, onClose }) => {

    const [grupo, setGrupo] = useState({
        clave_grupo: '',
        nombre: '',
    });

    useEffect(() => {
        const getGrupoData = async () => {
            console.log(clave_grupo[0].clave_grupo);
            const id = clave_grupo[0].clave_grupo;
            const response = await getGrupo(id);
            setGrupo(response);
        };
        if (clave_grupo) {
            getGrupoData();
        }
    }, []);

    const handleChange = (e) => {
        setGrupo({ ...grupo, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (clave_grupo && clave_grupo.length > 0) {
            console.log("entro a update");
            const id = clave_grupo[0].clave_grupo;
            await updateGrupo(id, {
                clave_grupo: parseInt(grupo.clave_grupo),
                nombre: grupo.nombre,
            }
            );
        } else {
            console.log("entro a create");
            await createGrupo(
                {
                    clave_grupo: parseInt(grupo.clave_grupo),
                    nombre: grupo.nombre,
                }
            );
        }
        onClose();
    }

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
        <div className="bg-white p-5 rounded-lg shadow-xl w-3/4 max-w-2xl">
            <h2 className="font-bold text-xl mb-4">Agregar Grupo</h2>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                    {Object.keys(grupo).map((key) => (
                        <input
                            key={key}
                            type={key === 'correo_electronico' ? 'email' : 'text'}
                            name={key}
                            placeholder={key.replace('_', ' ').toUpperCase()}
                            value={grupo[key]}
                            onChange={handleChange}
                            className="p-2 border rounded"
                        />
                    ))}
                </div>
                <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Guardar Grupo
                </button>
                <button type="button" onClick={onClose} className="mt-4 ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Cancelar
                </button>
            </form>
        </div>
    </div>
    );
}

export default ModalGrupos;