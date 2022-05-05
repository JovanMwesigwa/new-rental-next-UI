import UnitCard from "./UnitCard";
import { BsArrowRightCircleFill } from 'react-icons/bs'
import UnitNamePriceComponent from "./UnitNamePriceComponent";

interface Props {
    units: any;
    setUnits: any;
}


const PropertyAllUnits: React.FC<Props> = ({ units, setUnits }) => {

    return (
        <div className="py-5 w-2/3">
            <div className="">
                <h1 className="text-xl tracking-wide text-black font-semibold">Specify info about your units?</h1>

                <div className="flex flex-1 flex-row">
                    <div className="flex flex-col flex-1 mr-2 ">
                        {
                            [...Array(units)].map((e, i) => (
                                <UnitCard key={i} />
                            ))
                        }
                    </div>
                    {/* Unit details */}
                    <div className="flex flex-1 px-3 border-l-2 border-black flex-col">
                        
                        <UnitNamePriceComponent />
                        

                        <div className="cursor-pointer flex self-end">
                            <BsArrowRightCircleFill size={33} />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
};

export default PropertyAllUnits;