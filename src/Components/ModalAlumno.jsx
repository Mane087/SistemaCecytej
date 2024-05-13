import React, { useState, useEffect } from 'react';
import { createAlumno, getAlumno, updateAlumno } from '../APi/Alumnos';

const ModalAlumno = ({ numero_control, isOpen, onClose }) => {

    const [alumno, setAlumno] = useState({
        numero_control: '',
        nombre: '',
        apellido_paterno: '',
        apellido_materno: '',
        domicilio: '',
        telefono_personal: '',
        telefono_padre_tutor: '',
        curp: '',
        correo_electronico: '',
        fotografia: '',
        clave_grupo: ''
    });

    useEffect(() => {
        const getAlumnoData = async () => {
            const id = numero_control[0].numero_control;
            const response = await getAlumno(id);
            setAlumno(response);
        };
        if (numero_control) {
            getAlumnoData();
        }
    }, []);



    const handleChange = (e) => {
        setAlumno({ ...alumno, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("datos alumno", alumno);
        if (numero_control && numero_control.length > 0 ) {
            const id = numero_control[0].numero_control;
            await updateAlumno(id, alumno);
        } else {
            await createAlumno(
                {
                    numero_control: alumno.numero_control,
                    nombre: alumno.nombre,
                    apellido_paterno: alumno.apellido_paterno,
                    apellido_materno: alumno.apellido_materno,
                    domicilio: alumno.domicilio,
                    telefono_personal: alumno.telefono_personal,
                    telefono_padre_tutor: alumno.telefono_padre_tutor,
                    curp: alumno.curp,
                    correo_electronico: alumno.correo_electronico,
                    fotografia: alumno.fotografia,
                    clave_grupo: parseInt(alumno.clave_grupo)
                }
            );
        }


        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
            <div className="bg-white p-5 rounded-lg shadow-xl w-3/4 max-w-2xl">
                <h2 className="font-bold text-xl mb-4">Agregar Alumno</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                        {Object.keys(alumno).map((key) => (
                            <input
                                key={key}
                                type={key === 'correo_electronico' ? 'email' : 'text'}
                                name={key}
                                placeholder={key.replace('_', ' ').toUpperCase()}
                                value={alumno[key]}
                                onChange={handleChange}
                                className="p-2 border rounded"
                            />
                        ))}
                    </div>
                    <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Guardar Alumno
                    </button>
                    <button type="button" onClick={onClose} className="mt-4 ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Cancelar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ModalAlumno;
