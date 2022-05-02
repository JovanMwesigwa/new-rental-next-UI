import { AiOutlineArrowRight } from 'react-icons/ai'

interface Props {
    active?: boolean;
}
 
const UnitCard: React.FC<Props> = ({ active }) => {
    return (
        <div className={`flex flex-row p-2 w-full mt-4 ${active && "bg-red-50"} cursor-pointer hover:bg-red-50`}>
            <div className="h-full w-24 bg-gray-400 rounded-md p-2"></div>
            <div className="flex flex-1 flex-col px-3 flex-grow">
                <div className='flex flex-row'>
                    <h1 className="text-sm">Unit no: </h1>
                    <h1 className='text-sm text-blue-600 mx-2'>#1</h1>
                </div>
                <div className='flex flex-row'>
                    <h1 className="text-sm">Price:</h1>
                    <h1 className='text-sm text-red-600 mx-2'>UGX 0</h1>
                </div>
                <div className='flex flex-row'>
                    <h1 className="text-sm">Tenant name:</h1>
                    <h1 className='text-sm text-red-600 mx-2'>Vacant</h1>
                </div>
                <div className='flex flex-row'>
                    <h1 className="text-sm">Tenant phone:</h1>
                    <h1 className='text-sm text-red-600 mx-2'>Vacant</h1>
                </div>
                
            </div>
            <div className="flex items-center cursor-pointer hover:text-blue-600">
                <AiOutlineArrowRight size={24} />
            </div>
        </div>
    )
};

export default UnitCard;