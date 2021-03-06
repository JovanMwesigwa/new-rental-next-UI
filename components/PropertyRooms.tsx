import { IoIosArrowBack } from 'react-icons/io'
import Link from "next/link";


interface Props {
    moveOn: any;
    routeName: string;
}


const PropertyRooms: React.FC<Props> = ({ moveOn, routeName }) => {
    
    return (
        <div className='w-1/2'>
            <div className="py-10">
                <h1 className="text-xl w-2/3 tracking-wide text-black font-semibold">Specify the number of bedrooms each units has</h1>
                <h3 className=" text-sm text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</h3>

            <div className="flex flex-col my-10">
                <div className='flex flex-1'>
                    <h3 className=" text-sm text-gray-600">How many bedrooms does each unit have?</h3>
                </div>
                <div className='flex flex-1 flex-row '>
                    <input type="number" className='outline-none border-2 p-2 rounded-md w-1/2' />
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

export default PropertyRooms;