import Image from 'next/image';
import { BsPlusLg } from 'react-icons/bs'
import { UserProps } from '../types';


interface Props {
    item: any;
    selectUser: (user: UserProps) => void;
    selectedUser: UserProps;
}

const TenantSmall: React.FC<Props> = ({ item, selectUser, selectedUser }) => {
    return (
        <div onClick={() => selectUser(item)} className={`flex flex-row ${selectedUser.id === item.id && "bg-red-100"} w-full h-28  p-3 cursor-pointer`}>
            <div className="flex flex-1">
                <div className="h-20 w-20 bg-gray-300 rounded-md relative overflow-hidden">
                    <Image src={item.picture} alt="user picture" layout='fill' />
                </div>
                <div className="ml-3">
                    <h2 className="text-sm font-semibold text-black">{item.name}</h2>
                    <h2 className="text-xs text-blue-700 font-medium">Room no: {item.room}</h2>
                </div>
            </div>
            <div className="flex flex-1 flex-col">
                <h2 className="text-xs text-black">{item.nin}</h2>
                <h2 className="text-xs text-black">{item.permit}</h2>
            </div>   
            <div className="">
                <button className="text-black font-bold border-2 flex items-center flex-row border-black text-xs px-4 py-2 rounded-md">
                    <BsPlusLg color="#080707" size={12} />
                    <h1 className="ml-2">SEND</h1>
                </button>
            </div>
        </div>
    )
};

export default TenantSmall;