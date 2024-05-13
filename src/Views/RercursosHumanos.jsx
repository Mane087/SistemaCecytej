import React, { useState } from 'react'
import LogoCecyej from '../assets/logo-cectej.png';
import loginStore from '../store/login.store';
import { useNavigate } from 'react-router-dom';

import Alumnos from './Alumnos'
import Personal from './Personal';
import Materias from './Materias';
import Grupos from './Grupos';
import Asistencia from './Asistencia';
import Laboratorios from './Laboratorios';
import Libros from './Libros';
import Prestamos from './Prestamos';
import Devoluciones from './Devoluciones';


const RecursosHumanos = () =>{
    const navigate = useNavigate();
    const [activeView, setActiveView] = useState(null);
    const { user, isLoggedIn } = loginStore(state => ({ user: state.user, isLoggedIn: state.isLoggedIn }));
    console.log(user, isLoggedIn);

    const showing = (name) => {
        switch (name) {
            case 'Personal':
                setActiveView(<Personal />);
                break;
            case 'Alumno':
                setActiveView(<Alumnos />);
                break;
            case 'Materias':
                setActiveView(<Materias />);
                break;
            case 'Grupos':
                setActiveView(<Grupos />);
                break;
            case 'Asistencia':
                setActiveView(<Asistencia />);
                break;
            case 'Laboratorios':
                setActiveView(<Laboratorios />);
                break;
            case 'Libros':
                setActiveView(<Libros />);
                break;
            case 'Prestamos':
                setActiveView(<Prestamos />);
                break;
            case 'Devoluciones':
                setActiveView(<Devoluciones />);
                break;
            default:
                setActiveView(null);
        }
    }

    const logOut = () => {
        loginStore.setState({ user: {}, isLoggedIn: false });
        navigate('/');
    }


    return (
        <div className='w-full h-full max-h-max flex'>
            <aside className='w-[15%] h-screen bg-green-700 flex flex-col items-center py-5 justify-between'>
                <div className='w-40 h-40 rounded-full bg-white flex justify-center items-center'>
                    <img src={LogoCecyej} alt="logo-cecytej" className='w-32 h-32 object-cover' />
                </div>
                <div className='w-full h-1/2 flex flex-col gap-3'>
                    {user.role === 'Administrativo' ? (
                        <>
                            <button className='w-3/4 h-8 mx-auto text-white flex items-end justify-evenly text-xl gap-2'
                                onClick={() => showing('Personal')}
                            >
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIgMTJxLTEuNjUgMC0yLjgyNS0xLjE3NVQ4IDh0MS4xNzUtMi44MjVUMTIgNHQyLjgyNSAxLjE3NVQxNiA4dC0xLjE3NSAyLjgyNVQxMiAxMm0tOCA4di0yLjhxMC0uODUuNDM4LTEuNTYyVDUuNiAxNC41NXExLjU1LS43NzUgMy4xNS0xLjE2MlQxMiAxM3QzLjI1LjM4OHQzLjE1IDEuMTYycS43MjUuMzc1IDEuMTYzIDEuMDg4VDIwIDE3LjJWMjB6Ii8+PC9zdmc+" alt="icono-personal"
                                />
                                Personal
                            </button>
                            <button className='w-3/4 h-8 mx-auto text-white flex items-end justify-evenly text-xl gap-2'
                                onClick={() => showing('Alumno')}
                            >
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI1NiAyNTYiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0yMjYuNTMgNTYuNDFsLTk2LTMyYTggOCAwIDAgMC01LjA2IDBsLTk2IDMyQTggOCAwIDAgMCAyNCA2NHY4MGE4IDggMCAwIDAgMTYgMFY3NS4xbDMzLjU5IDExLjE5YTY0IDY0IDAgMCAwIDIwLjY1IDg4LjA1Yy0xOCA3LjA2LTMzLjU2IDE5LjgzLTQ0Ljk0IDM3LjI5YTggOCAwIDEgMCAxMy40IDguNzRDNzcuNzcgMTk3LjI1IDEwMS41NyAxODQgMTI4IDE4NHM1MC4yMyAxMy4yNSA2NS4zIDM2LjM3YTggOCAwIDAgMCAxMy40LTguNzRjLTExLjM4LTE3LjQ2LTI3LTMwLjIzLTQ0Ljk0LTM3LjI5YTY0IDY0IDAgMCAwIDIwLjY1LTg4bDQ0LjEyLTE0LjdhOCA4IDAgMCAwIDAtMTUuMThaTTE3NiAxMjBhNDggNDggMCAxIDEtODYuNjUtMjguNDVsMzYuMTIgMTJhOCA4IDAgMCAwIDUuMDYgMGwzNi4xMi0xMkE0Ny44OSA0Ny44OSAwIDAgMSAxNzYgMTIwIi8+PC9zdmc+" alt="icono-personal"
                                />
                                Alumnos
                            </button>
                            <button className='w-3/4 h-8 mx-auto text-white flex items-end justify-evenly text-xl gap-2'
                                onClick={() => showing('Materias')}
                            >
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIyNS42IiB2aWV3Qm94PSIwIDAgNjQwIDUxMiI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE2MCA2NGMwLTM1LjMgMjguNy02NCA2NC02NGgzNTJjMzUuMyAwIDY0IDI4LjcgNjQgNjR2Mjg4YzAgMzUuMy0yOC43IDY0LTY0IDY0SDMzNi44Yy0xMS44LTI1LjUtMjkuOS00Ny41LTUyLjQtNjRIMzg0di0zMmMwLTE3LjcgMTQuMy0zMiAzMi0zMmg2NGMxNy43IDAgMzIgMTQuMyAzMiAzMnYzMmg2NFY2NEgyMjR2NDkuMUMyMDUuMiAxMDIuMiAxODMuMyA5NiAxNjAgOTZ6bTAgNjRhOTYgOTYgMCAxIDEgMCAxOTJhOTYgOTYgMCAxIDEgMC0xOTJtLTI2LjcgMjI0aDUzLjNjNzMuNyAwIDEzMy40IDU5LjcgMTMzLjQgMTMzLjNjMCAxNC43LTExLjkgMjYuNy0yNi43IDI2LjdIMjYuN0MxMS45IDUxMiAwIDUwMC4xIDAgNDg1LjNDMCA0MTEuNyA1OS43IDM1MiAxMzMuMyAzNTIiLz48L3N2Zz4=" alt="icono-personal"
                                />
                                Materias
                            </button>
                            <button className='w-3/4 h-8 mx-auto text-white flex items-end justify-evenly text-xl gap-2'
                                onClick={() => showing('Grupos')}
                            >
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMSAxOHEtLjQyNSAwLS43MTItLjI4OFQwIDE3di0uNTc1cTAtMS4wNzUgMS4xLTEuNzVUNCAxNHEuMzI1IDAgLjYyNS4wMTN0LjU3NS4wNjJxLS4zNS41MjUtLjUyNSAxLjF0LS4xNzUgMS4yVjE4em02IDBxLS40MjUgMC0uNzEyLS4yODhUNiAxN3YtLjYyNXEwLS44LjQzOC0xLjQ2M3QxLjIzNy0xLjE2MlQ5LjU4OCAxM1QxMiAxMi43NXExLjMyNSAwIDIuNDM4LjI1dDEuOTEyLjc1dDEuMjI1IDEuMTYzdC40MjUgMS40NjJWMTdxMCAuNDI1LS4yODcuNzEzVDE3IDE4em0xMi41IDB2LTEuNjI1cTAtLjY1LS4xNjItMS4yMjV0LS40ODgtMS4wNzVxLjI3NS0uMDUuNTYzLS4wNjJUMjAgMTRxMS44IDAgMi45LjY2M3QxLjEgMS43NjJWMTdxMCAuNDI1LS4yODguNzEzVDIzIDE4ek00IDEzcS0uODI1IDAtMS40MTItLjU4N1QyIDExcTAtLjg1LjU4OC0xLjQyNVQ0IDlxLjg1IDAgMS40MjUuNTc1VDYgMTFxMCAuODI1LS41NzUgMS40MTNUNCAxM20xNiAwcS0uODI1IDAtMS40MTItLjU4N1QxOCAxMXEwLS44NS41ODgtMS40MjVUMjAgOXEuODUgMCAxLjQyNS41NzVUMjIgMTFxMCAuODI1LS41NzUgMS40MTNUMjAgMTNtLTgtMXEtMS4yNSAwLTIuMTI1LS44NzVUOSA5cTAtMS4yNzUuODc1LTIuMTM3VDEyIDZxMS4yNzUgMCAyLjEzOC44NjNUMTUgOXEwIDEuMjUtLjg2MiAyLjEyNVQxMiAxMiIvPjwvc3ZnPg==" alt="icono-personal"
                                />
                                Grupos
                            </button>
                            <button className='w-3/4 h-8 mx-auto text-white flex items-end justify-evenly text-xl gap-2'
                                onClick={() => showing('Asistencia')}
                            >
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48ZyBmaWxsPSIjZmZmIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMiAyMWEyIDIgMCAwIDAtMiAydjJhMiAyIDAgMCAwIDIgMmgyYTIgMiAwIDAgMCAyLTJ2LTJhMiAyIDAgMCAwLTItMnptMCAydjJoMnYtMnptNiAwYTIgMiAwIDAgMSAyLTJoMmEyIDIgMCAwIDEgMiAydjJhMiAyIDAgMCAxLTIgMmgtMmEyIDIgMCAwIDEtMi0yem0yIDBoMnYyaC0yem04LTJhMiAyIDAgMCAwLTIgMnYyYTIgMiAwIDAgMCAyIDJoMmEyIDIgMCAwIDAgMi0ydi0yYTIgMiAwIDAgMC0yLTJ6bTAgMnYyaDJ2LTJ6bS0xOCA4YTIgMiAwIDAgMSAyLTJoMmEyIDIgMCAwIDEgMiAydjJhMiAyIDAgMCAxLTIgMmgtMmEyIDIgMCAwIDEtMi0yem00IDB2MmgtMnYtMnptNi0yYTIgMiAwIDAgMC0yIDJ2MmEyIDIgMCAwIDAgMiAyaDJhMiAyIDAgMCAwIDItMnYtMmEyIDIgMCAwIDAtMi0yem0yIDJoLTJ2MmgyeiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PHBhdGggZD0iTTM2IDMyLjVhMSAxIDAgMSAwLTIgMHYyLjkxNGwxLjI5MyAxLjI5M2ExIDEgMCAwIDAgMS40MTQtMS40MTRMMzYgMzQuNTg2eiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDdhMSAxIDAgMSAxIDIgMHY1YTEgMSAwIDEgMCAyIDBWOWgxMFY3YTEgMSAwIDEgMSAyIDB2NWExIDEgMCAxIDAgMiAwVjloM2EzIDMgMCAwIDEgMyAzdjE2LjA3QTcuMDAxIDcuMDAxIDAgMCAxIDM1IDQyYTYuOTkgNi45OSAwIDAgMS01Ljc0NS0zSDlhMyAzIDAgMCAxLTMtM1YxMmEzIDMgMCAwIDEgMy0zaDN6bTE2IDI4YTcgNyAwIDAgMSA2LTYuOTNWMThIOHYxOGExIDEgMCAwIDAgMSAxaDE5LjI5YTcgNyAwIDAgMS0uMjktMm0xMiAwYTUgNSAwIDEgMS0xMCAwYTUgNSAwIDAgMSAxMCAwIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L2c+PC9zdmc+" alt="icono-personal"
                                />
                                Asistencia
                            </button>
                            <button className='w-3/4 h-8 mx-auto text-white flex items-end justify-evenly text-xl gap-2'
                                onClick={() => showing('Laboratorios')}
                            >
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDY0IDY0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMzcuODUyIDUxLjU3MUwyMi4zODggNDIuNjRsMS41MzItMi42NTFsMTUuNDYxIDguOTMxeiIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik01My42MzEgNTYuNjU2YzQuNDY2LTQuMjE4IDcuMjk2LTEwLjE0NCA3LjI5Ni0xNi43NThjMC04LjE0OS00LjI4LTE1LjQ5OS0xMC45MzUtMTkuNjI3bDcuNDU2LTEyLjkwNmwtMS4xNzEtLjY3NWwxLjgzOS0zLjE5OEw1My4yOTUuNzA5bC0xLjg0MyAzLjE5M2wtMS4yMzMtLjcxMmwtMTguMzMgMzEuNzUybDEuNjAxLjkyNGwtMi4yNzMgMy45MzJsNC4wMjggMi4zMjZsMi4yNzQtMy45MzRsMS41OTkuOTI0bDcuNzA4LTEzLjM0OWExNi43NzUgMTYuNzc1IDAgMCAxIDcuNzU5IDE0LjEzNGMwIDkuMjQtNy41MjIgMTYuNzU4LTE2Ljc2MyAxNi43NThIMjQuMzE2djYuMzQ1aDM4LjAxOHYtNi4zNDVoLTguNzAxek0xOS44ODMgNy44NjVWMi44MjhoLjYybC0uMDA5LTEuMjA4aC01LjY0OWwuMDA5IDEuMjA4aC42NjZ2NS4wMzdoLTQuMjE1VjIuODI4aC42MThsLS4wMDctMS4yMDhINi4yNjJsLjAxMSAxLjIwOGguNjY2djUuMDM3SC43NXYyNS4yMzFoMjUuMjY5VjcuODY1aC02LjEzNHptMy45OTYgMjMuMDk1SDIuODg3VjEwLjAwMWg0LjA1MXYxNi4xMmMwIDEuMjIuOTk3IDIuMjExIDIuMiAyLjIxMWMxLjIwNS0uMDA1IDIuMTY2LS45OTMgMi4xNjYtMi4yMTF2LTE2LjEyaDQuMjE1djE2LjEyYzAgMS4yMi45OTggMi4yMTEgMi4yMDEgMi4yMTFjMS4yMDUtLjAwNSAyLjE2Ni0uOTkzIDIuMTY0LTIuMjExdi0xNi4xMmgzLjk5NXoiLz48L3N2Zz4=" alt="icono-personal"
                                />
                                Laboratorios
                            </button>
                        </>
                    ) : null}
                    {user.role === 'Maestro' ? (
                        <>
                            <button className='w-3/4 h-8 mx-auto text-white flex items-end justify-evenly text-xl gap-2'
                                onClick={() => showing('Alumno')}
                            >
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI1NiAyNTYiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0yMjYuNTMgNTYuNDFsLTk2LTMyYTggOCAwIDAgMC01LjA2IDBsLTk2IDMyQTggOCAwIDAgMCAyNCA2NHY4MGE4IDggMCAwIDAgMTYgMFY3NS4xbDMzLjU5IDExLjE5YTY0IDY0IDAgMCAwIDIwLjY1IDg4LjA1Yy0xOCA3LjA2LTMzLjU2IDE5LjgzLTQ0Ljk0IDM3LjI5YTggOCAwIDEgMCAxMy40IDguNzRDNzcuNzcgMTk3LjI1IDEwMS41NyAxODQgMTI4IDE4NHM1MC4yMyAxMy4yNSA2NS4zIDM2LjM3YTggOCAwIDAgMCAxMy40LTguNzRjLTExLjM4LTE3LjQ2LTI3LTMwLjIzLTQ0Ljk0LTM3LjI5YTY0IDY0IDAgMCAwIDIwLjY1LTg4bDQ0LjEyLTE0LjdhOCA4IDAgMCAwIDAtMTUuMThaTTE3NiAxMjBhNDggNDggMCAxIDEtODYuNjUtMjguNDVsMzYuMTIgMTJhOCA4IDAgMCAwIDUuMDYgMGwzNi4xMi0xMkE0Ny44OSA0Ny44OSAwIDAgMSAxNzYgMTIwIi8+PC9zdmc+" alt="icono-personal"
                                />
                                Alumnos
                            </button>
                            <button className='w-3/4 h-8 mx-auto text-white flex items-end justify-evenly text-xl gap-2'
                                onClick={() => showing('Materias')}
                            >
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIyNS42IiB2aWV3Qm94PSIwIDAgNjQwIDUxMiI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE2MCA2NGMwLTM1LjMgMjguNy02NCA2NC02NGgzNTJjMzUuMyAwIDY0IDI4LjcgNjQgNjR2Mjg4YzAgMzUuMy0yOC43IDY0LTY0IDY0SDMzNi44Yy0xMS44LTI1LjUtMjkuOS00Ny41LTUyLjQtNjRIMzg0di0zMmMwLTE3LjcgMTQuMy0zMiAzMi0zMmg2NGMxNy43IDAgMzIgMTQuMyAzMiAzMnYzMmg2NFY2NEgyMjR2NDkuMUMyMDUuMiAxMDIuMiAxODMuMyA5NiAxNjAgOTZ6bTAgNjRhOTYgOTYgMCAxIDEgMCAxOTJhOTYgOTYgMCAxIDEgMC0xOTJtLTI2LjcgMjI0aDUzLjNjNzMuNyAwIDEzMy40IDU5LjcgMTMzLjQgMTMzLjNjMCAxNC43LTExLjkgMjYuNy0yNi43IDI2LjdIMjYuN0MxMS45IDUxMiAwIDUwMC4xIDAgNDg1LjNDMCA0MTEuNyA1OS43IDM1MiAxMzMuMyAzNTIiLz48L3N2Zz4=" alt="icono-personal"
                                />
                                Materias
                            </button>
                            <button className='w-3/4 h-8 mx-auto text-white flex items-end justify-evenly text-xl gap-2'
                                onClick={() => showing('Grupos')}
                            >
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMSAxOHEtLjQyNSAwLS43MTItLjI4OFQwIDE3di0uNTc1cTAtMS4wNzUgMS4xLTEuNzVUNCAxNHEuMzI1IDAgLjYyNS4wMTN0LjU3NS4wNjJxLS4zNS41MjUtLjUyNSAxLjF0LS4xNzUgMS4yVjE4em02IDBxLS40MjUgMC0uNzEyLS4yODhUNiAxN3YtLjYyNXEwLS44LjQzOC0xLjQ2M3QxLjIzNy0xLjE2MlQ5LjU4OCAxM1QxMiAxMi43NXExLjMyNSAwIDIuNDM4LjI1dDEuOTEyLjc1dDEuMjI1IDEuMTYzdC40MjUgMS40NjJWMTdxMCAuNDI1LS4yODcuNzEzVDE3IDE4em0xMi41IDB2LTEuNjI1cTAtLjY1LS4xNjItMS4yMjV0LS40ODgtMS4wNzVxLjI3NS0uMDUuNTYzLS4wNjJUMjAgMTRxMS44IDAgMi45LjY2M3QxLjEgMS43NjJWMTdxMCAuNDI1LS4yODguNzEzVDIzIDE4ek00IDEzcS0uODI1IDAtMS40MTItLjU4N1QyIDExcTAtLjg1LjU4OC0xLjQyNVQ0IDlxLjg1IDAgMS40MjUuNTc1VDYgMTFxMCAuODI1LS41NzUgMS40MTNUNCAxM20xNiAwcS0uODI1IDAtMS40MTItLjU4N1QxOCAxMXEwLS44NS41ODgtMS40MjVUMjAgOXEuODUgMCAxLjQyNS41NzVUMjIgMTFxMCAuODI1LS41NzUgMS40MTNUMjAgMTNtLTgtMXEtMS4yNSAwLTIuMTI1LS44NzVUOSA5cTAtMS4yNzUuODc1LTIuMTM3VDEyIDZxMS4yNzUgMCAyLjEzOC44NjNUMTUgOXEwIDEuMjUtLjg2MiAyLjEyNVQxMiAxMiIvPjwvc3ZnPg==" alt="icono-personal"
                                />
                                Grupos
                            </button>
                            <button className='w-3/4 h-8 mx-auto text-white flex items-end justify-evenly text-xl gap-2'
                                onClick={() => showing('Asistencia')}
                            >
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48ZyBmaWxsPSIjZmZmIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMiAyMWEyIDIgMCAwIDAtMiAydjJhMiAyIDAgMCAwIDIgMmgyYTIgMiAwIDAgMCAyLTJ2LTJhMiAyIDAgMCAwLTItMnptMCAydjJoMnYtMnptNiAwYTIgMiAwIDAgMSAyLTJoMmEyIDIgMCAwIDEgMiAydjJhMiAyIDAgMCAxLTIgMmgtMmEyIDIgMCAwIDEtMi0yem0yIDBoMnYyaC0yem04LTJhMiAyIDAgMCAwLTIgMnYyYTIgMiAwIDAgMCAyIDJoMmEyIDIgMCAwIDAgMi0ydi0yYTIgMiAwIDAgMC0yLTJ6bTAgMnYyaDJ2LTJ6bS0xOCA4YTIgMiAwIDAgMSAyLTJoMmEyIDIgMCAwIDEgMiAydjJhMiAyIDAgMCAxLTIgMmgtMmEyIDIgMCAwIDEtMi0yem00IDB2MmgtMnYtMnptNi0yYTIgMiAwIDAgMC0yIDJ2MmEyIDIgMCAwIDAgMiAyaDJhMiAyIDAgMCAwIDItMnYtMmEyIDIgMCAwIDAtMi0yem0yIDJoLTJ2MmgyeiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PHBhdGggZD0iTTM2IDMyLjVhMSAxIDAgMSAwLTIgMHYyLjkxNGwxLjI5MyAxLjI5M2ExIDEgMCAwIDAgMS40MTQtMS40MTRMMzYgMzQuNTg2eiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDdhMSAxIDAgMSAxIDIgMHY1YTEgMSAwIDEgMCAyIDBWOWgxMFY3YTEgMSAwIDEgMSAyIDB2NWExIDEgMCAxIDAgMiAwVjloM2EzIDMgMCAwIDEgMyAzdjE2LjA3QTcuMDAxIDcuMDAxIDAgMCAxIDM1IDQyYTYuOTkgNi45OSAwIDAgMS01Ljc0NS0zSDlhMyAzIDAgMCAxLTMtM1YxMmEzIDMgMCAwIDEgMy0zaDN6bTE2IDI4YTcgNyAwIDAgMSA2LTYuOTNWMThIOHYxOGExIDEgMCAwIDAgMSAxaDE5LjI5YTcgNyAwIDAgMS0uMjktMm0xMiAwYTUgNSAwIDEgMS0xMCAwYTUgNSAwIDAgMSAxMCAwIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L2c+PC9zdmc+" alt="icono-personal"
                                />
                                Asistencia
                            </button>
                            <button className='w-3/4 h-8 mx-auto text-white flex items-end justify-evenly text-xl gap-2'
                                onClick={() => showing('Laboratorios')}
                            >
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDY0IDY0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMzcuODUyIDUxLjU3MUwyMi4zODggNDIuNjRsMS41MzItMi42NTFsMTUuNDYxIDguOTMxeiIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik01My42MzEgNTYuNjU2YzQuNDY2LTQuMjE4IDcuMjk2LTEwLjE0NCA3LjI5Ni0xNi43NThjMC04LjE0OS00LjI4LTE1LjQ5OS0xMC45MzUtMTkuNjI3bDcuNDU2LTEyLjkwNmwtMS4xNzEtLjY3NWwxLjgzOS0zLjE5OEw1My4yOTUuNzA5bC0xLjg0MyAzLjE5M2wtMS4yMzMtLjcxMmwtMTguMzMgMzEuNzUybDEuNjAxLjkyNGwtMi4yNzMgMy45MzJsNC4wMjggMi4zMjZsMi4yNzQtMy45MzRsMS41OTkuOTI0bDcuNzA4LTEzLjM0OWExNi43NzUgMTYuNzc1IDAgMCAxIDcuNzU5IDE0LjEzNGMwIDkuMjQtNy41MjIgMTYuNzU4LTE2Ljc2MyAxNi43NThIMjQuMzE2djYuMzQ1aDM4LjAxOHYtNi4zNDVoLTguNzAxek0xOS44ODMgNy44NjVWMi44MjhoLjYybC0uMDA5LTEuMjA4aC01LjY0OWwuMDA5IDEuMjA4aC42NjZ2NS4wMzdoLTQuMjE1VjIuODI4aC42MThsLS4wMDctMS4yMDhINi4yNjJsLjAxMSAxLjIwOGguNjY2djUuMDM3SC43NXYyNS4yMzFoMjUuMjY5VjcuODY1aC02LjEzNHptMy45OTYgMjMuMDk1SDIuODg3VjEwLjAwMWg0LjA1MXYxNi4xMmMwIDEuMjIuOTk3IDIuMjExIDIuMiAyLjIxMWMxLjIwNS0uMDA1IDIuMTY2LS45OTMgMi4xNjYtMi4yMTF2LTE2LjEyaDQuMjE1djE2LjEyYzAgMS4yMi45OTggMi4yMTEgMi4yMDEgMi4yMTFjMS4yMDUtLjAwNSAyLjE2Ni0uOTkzIDIuMTY0LTIuMjExdi0xNi4xMmgzLjk5NXoiLz48L3N2Zz4=" alt="icono-personal"
                                />
                                Laboratorios
                            </button>
                        </>
                    ) : null}
                    {user.role === 'Bibliotecario' ? (
                        <>
                            <button className='w-3/4 h-8 mx-auto text-white flex items-end justify-evenly text-xl gap-2'
                                onClick={() => showing('Libros')}
                            >
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNOSAzdjE1aDNWM3ptMyAybDQgMTNsMy0xbC00LTEzek01IDV2MTNoM1Y1ek0zIDE5djJoMTh2LTJ6Ii8+PC9zdmc+" alt="icono-personal"
                                />
                                Libros
                            </button>
                            <button className='w-3/4 h-8 mx-auto text-white flex items-end justify-evenly text-xl gap-2'
                                onClick={() => showing('Prestamos')}
                            >
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTMuMDkgMjBINVY2SDN2MTRhMiAyIDAgMCAwIDIgMmg4LjgxYTUuNSA1LjUgMCAwIDEtLjcyLTJNMTkgMmgtNXY1bC0yLTEuNUwxMCA3VjJIOWEyIDIgMCAwIDAtMiAydjEyYTIgMiAwIDAgMCAyIDJoNC4wOUE2IDYgMCAwIDEgMjEgMTMuMzRWNGEyIDIgMCAwIDAtMi0ybTEgMTN2M2gzdjJoLTN2M2gtMnYtM2gtM3YtMmgzdi0zWiIvPjwvc3ZnPg==" alt="icono-personal"
                                />
                                Prestamos
                            </button>
                            <button className='w-3/4 h-8 mx-auto text-white flex items-end justify-evenly text-xl gap-2'
                                onClick={() => showing('Devoluciones')}
                            >
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTMuMDkgMjBINVY2SDN2MTRhMiAyIDAgMCAwIDIgMmg4LjgxYTUuNSA1LjUgMCAwIDEtLjcyLTJNMTkgMmgtNXY1bC0yLTEuNUwxMCA3VjJIOWMtMS4xIDAtMiAuOS0yIDJ2MTJhMiAyIDAgMCAwIDIgMmg0LjA5QTYgNiAwIDAgMSAyMCAxMy4wOGMuMzQuMDYuNjguMTUgMSAuMjZWNGEyIDIgMCAwIDAtMi0ybTQgMTZ2MmgtOHYtMnoiLz48L3N2Zz4=" alt="icono-personal"
                                />
                                Devoluciones
                            </button>
                        </>
                    ) : null}
                </div>
                <div>
                    <button className='text-white font-medium' onClick={logOut}>
                        salir del sisetema
                    </button>
                </div>
            </aside>
            <section className='w-[85%] h-screen flex justify-center items-center'>
                <div className='w-3/4 h-3/4 bg-white rounded-md'>
                    {activeView ? activeView : 'Selecciona una opción del menú para mostrar contenido aquí'}
                </div>
            </section>
        </div>
    )
}

export default RecursosHumanos