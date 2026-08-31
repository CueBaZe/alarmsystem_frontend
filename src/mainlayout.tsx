import { type ReactNode } from "react";
import { NavLink } from 'react-router-dom';
import { MdDashboard } from "react-icons/md";
import { IoAnalytics, IoSettings } from "react-icons/io5";
import './index.css';

interface MainLayoutProps {
    children: ReactNode;
}

// Define your sidebar navigation items
const navItems = [
    { name: "Dashboard", path: "/", icon: <MdDashboard size={20}/> },
    { name: "Analytics", path: "/analytics", icon: <IoAnalytics size={20}/> },
    { name: "Settings", path: "/settings", icon:  <IoSettings size={20}/>},
];

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="flex flex-row min-h-screen bg-[#dedddc]">
            <div className="flex flex-col w-[300px] shrink-0 items-center gap-2 min-h-screen bg-[#faf9f7] border-r-2 border-[#ebe8e1]">
                <h1 className="text-4xl font-semibold p-2 text-[#2239c9] my-4">
                Fire<span className="text-[#7083fa]">Wall</span>
                </h1>

                {navItems.map((item) => (
                <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === '/'}
                    className={({ isActive }) =>
                    `transition duration-300 border-l-[8px] hover:border-[#7083fa] w-full p-2 ${
                        isActive ? 'border-[#7083fa] text-[#2239c9] bg-[#f4f3f1]' : 'border-transparent text-[#a7a8a7]'
                    }`
                    }
                >   
                    <div className="flex flex-row justify-center gap-1">
                        <p className="mt-[6px]">{item.icon}</p>
                        <p className="text-center text-2xl">{item.name}</p>
                    </div>
                </NavLink>
                ))}
            </div>

            <div className="w-full">
                {children}
            </div>
        </div>
    );
    }