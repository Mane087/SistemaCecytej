import React, { useEffect, useState } from 'react'
import loginStore from '../store/login.store';
import DataTable from 'react-data-table-component';
import { getPersonal, getAllPersonal } from '../APi/Personal';
import ModalPersonal from '../Components/ModalPersonal';

const Personal = () => {
    const { user } = loginStore(state => ({ user: state.user, isLoggedIn: state.isLoggedIn }));
    const [personal, setPersonal] = useState([])
    const [records, setRecords] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [update, setUpdate] = useState([])

    useEffect(() => {
        const getAllPersonalData = async () => {
            const response = await getAllPersonal()
            console.log(response);
            setPersonal(response)
            setRecords(response)
        }
        getAllPersonalData()
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
        const filteredRecords = personal.filter(record => 
            record.nombre.toLowerCase().includes(value) ||
            record.apellido_paterno.toLowerCase().includes(value) ||
            record.apellido_materno.toLowerCase().includes(value)
        );
        setRecords(filteredRecords);
    }

    const columns = [
        {
            name: 'Número de Identificación',
            selector: row => row.numero_identificacion,
            sortable: true,
        },
        {
            name: 'Nombre',
            selector: row => row.nombre,
            sortable: true,
        },
        {
            name: 'Apellido Paterno',
            selector: row => row.apellido_paterno,
            sortable: true,
        },
        {
            name: 'Apellido Materno',
            selector: row => row.apellido_materno,
            sortable: true,
        },
        {
            name: 'Domicilio',
            selector: row => row.domicilio,
            sortable: true,
        },
        {
            name: 'Teléfono Personal',
            selector: row => row.telefono_personal,
            sortable: true,
        },
        {
            name: 'CURP',
            selector: row => row.curp,
            sortable: true,
        },
        {
            name: 'NSS',
            selector: row => row.nss,
            sortable: true,
        },
        {
            name: 'Correo Electrónico',
            selector: row => row.correo_electronico,
            sortable: true,
        },
        {
            name: 'Fotografía',
            selector: row => row.fotografia,
            cell: row => <img src={row.fotografia} alt="Foto" style={{ width: 50, height: 50 }} />,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
        {
            name: 'Rol',
            selector: row => row.role,
            sortable: true,
        }
    ];
    

    return (
        <div className='w-[90%] h-full mx-auto'>
        <div className='flex items-center py-5 gap-5'>
            <h1 className='font-bold text-2xl mr-5'>Personal</h1>
           
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
            <ModalPersonal
                numero_identificacion={update}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        )}
    </div>
    )
}   

export default Personal