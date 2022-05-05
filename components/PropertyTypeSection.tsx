import { IoIosArrowBack } from 'react-icons/io'
import Link from "next/link";

interface Props {
    moveOn?: any;
    routeName?: string;
}


const PropertyTypeSection: React.FC<Props> = ({ moveOn, routeName }) => {
    return (
        <div className='flex flex-col items-center justify-between w-full h-full'>
            <div className='flex flex-1'></div>
            <div className="py-10 flex flex-1 flex-col flex-grow">
                <h1 className="text-xl tracking-wide text-black font-semibold">What kind of property are you listing?</h1>

                    <div className="flex flex-col my-4">
                        <label className="text-base my-2 text-gray-700 mt-4">Choose a property type</label>
                        <select className="p-3 border-2 rounded-md outline-none" placeholder="Select one" name="property type" id="property">
                            <option value="rentals">Rentals</option>
                            <option value="apartments">Apartments</option>
                            <option value="hostels">Hostels</option>
                            <option value="rooms">Rooms</option>
                        </select>
                    </div>
            </div>

            <div className="flex flex-1 w-1/2 flex-row items-center justify-between">
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

export default PropertyTypeSection;