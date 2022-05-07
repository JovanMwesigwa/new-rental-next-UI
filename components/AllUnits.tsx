import { BsPlusLg } from 'react-icons/bs'
import { UserProps } from '../types';
import TenantSmall from './TenantSmall';
import UnitCardComponent from './UnitCardComponent';


const AllUnits: React.FC<any> = () => {
    return (
        <div className="bg-white py-6 flex flex-1 mr-2 rounded-md flex-col">
            <h2 className="text-lg px-6 font-medium">Units</h2>
            <ul className="flex flex-row px-6 mb-3 items-center justify-between py-3 text-gray-500 text-xs font-medium">
                <li>DETAILS</li>
                <li>ACTION</li>
            </ul>

            <UnitCardComponent />
            <UnitCardComponent />
            <UnitCardComponent />
            
        </div>
    )
}

export default AllUnits;