

import { useState } from 'react';
import { BsPlusLg, BsFileMinus } from 'react-icons/bs'
import { VscChromeClose } from 'react-icons/vsc'
import { GiCheckMark} from 'react-icons/gi'
import { IoIosArrowBack } from 'react-icons/io'
import Link from "next/link";


interface Props {
    moveOn: any;
    routeName: string;
}


const PropertyToilet: React.FC<Props> = ({ moveOn, routeName }) => {
    const [ bathroomIndoor, setBathRoomIndoor ] = useState<string | null>(null)
    return (
        <div className='w-1/2'>
            <div className="py-10">
                <h1 className="text-xl w-2/3 tracking-wide text-black font-semibold">Do your units have an indoor toilet?</h1>
                <h3 className=" text-sm text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</h3>

            <div className="flex flex-row my-10 items-center justify-between">
                <div className='flex flex-1 items-center justify-center'>
                    <h3 className=" text-lg text-gray-600">Is the toilet indoor?</h3>
                </div>
                <div className='flex flex-1 flex-row'>
                    <button onClick={() => setBathRoomIndoor("Indoor")} className={`border-2 ${bathroomIndoor === "Indoor" ? "bg-black text-white" : "border-black"} mr-3 p-3 rounded-full`}>
                        <GiCheckMark size={18} />
                    </button>
                    <button onClick={() => setBathRoomIndoor("OutDoor")} className={`border-2 ${bathroomIndoor === "OutDoor" ? "bg-black text-white" : "border-black"} ml-3 p-3 rounded-full`}>
                        <VscChromeClose size={18} />
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

export default PropertyToilet;