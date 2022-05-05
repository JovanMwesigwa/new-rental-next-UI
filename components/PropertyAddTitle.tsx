import { IoIosArrowBack } from 'react-icons/io'
import Link from "next/link";


interface Props {
    moveOn: any;
    routeName: string;
}



const PropertyAddTitle: React.FC<Props> = ({ moveOn, routeName }) => {
    return (
        <div className='w-1/2'>
            <div className="py-10">
                <h1 className="text-xl w-2/3 tracking-wide text-black font-semibold">Add a title for your listing</h1>
                <h3 className=" text-sm text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</h3>

            <div className="flex flex-col my-10">
                <div className='flex  flex-row items-center'>
                    <input type="text" className='outline-none border-2 p-2 rounded-md w-full' />
                    <p className="text-sm bg-green-400 rounded-sm text-white px-2 ml-2">50</p>
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

export default PropertyAddTitle;