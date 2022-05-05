import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai'
import { IoIosArrowBack } from 'react-icons/io'
import Link from "next/link";


interface Props {
    moveOn: any;
    routeName: string;
}

const PropertySpaces: React.FC<Props> = ({ moveOn, routeName }) => {

    const [ fenceSelected, setFenceSelected ] = useState<boolean>(false);
    const [ parkingSelected, setParkingSelected ] = useState<boolean>(false);
    const [ poolSelected, setPoolSelected ] = useState<boolean>(false);
    const [ laundrySelected, setLaundrySelected ] = useState<boolean>(false);
    const [ gymSelected, setGymSelected ] = useState<boolean>(false);


    return (
        <div className='w-1/2'>
            <div className="py-10">
                <h1 className="text-xl w-2/3 tracking-wide text-black font-semibold">What spaces can your guest have?</h1>
                <h3 className=" text-sm text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</h3>

            <div className="flex flex-1 flex-row my-10">
                <div className='flex flex-1 flex-row  flex-wrap'>
                    
                    <button onClick={() => setFenceSelected(!fenceSelected)} className={`border-2 m-2 flex flex-row relative ${ fenceSelected ? "bg-black text-white" : "border-black"} mr-3 px-4 p-2 rounded-full`}>
                        <h1 className='mr-1'>Fence</h1>
                        { fenceSelected &&
                            <AiOutlineClose size={10} />
                        }
                    </button>
                    <button onClick={() => setParkingSelected(!parkingSelected)} className={`border-2 m-2 flex flex-row ${parkingSelected ? "bg-black text-white" : "border-black"} ml-3 px-4 p-2 rounded-full`}>
                        <h1 className='mr-1'>Parking</h1>
                        { parkingSelected &&
                            <AiOutlineClose size={10} />
                        }
                    </button>
                    <button onClick={() => setPoolSelected(!poolSelected)} className={`border-2 m-2 flex flex-row ${poolSelected ? "bg-black text-white" : "border-black"} ml-3 px-4 p-2 rounded-full`}>
                        <h1 className='mr-1'>Pool</h1>
                        { poolSelected &&
                            <AiOutlineClose size={10} />
                        }
                    </button>
                    <button onClick={() => setLaundrySelected(!laundrySelected)} className={`border-2 m-2 flex flex-row ${laundrySelected ? "bg-black text-white" : "border-black"} ml-3 px-4 p-2 rounded-full`}>
                        <h1 className='mr-1'>Laundry Machine</h1>
                        { laundrySelected &&
                            <AiOutlineClose size={10} />
                        }
                    </button>
                    <button onClick={() => setGymSelected(!gymSelected)} className={`border-2 m-2 flex flex-row ${gymSelected ? "bg-black text-white" : "border-black"} ml-3 px-4 p-2 rounded-full`}>
                        <h1 className='mr-1'>Gym</h1>
                        { gymSelected &&
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

export default PropertySpaces;