import { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io'
import Link from "next/link";
import { BsPlusLg, BsFileMinus } from 'react-icons/bs'
import { AiOutlineMinus } from 'react-icons/ai'

interface Props {
    units: any;
    setUnits: any;
    moveOn: any;
    routeName: string;
}


const PropertyUnitsNumber: React.FC<Props> = ({ setUnits,units, moveOn, routeName }) => {
    return (
        <div className='w-1/2 flex flex-col items-center justify-between'>
            <div className="py-10">
                <h1 className="text-xl w-2/3 tracking-wide text-black font-semibold">How many units there are you intending to manage?</h1>
                <h3 className=" text-sm text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</h3>

            <div className="flex flex-row my-10 items-center justify-between">
                <div className='flex flex-1 items-center justify-center'>
                    <h3 className=" text-lg text-gray-600">Units</h3>
                </div>
                <div className='flex flex-1 flex-row'>
                    <button onClick={() => setUnits(Math.max(1, units - 1))} className='border-2 border-black p-2 rounded-full'>
                        <AiOutlineMinus size={18} />
                    </button>
                        <input value={units} onChange={e => setUnits(e.target.value)} className=' text-center w-14 px-3 text-lg outline-none' />
                    <button onClick={() => setUnits(units + 1)} className='border-2 border-black p-2 rounded-full'>
                        <BsPlusLg size={18} />
                    </button>
                </div>
                
            </div>
                

            </div>

            <div className="flex flex-1 w-full flex-row items-center justify-between">
                    <Link href="/host">
                        <div className="flex flex-row items-center cursor-pointer">
                            <IoIosArrowBack size={20} />
                            <h2 className="text-lg mx-3">Back</h2>
                        </div>
                    </Link>
                    
                        <div onClick={() => moveOn(routeName)} className="flex flex-row items-center cursor-pointer bg-black text-white px-5 py-2 rounded-md">
                            <h2 className="text-lg mx-3">Next</h2>
                        </div>
                        
            </div>
        </div>
    )
};

export default PropertyUnitsNumber;