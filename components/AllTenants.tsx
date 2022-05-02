import { BsPlusLg } from 'react-icons/bs'
import { UserProps } from '../types';
import TenantSmall from './TenantSmall';

interface Props {
    tenants: any;
    selectUser: (user: UserProps) => void;
    selectedUser: UserProps;
}

const AllTenants: React.FC<Props> = ({ tenants, selectUser, selectedUser }) => {
    return (
        <div className="bg-white py-6 flex flex-1 mr-2 rounded-md flex-col">
            <h2 className="text-lg px-6 font-medium">Tenants</h2>
            <ul className="flex flex-row px-6 mb-3 items-center justify-between py-3 text-gray-500 text-xs font-medium">
                <li>DETAILS</li>
                <li>FILE</li>
                <li>ACTION</li>
            </ul>

            {
                tenants.map((tenant: any) => (
                    <TenantSmall selectedUser={selectedUser} selectUser={selectUser} key={tenant.id} item={tenant} />
                ))
            }
            
        </div>
    )
}

export default AllTenants;