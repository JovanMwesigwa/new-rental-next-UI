

import { useState } from 'react';
import { BsPlusLg, BsFileMinus } from 'react-icons/bs'
import { VscChromeClose } from 'react-icons/vsc'
import { GiCheckMark} from 'react-icons/gi'



const PropertyBathroom: React.FC<any> = () => {
    const [ bathroomIndoor, setBathRoomIndoor ] = useState<string | null>(null)
    return (
        <div className='w-1/2'>
            <div className="py-10">
                <h1 className="text-xl w-2/3 tracking-wide text-black font-semibold">Do your units have an indoor bathroom?</h1>
                <h3 className=" text-sm text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</h3>

            <div className="flex flex-row my-10 items-center justify-between">
                <div className='flex flex-1 items-center justify-center'>
                    <h3 className=" text-lg text-gray-600">Is the bathroom indoor?</h3>
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
        </div>
    )
};

export default PropertyBathroom;