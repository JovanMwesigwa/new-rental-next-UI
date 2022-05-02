import ProgressBar from "@ramonak/react-progress-bar";
import { IoIosArrowBack } from 'react-icons/io'
import Link from "next/link";
import { useState } from "react";

const AddProperty: React.FC<any> = () => {
    const [ completed, setCompleted ] = useState<number>(5);

    const moveOn = () => {
        setCompleted(completed + 10);
    }

    return (
        <div className="py-5 h-screen flex flex-col">
            
            <div className="w-full p-3">
                <h1 className="text-xl mb-4">Property and home</h1>
                <ProgressBar completed={completed} borderRadius="10px" height="15px" animateOnRender={true} bgColor="#100f0f" isLabelVisible={false} />
            </div>

            <div className="flex flex-1 flex-col">

                <div className="flex flex-1 items-center justify-center">
                    <div className="py-10">
                        <h1 className="text-xl tracking-wide text-black font-semibold">What kind of property are you listing?</h1>

                    <div className="flex flex-col my-4">
                        <label className="text-base my-2 text-gray-700 mt-4">Choose a property type</label>
                        <select className="p-3 border-2 rounded-md outline-none" placeholder="Select one" name="cars" id="property">
                            <option value="volvo">Rentals</option>
                            <option value="saab">Apartments</option>
                            <option value="opel">Hostels</option>
                            <option value="audi">Rooms</option>
                        </select>
                    </div>
                        

                    </div>
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