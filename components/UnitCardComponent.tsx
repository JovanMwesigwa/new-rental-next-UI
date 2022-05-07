

const UnitCardComponent: React.FC<any> = () => {
    return (
        <div onClick={() => {}} className={`flex flex-row  w-full h-28  p-3 cursor-pointer`}>
            <div className="flex flex-1">
                <div className="h-20 w-20 bg-gray-300 rounded-md relative overflow-hidden">
                    {/* <Image src={item.picture} alt="user picture" layout='fill' /> */}
                </div>
                <div className="ml-3">
                    <h2 className="text-sm font-semibold text-black">Unit No: 245</h2>
                    <h2 className="text-xs font-semibold text-black">Mugezi Kigozi</h2>
                    <h2 className="text-xs text-blue-700 font-medium">Location: Kla</h2>
                </div>
            </div>
                
            <div className="">
                <button className="text-red-600 font-bold border-2 flex items-center flex-row border-red-600 text-xs px-4 py-2 rounded-md">
                    <h1 className="">OCCUPIED</h1>
                </button>
            </div>
        </div>
    )
};

export default UnitCardComponent;