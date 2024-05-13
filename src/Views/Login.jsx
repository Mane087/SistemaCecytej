import React, { useState } from 'react';
import LogoCecyej from '../assets/logo-cectej.png';
import { useNavigate } from 'react-router-dom';
import { login } from '../APi/Login';
import loginStore from '../store/login.store';

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const setUserio = loginStore(state => state.setUser);

    const handleLogin = async () => {
        console.log("usuario:", user, password);
        try {
            const response = await login({
                numero_identificacion: user,
                password: password
            });
            console.log("RESPUESTA: ", response);
            if (!response.status === 200) {
                alert('Usuario o contraseña incorrectos');
                return;
            }
            console.log("CURIFEO: ",response.user);
            setUserio(response.user);
            navigate('/RecursosHumanos');
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className='w-[350px] h-max rounded-xl bg-white border border-[#ccc] mx-auto flex flex-col gap-4 py-5 mt-28'>
            <img src={LogoCecyej} alt="logo-cecytej" className='w-52 h-52 bg-transparent mx-auto' />
            <div className='w-3/4 h-max mx-auto flex flex-col gap-2'>
                <label className='text-lg font-semibold'>Usuario: </label>
                <input
                    type="text"
                    className='bg-white outline-none border border-[#ccc] rounded-md w-full h-9 pl-2'
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                />
            </div>
            <div className='w-3/4 h-max mx-auto flex flex-col gap-2'>
                <label className='text-lg font-semibold'>Password: </label>
                <input
                    type="password"
                    className='bg-white outline-none border border-[#ccc] rounded-md w-full h-9 pl-2'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button className='w-1/2 bg-green-700 text-white h-9 rounded-md mx-auto text-xl font-semibold' onClick={handleLogin}>Ingresar</button>
        </div>
    );
}

export default Login;