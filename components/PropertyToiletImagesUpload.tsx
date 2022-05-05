import { useState } from 'react';
import { BsCloudUpload } from 'react-icons/bs'
import { IoIosArrowBack } from 'react-icons/io'
import Link from "next/link";


interface Props {
    moveOn: any;
    routeName: string;
}

const PropertyToiletImagesUpload: React.FC<Props> = ({ moveOn, routeName }) => {


    return (
        <div className='w-1/2'>
            <div className="py-10">
                <h1 className="text-xl w-2/3 tracking-wide text-black font-semibold">Upload photos of your units toilet</h1>
                <h3 className=" text-sm text-gray-600">Upload atleast one photo of your unit. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</h3>

            <div className="flex flex-1 flex-row my-10">
                <div className='flex items-center justify-center h-52 w-full bg-gray-200 rounded-md'>

                        <button className='bg-red-500 p-3 px-4 rounded-md text-white flex flex-row items-center'>
                            <BsCloudUpload className='mr-4' />
                            Upload photos
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

export default PropertyToiletImagesUpload;