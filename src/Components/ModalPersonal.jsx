import React, { useState, useEffect } from 'react';
import { createPersonal, getPersonal, updatePersonal } from '../APi/Personal';

const ModalPersonal = ({ numero_identificacion, isOpen, onClose }) => {

    const [personal, setPersonal] = useState({
        numero_identificacion: '',
        nombre: '',
        apellido_paterno: '',
        apellido_materno: '',
        domicilio: '',
        telefono_personal: '',
        curp: '',
        nss: '',
        correo_electronico: '',
        fotografia: '',
        role: '',
        password: ''
    });

    useEffect(() => {
        const getPersonalData = async () => {
            const id = numero_identificacion[0].numero_identificacion;
            const response = await getPersonal(id);
            setPersonal(response);
        };
        if (numero_identificacion) {
            getPersonalData();
        }
    }, []);

    const handleChange = (e) => {
        setPersonal({ ...personal, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (numero_identificacion && numero_identificacion.length > 0) {
            const id = numero_identificacion[0].numero_identificacion;
            await updatePersonal(id, personal);
        } else {
            await createPersonal(personal);
        }
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
            <div className="bg-white p-5 rounded-lg shadow-xl w-3/4 max-w-2xl">
                <h2 className="font-bold text-xl mb-4">Agregar Personal</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                        {Object.keys(personal).map((key) => (
                            <input
                                key={key}
                                type={key === 'correo_electronico' ? 'email' : 'text'}
                                name={key}
                                placeholder={key.replace('_', ' ').toUpperCase()}
                                value={personal[key]}
                                onChange={handleChange}
                                className="p-2 border rounded"
                            />
                        ))}
                    </div>
                    <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Guardar Personal
                    </button>
                    <button type="button" onClick={onClose} className="mt-4 ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Cancelar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ModalPersonal;