import logo from '../assets/firewall.png'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from 'react';

export default function Login() {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex flex-col justify-center items-center min-h-screen p-4">
            <div className="flex flex-col w-[500px] h-[550px] items-center bg-[#faf9f7] rounded-lg border-2 border-[#ebe8e1]">
                <img src={logo} alt='logo' className='-mb-12'/>
                <h1 className="text-4xl text-gray-400">Welcome to firewall</h1>
                
                <div className='flex flex-row justify-center mt-8 w-full'>
                    <input type="text" placeholder='Navn' className='border-2 border-[#BCBBB9] text-lg text-gray-400 p-2 rounded-lg w-[280px]'/>
                </div>

                <div className='flex flex-row items-center mt-4 border-2 border-[#BCBBB9] text-lg text-gray-400 p-2 rounded-lg w-[280px]'>
                    <input type={showPassword ? "text" : "password"} placeholder='Password' className='w-[240px]'/>
                    <button
                        type='button'
                        onClick={() => setShowPassword(prev => !prev)}
                        className='cursor-pointer text-gray-500 hover:text-gray-700'
                        title={showPassword ? "Hide password" : "Show password"}
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>
                
                <div className='mt-16'>
                    <button
                        className='bg-[#7083fa] p-2 rounded-xl text-lg text-white font-semi-bold w-[280px] transition duration-300 hover:bg-[#2239c9] cursor-pointer'
                    >
                        Login
                    </button>
                </div>

            </div>

        </div>
    );
}