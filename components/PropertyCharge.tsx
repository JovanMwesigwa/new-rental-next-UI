
const PropertyCharge: React.FC<any> = () => {
    return (
        <div className='w-1/2'>
            <div className="py-10">
                <h1 className="text-xl w-2/3 tracking-wide text-black font-semibold">How much do you intend to charge each unit per month?</h1>
                <h3 className=" text-sm text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</h3>

            <div className="flex flex-row my-10 items-center justify-between">
                <div className='flex flex-1 items-center justify-center'>
                    <h3 className=" text-lg text-gray-600">Charge per month</h3>
                </div>
                <div className='flex flex-1 flex-row items-center'>
                    <h3 className=" text-sm font-bold text-black mr-3 cursor-pointer">UGX</h3>

                    <input type="number" className='outline-none border-2 p-2 rounded-md w-full' />
                </div>
                
            </div>
                

            </div>
        </div>
    )
};

export default PropertyCharge;