import ProgressBar from "@ramonak/react-progress-bar";
import { IoIosArrowBack } from 'react-icons/io'
import Link from "next/link";
import { useState } from "react";
import {  PropertyAllUnits, PropertyTypeSection, PropertyUnitsNumber } from "../../../components";

const AddProperty: React.FC<any> = () => {
    const [ completed, setCompleted ] = useState<number>(5);

    const [ unitsActive,setUnitsActive ] = useState<boolean>(true);

    const moveOn = () => {
        setCompleted(completed + 10);
    }

    return (
        <div className="py-5 h-screen flex flex-col relative">
            
            <div className="w-full p-3 top-0 left-0 right-0 bg-white fixed">
                <h1 className="text-xl mb-4">Property and home</h1>
                <ProgressBar completed={completed} borderRadius="10px" height="15px" animateOnRender={true} bgColor="#100f0f" isLabelVisible={false} />
            </div>

            <div className="flex flex-1 flex-col">

            <div className={`flex flex-1 ${unitsActive ? "mt-20" : "items-center"} justify-center`}>
                {/* <PropertyTypeSection /> */}
                {/* <PropertyUnitsNumber /> */}
                <PropertyAllUnits />
            </div>
            
                <div className="flex w-1/2 self-center items-center justify-between">
                    <Link href="/host">
                        <div className="flex flex-row items-center cursor-pointer">
                            <IoIosArrowBack size={20} />
                            <h2 className="text-lg mx-3">Back</h2>
                        </div>
                    </Link>
                    
                    {/* <Link href="/host"> */}
                        <div onClick={moveOn} className="flex flex-row items-center cursor-pointer bg-black text-white px-5 py-2 rounded-md">
                            <h2 className="text-lg mx-3">Next</h2>
                        </div>
                    {/* </Link> */}
                        
                </div>

            </div>

            
            
        </div>
    )
};

export default AddProperty;