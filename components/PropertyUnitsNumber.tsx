import { useState } from 'react';
import { BsPlusLg, BsFileMinus } from 'react-icons/bs'


const PropertyUnitsNumber: React.FC<any> = () => {
    const [ units, setUnits ] = useState<number>(1);


    return (
        <div>
            <div className="py-10">
                <h1 className="text-xl tracking-wide text-black font-semibold">How many units there?</h1>

            <div className="flex flex-row my-10 items-center justify-between">
                <button onClick={() => setUnits(units - 1)} className='border-2 border-black p-2 rounded-md'>
                    <BsPlusLg size={18} />
                </button>
                    <input value={units} className='border-2 border-black p-1 rounded-md w-32 px-3' />
                <button onClick={() => setUnits(units + 1)} className='border-2 border-black p-2 rounded-md'>
                    <BsPlusLg size={18} />
                </button>
            </div>
                

            </div>
        </div>
    )
};

export default PropertyUnitsNumber;