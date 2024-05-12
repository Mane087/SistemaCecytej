import React from 'react';
import LogoCecyej from '../assets/logo-cectej.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/RecursosHumanos');
    }


    return (
        <div className='w-[30%] h-max rounded-xl bg-white border border-slate-400 mx-auto flex flex-col'>
            <img src={LogoCecyej} alt="logo-cecytej" className='w-52 h-52 bg-transparent mx-auto' />
            <div className='bg-transparent'>
                <input type="text" className='bg-white outline-none border border-[#ccc] rounded-md' />
            </div>
            <div className='bg-transparent'>
                <input type="password" className='bg-white outline-none border border-[#ccc] rounded-md' />
            </div>
            <button className='w-1/2 h-max bg-green-500 text-white' onClick={handleLogin}>Ingresar</button>
        </div>
    );
}

export default Login;