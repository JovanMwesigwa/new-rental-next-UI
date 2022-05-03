import { useState } from 'react';
import { BsPlusLg, BsFileMinus } from 'react-icons/bs'
import { VscChromeClose } from 'react-icons/vsc'
import { GiCheckMark} from 'react-icons/gi'

const PropertyPowerCharge: React.FC<any> = () => {
    const [ powerCollectionType, setPowerCollectionType ] = useState<string | null>(null)

    return (
        <div className='w-1/2'>
            <div className="py-10">
                <h1 className="text-xl w-2/3 tracking-wide text-black font-semibold">How do you charge your electricity?</h1>
                <h3 className=" text-sm text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</h3>

            <div className="flex flex-row my-10 items-center justify-between">
                <div className='flex flex-1 items-center justify-center'>
                    <h3 className=" text-lg text-gray-600">Power collection charges?</h3>
                </div>
                <div className='flex flex-1 flex-row'>
                    <button onClick={() => setPowerCollectionType("Yaka")} className={`border-2 relative ${powerCollectionType === "Yaka" ? "bg-black text-white" : "border-black"} mr-3 px-4 p-2 rounded-full`}>
                        <h1>Tenants use Yaka</h1>
                    </button>
                    <button onClick={() => setPowerCollectionType("SubMeter")} className={`border-2 ${powerCollectionType === "SubMeter" ? "bg-black text-white" : "border-black"} ml-3 px-4 p-2 rounded-full`}>
                        <h1>Sub meter</h1>
                    </button>
                </div>


                
            </div>
                {/* <p className='bg-black text-white p-2 text-xs rounded-sm w-1/2'>Tenants pay for their own power using YAKA</p> */}

            </div>
        </div>
    )
};

export default PropertyPowerCharge;