import UnitCard from "./UnitCard";

const PropertyAllUnits: React.FC<any> = () => {
    return (
        <div className="py-5 w-2/3">
            <div className="">
                <h1 className="text-xl tracking-wide text-black font-semibold">Specify info about your units?</h1>

                <div className="flex flex-1 flex-row">
                    <div className="flex flex-col flex-1 mr-2 ">
                        <UnitCard active />
                        <UnitCard />
                        <UnitCard />
                    </div>
                    <div className="flex flex-1">
                        <h1>2</h1>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default PropertyAllUnits;