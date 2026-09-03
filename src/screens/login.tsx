import logo from '../assets/firewall.png'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { VscDebugBreakpointUnsupported } from 'react-icons/vsc';


export default function Login() {

    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [loading, setLoading] = useState<boolean>(false);

    const [error, setError] = useState<string>('');

    const navigate = useNavigate();

    const API_URL = import.meta.env.VITE_API_URL;

    useEffect(() => {
        if (localStorage.getItem('userToken')) {
            navigate('/dashboard');
        }
    }, []);

    const handleLogin = async (name: string, password: string) => { //login function

        try {

            setLoading(true);

            if (!name.trim() || !password.trim()) {
                setError(('Indtast venligst både navn og adgangkode'));
                return;
            }

            const response = await fetch(`${API_URL}/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ 
                    name: name,
                    password: password
                })
            });

            const data = await response.json();

            if (!response.ok) {
                if (response.status === 401) {
                    setError(data.message);
                }
                return; 
            }

            localStorage.setItem('userToken', data.token);
            navigate('/dashboard');


        } catch (err) {
            setError("Kunne ikke forbinde til serveren");
        } finally {
            setLoading(false);
        }
        
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen p-4">
            <div className="flex flex-col w-[500px] h-[550px] items-center bg-[#faf9f7] rounded-lg border-2 border-[#ebe8e1]">
                <img src={logo} alt='logo' className='-mb-12'/>
                <h1 className="text-4xl text-gray-400">Welcome to firewall</h1>
                
                <div className='flex flex-row justify-center mt-8 w-full'>
                    <input 
                        type="text" 
                        placeholder='Navn' 
                        className='border-2 border-[#BCBBB9] text-lg text-gray-400 p-2 rounded-lg w-[280px]'
                        value={name}
                        onChange={(e) => {setName(e.target.value)}}
                    />
                </div>

                <div className='flex flex-row items-center mt-4 border-2 border-[#BCBBB9] text-lg text-gray-400 p-2 rounded-lg w-[280px]'>
                    <input 
                        type={showPassword ? "text" : "password"} 
                        placeholder='Password' 
                        className='w-[240px]'
                        value={password}
                        onChange={(e) => {setPassword(e.target.value)}}
                    />
                    <button
                        type='button'
                        onClick={() => setShowPassword(prev => !prev)}
                        className='cursor-pointer text-gray-500 hover:text-gray-700'
                        title={showPassword ? "Hide password" : "Show password"}
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>

                <div className='mt-4'>
                    <p className='text-red-500 font-semibold min-h-[25px]'>{error}</p>
                </div>
                
                <div className='mt-4'>
                    {loading ? ( //loading state is true
                        <button
                            type='button'
                            onClick={() => void handleLogin(name, password)}
                            className='bg-[#7083fa] p-2 rounded-xl text-lg text-white font-semi-bold w-[280px] animate-pulse'
                        >
                            Loading...
                        </button>
                    ) : ( //loading state is false
                        <button
                            type='button'
                            onClick={() => void handleLogin(name, password)}
                            className='bg-[#7083fa] p-2 rounded-xl text-lg text-white font-semi-bold w-[280px] transition duration-300 hover:bg-[#2239c9] cursor-pointer'
                        >
                            Login
                        </button>
                    )}
                </div>

            </div>

        </div>
    );
}