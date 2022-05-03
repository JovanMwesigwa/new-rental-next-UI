

const UnitNamePriceComponent: React.FC<any> = () => {
    return (
        <div>

            <h1 className="text-lg tracking-wide text-black font-semibold mb-4">Customise specific information about this unit</h1>
            
            <div className="my-3">
                <h3 className=" text-sm text-gray-600">What number are you giving this unit?</h3>
                <div className="flex flex-row items-center ">
                    <h1 className="text-sm font-bold pr-5 cursor-pointer">#</h1>
                    <input  className="border-2 outline-none p-1 w-2/3 rounded-md px-3 my-2" />
                </div>
            </div>
            <div className="my-3">
                <h3 className=" text-sm text-gray-600">How much are you charging for this unit? / month</h3>
                <div className="flex flex-row items-center ">
                    <h1 className="text-sm font-bold pr-2 cursor-pointer">UGX</h1>
                    <input className="border-2 outline-none p-1 w-2/3 rounded-md px-3 my-2" />
                </div>
            </div>

        </div>
    )
};

export default UnitNamePriceComponent;