import { BsPlusLg } from 'react-icons/bs'
  


const DashboardHeader: React.FC<any> = () => {
    return (
        <div className="flex flex-row items-center justify-between mb-4">
            <div className="p-2 bg-black flex px-3 flex-row items-center rounded-md border-2 cursor-pointer">
                <BsPlusLg color="#f9f6f6" />
                <h1 className="text-white font-medium text-sm ml-3">ADD HOME</h1>
            </div> 

            <div className="flex flex-row items-center">
                <h3 className="mr-4">Sekkamatte John</h3>
                <div className="h-10 w-10 rounded-full bg-gray-400">

                </div>
            </div>
        </div>
    )
};

export default DashboardHeader