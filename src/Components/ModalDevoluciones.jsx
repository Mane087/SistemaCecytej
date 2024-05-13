import React from 'react'
import {  createDevolucion, updatePrestamo, getPrestamo, updateDevolucion } from '../APi/Libros'

const ModalDevoluciones = ({numero_devolucion, isOpen, onClose }) => {
    const [libro, setLibro] = useState({
        numero_control: '',
        num_serie: '',
        fecha_devolucion: '',
    });

    useEffect(() => {
        const getPrestamoData = async () => {
            console.log(numero_devolucion[0].numero_devolucion);
            const id = numero_devolucion[0].numero_devolucion;
            const response = await getPrestamo(id);
            setLibro(response);
        };
        if (numero_devolucion) {
            getPrestamoData();
        }
    }, []);

    const handleChange = (e) => {
        setLibro({ ...libro, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("num serie",numero_prestamo);
        if (numero_prestamo && numero_prestamo.length > 0) {
            console.log("entro a update");
            const id = numero_prestamo[0].numero_prestamo;
            await updateDevolucion(id, {
                numero_control: libro.numero_control,
                num_serie: parseInt(libro.num_serie),
                fecha_devolucion: libro.fecha_prestamo,
            }
        );
        } else {
            console.log("entro a create");
            await createDevolucion(
                {
                    numero_control: libro.numero_control,
                    num_serie: parseInt(libro.num_serie),
                    fecha_devolucion: libro.fecha_prestamo,
                }
            );
        }
        onClose();
    }

    if (!isOpen) return null;


    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
        <div className="bg-white p-5 rounded-lg shadow-xl w-3/4 max-w-2xl">
            <h2 className="font-bold text-xl mb-4">Agregar Devolucion</h2>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                    {Object.keys(libro).map((key) => (
                        <input
                            key={key}
                            type={key === 'fecha_devolucion' ? 'date' : 'text'}
                            name={key}
                            placeholder={key.replace('_', ' ').toUpperCase()}
                            value={libro[key]}
                            onChange={handleChange}
                            className="p-2 border rounded"
                        />
                    ))}
                </div>
                <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Guardar Devolucion
                </button>
                <button type="button" onClick={onClose} className="mt-4 ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Cancelar
                </button>
            </form>
        </div>
    </div>
    )
}

export default ModalDevoluciones

