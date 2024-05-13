import React, { useEffect, useState } from 'react'
import loginStore from '../store/login.store';
import DataTable from 'react-data-table-component';
import { getAllMaterias } from '../APi/Materias';
import ModalMaterias from '../Components/ModalMaterias';

const Materias = () => {
    const { user } = loginStore(state => ({ user: state.user, isLoggedIn: state.isLoggedIn }));
    const [data, setData] = useState([])
    const [records, setRecords] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [update, setUpdate] = useState([]);

    useEffect(() => {
        const getMateriasData = async () => {
            const response = await getAllMaterias()
            console.log(response);
            setData(response)
            setRecords(response)
        }
        getMateriasData()
    }, [])

    const handleOpenModal = () => {
        setIsModalOpen(true);  // Abre el modal

    };

    const handleCloseModal = () => {
        setIsModalOpen(false);  // Cierra el modal
        setUpdate([]);  // Limpia el estado de update
    };


    const handleChange = (e) => {
        const value = e.target.value.toLowerCase();
        const filteredRecords = data.filter(record =>
            record.nombre.toLowerCase().includes(value)
        );
        setRecords(filteredRecords);
    }

    const columns = [
        {
            name: 'Clave de Materia',
            selector: row => row.clave_materia,
            sortable: true,
        },
        {
            name: 'Nombre',
            selector: row => row.nombre,
            sortable: true,
        },
        {
            name: 'Grado',
            selector: row => row.grado,
            sortable: true,
        },
        {
            name: 'Horario',
            selector: row => row.horario,
            sortable: true,
        },
        {
            name: 'Número de Control de Alumnos',
            selector: row => row.alumnosNumero_control,
            sortable: true,
        }
    ];


    return (
        <div className='w-[90%] h-full mx-auto'>
            <div className='flex items-center py-5 gap-5'>
                <h1 className='font-bold text-2xl mr-5'>Materias</h1>
                {user.role === 'Administrativo' || user.role === 'Maestro' ? (
                    <>
                        <button className='w-max h-max flex items-center gap-1 text-lg border rounded-md p-2'
                            onClick={handleOpenModal}
                        >
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjNjVhMzBkIiBkPSJNMTEgMTN2M3EwIC40MjUuMjg4LjcxM1QxMiAxN3QuNzEzLS4yODhUMTMgMTZ2LTNoM3EuNDI1IDAgLjcxMy0uMjg4VDE3IDEydC0uMjg4LS43MTJUMTYgMTFoLTNWOHEwLS40MjUtLjI4OC0uNzEyVDEyIDd0LS43MTIuMjg4VDExIDh2M0g4cS0uNDI1IDAtLjcxMi4yODhUNyAxMnQuMjg4LjcxM1Q4IDEzem0xIDlxLTIuMDc1IDAtMy45LS43ODh0LTMuMTc1LTIuMTM3VDIuNzg4IDE1LjlUMiAxMnQuNzg4LTMuOXQyLjEzNy0zLjE3NVQ4LjEgMi43ODhUMTIgMnQzLjkuNzg4dDMuMTc1IDIuMTM3VDIxLjIxMyA4LjFUMjIgMTJ0LS43ODggMy45dC0yLjEzNyAzLjE3NXQtMy4xNzUgMi4xMzhUMTIgMjIiLz48L3N2Zz4=" alt="icon-add" />
                            Agregar
                        </button>
                        <button className='w-max h-max flex items-center gap-1 text-lg border rounded-md p-2'
                            onClick={handleOpenModal}
                        >
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDE1IDE1Ij48cGF0aCBmaWxsPSIjMDI4NGM3IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xLjkwMyA3LjI5N2MwIDMuMDQ0IDIuMjA3IDUuMTE4IDQuNjg2IDUuNTQ3YS41MjEuNTIxIDAgMSAxLS4xNzggMS4wMjdDMy41IDEzLjM2Ny44NjEgMTAuOTEzLjg2MSA3LjI5N2MwLTEuNTM3LjY5OS0yLjc0NSAxLjUxNS0zLjY2M2MuNTg1LS42NTggMS4yNTQtMS4xOTMgMS43OTItMS42MDJIMi41MzJhLjUuNSAwIDAgMSAwLTFoM2EuNS41IDAgMCAxIC41LjV2M2EuNS41IDAgMCAxLTEgMFYyLjY4NmwtLjAwMS4wMDJjLS41NzIuNDMtMS4yNy45NTctMS44NzUgMS42MzhjLS43MTUuODA0LTEuMjUzIDEuNzc2LTEuMjUzIDIuOTdtMTEuMTA4LjQwNmMwLTMuMDEyLTIuMTYtNS4wNzMtNC42MDctNS41MzNhLjUyMS41MjEgMCAxIDEgLjE5Mi0xLjAyNGMyLjg3NC41NCA1LjQ1NyAyLjk4IDUuNDU3IDYuNTU3YzAgMS41MzctLjY5OSAyLjc0NC0xLjUxNSAzLjY2M2MtLjU4NS42NTgtMS4yNTQgMS4xOTMtMS43OTIgMS42MDJoMS42MzZhLjUuNSAwIDEgMSAwIDFoLTNhLjUuNSAwIDAgMS0uNS0uNXYtM2EuNS41IDAgMSAxIDEgMHYxLjg0NWguMDAyYy41NzEtLjQzMiAxLjI3LS45NTggMS44NzQtMS42NGMuNzE1LS44MDMgMS4yNTMtMS43NzUgMS4yNTMtMi45NyIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+" alt="icon-add" />
                            Actualizar
                        </button>

                    </>
                ) : null}
                <div className='w-[220px] border rounded-md p-3 flex items-center'>
                    <input
                        type="text"
                        placeholder='buscar...'
                        className='w-full'
                        onChange={handleChange}
                    />
                </div>
            </div>
            <hr />
            <div>
                <DataTable
                    columns={columns}
                    data={records}
                    selectableRows
                    pagination
                    paginationPerPage={10}
                    onSelectedRowsChange={records => setUpdate(records.selectedRows)}
                />
            </div>
            {isModalOpen && (
                <ModalMaterias
                    clave_materia={update}
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    )
}

export default Materias