import MainLayout from "../mainlayout";
import { FaPowerOff } from "react-icons/fa";
import { useState } from 'react';

export default function Dashboard() {

  const [power, setPower] = useState(true);

  const handlePower = () => {
    setPower(prev => !prev);
  }

  return (
      <MainLayout>
        <div className="grid grid-cols-12 gap-12 w-full y-overflow-auto p-4">
          <div className="col-span-8 text-center">
            <h1 className="text-4xl text-[#252625] mb-2">Sensors</h1>
            <div className="flex flex-col bg-[#faf9f7] h-[600px] rounded-lg border-2 border-[#ebe8e1]">
                
            </div>
          </div>

          <div className="col-span-4 flex flex-row items-center justify-center bg-[#faf9f7] h-[600px] rounded-lg border-2 border-[#ebe8e1] mt-12">
            <div onClick={handlePower} className={`flex p-4 items-center transtion duration-300 justify-center w-[90%] h-[90%] rounded-2xl 
              ${power ? 'bg-green-500 hover:bg-green-400' : 'bg-red-500 hover:bg-red-400'}`}>
              <FaPowerOff size={250} color="#fff"/>
            </div>
          </div>

          <div className="col-span-12 text-center">
            <h1 className="text-4xl text-[#252625] mb-2">Logs</h1>
            <div className="flex flex-col bg-[#faf9f7] h-[600px] rounded-lg border-2 border-[#ebe8e1]">
                
            </div>
          </div>
        </div>
      </MainLayout>
  );
}