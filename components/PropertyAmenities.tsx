import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai'
import { IoIosArrowBack } from 'react-icons/io'
import Link from "next/link";


interface Props {
    moveOn: any;
    routeName: string;
}

const PropertyAmenities: React.FC<Props> = ({ moveOn, routeName }) => {

    const [ wifiSelected, setWifiSelected ] = useState<boolean>(false);
    const [ heatSelected, setHeatSelected ] = useState<boolean>(false);
    const [ closetSelected, setClosetSelected ] = useState<boolean>(false);
    const [ fireSelected, setFireSelected ] = useState<boolean>(false);
    const [ smokeSelected, setSmokeSelected ] = useState<boolean>(false);


    return (
        <div className='w-1/2'>
            <div className="py-10">
                <h1 className="text-xl w-2/3 tracking-wide text-black font-semibold">What amenities do you offer?</h1>
                <h3 className=" text-sm text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</h3>

            <div className="flex flex-1 flex-row my-10">
                <div className='flex flex-1 flex-row  flex-wrap'>
                    
                    <button onClick={() => setWifiSelected(!wifiSelected)} className={`border-2 m-2 flex flex-row relative ${ wifiSelected ? "bg-black text-white" : "border-black"} mr-3 px-4 p-2 rounded-full`}>
                        <h1 className='mr-1'>Wifi</h1>
                        { wifiSelected &&
                            <AiOutlineClose size={10} />
                        }
                    </button>
                    <button onClick={() => setHeatSelected(!heatSelected)} className={`border-2 m-2 flex flex-row ${heatSelected ? "bg-black text-white" : "border-black"} ml-3 px-4 p-2 rounded-full`}>
                        <h1 className='mr-1'>Heat</h1>
                        { heatSelected &&
                            <AiOutlineClose size={10} />
                        }
                    </button>
                    <button onClick={() => setClosetSelected(!closetSelected)} className={`border-2 m-2 flex flex-row ${closetSelected ? "bg-black text-white" : "border-black"} ml-3 px-4 p-2 rounded-full`}>
                        <h1 className='mr-1'>Closet drawers</h1>
                        { closetSelected &&
                            <AiOutlineClose size={10} />
                        }
                    </button>
                    <button onClick={() => setFireSelected(!fireSelected)} className={`border-2 m-2 flex flex-row ${fireSelected ? "bg-black text-white" : "border-black"} ml-3 px-4 p-2 rounded-full`}>
                        <h1 className='mr-1'>Fire extinguisher</h1>
                        { fireSelected &&
                            <AiOutlineClose size={10} />
                        }
                    </button>
                    <button onClick={() => setSmokeSelected(!smokeSelected)} className={`border-2 m-2 flex flex-row ${smokeSelected ? "bg-black text-white" : "border-black"} ml-3 px-4 p-2 rounded-full`}>
                        <h1 className='mr-1'>Smoke detector</h1>
                        { smokeSelected &&
                            <AiOutlineClose size={10} />
                        }
                    </button>
                </div>
                
            </div>
                {/* <p className='bg-black text-white p-2 text-xs rounded-sm w-1/2'>Tenants pay for their own power using YAKA</p> */}

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

export default PropertyAmenities;