import ProgressBar from "@ramonak/react-progress-bar";
import { IoIosArrowBack } from 'react-icons/io'
import Link from "next/link";
import { useState } from "react";
import {  PropertyAllUnits, PropertyBathroom, PropertyCharge, PropertyAmenities, PropertyLocation, PropertyPowerCharge, PropertyRooms, PropertyToilet, PropertyTypeSection, PropertyUnitsNumber, PropertySpaces, PropertyFrontImagesUpload, PropertyBedroomImagesUpload, PropertyBathroomImagesUpload, PropertyToiletImagesUpload, PropertyEnviromentImagesUpload, PropertyAddDescription, PropertyAddTitle } from "../../../components";
import PropertyMapPin from "../../../components/PropertyMapPin";

const AddProperty: React.FC<any> = () => {
    const [ completed, setCompleted ] = useState<number>(5);

    const [ activeRoute, setActiveRoute ] = useState<string | null>("Type");

    // const [ hasSelected, setHasSelected ] = useState<boolean>(false);

    const [ unitsActive,setUnitsActive ] = useState<boolean>(false);

    const [ units, setUnits ] = useState<any>(1);

    const [ unitInfo, setUnitInfo ] = useState<any>([]);


    const moveOn = (name: string) => {
        setCompleted(completed + 5.5);
        setActiveRoute(name);
    }

    const renderTab = () => {
        switch (activeRoute) {
            case "Type":
                return <PropertyTypeSection moveOn={moveOn} routeName="Units Number" />;
            case "Units Number":
                return <PropertyUnitsNumber units={units} setUnits={setUnits} moveOn={moveOn} routeName="Charge" />;
            case "Charge":
                return <PropertyCharge  moveOn={moveOn} routeName="Rooms" />;
            case "Rooms":
                return <PropertyRooms moveOn={moveOn} routeName="BathRoom" />;
            case "BathRoom":
                return <PropertyBathroom moveOn={moveOn} routeName="Toilet" />;
            case "Toilet":
                return <PropertyToilet moveOn={moveOn} routeName="Power" />;
            case "Power":
                return <PropertyPowerCharge moveOn={moveOn} routeName="Location" />;
            case "Location":
                return <PropertyLocation moveOn={moveOn} routeName="Map" />;
            case "Map":
                return <PropertyMapPin moveOn={moveOn} routeName="Amenities"  />;
            case "Amenities":
                return <PropertyAmenities moveOn={moveOn} routeName="Spaces" />;
            case "Spaces":
                return <PropertySpaces moveOn={moveOn} routeName="Front Images" />;
            case "Front Images":
                    return <PropertyFrontImagesUpload moveOn={moveOn} routeName="Bedroom Images" />;
            case "Bedroom Images":
                    return <PropertyBedroomImagesUpload moveOn={moveOn} routeName="Bathroom Images" />;
            case "Bathroom Images":
                    return <PropertyBathroomImagesUpload moveOn={moveOn} routeName="Toilet Images" />;
            case "Toilet Images":
                    return <PropertyToiletImagesUpload moveOn={moveOn} routeName="Env Images" />;
            case "Env Images":
                    return <PropertyEnviromentImagesUpload moveOn={moveOn} routeName="Description" />;
            case "Description":
                    return <PropertyAddDescription moveOn={moveOn} routeName="Title" />;
            case "Title":
                    return <PropertyAddTitle moveOn={moveOn} routeName="Type" />;
            default:
                return <PropertyTypeSection moveOn={moveOn} routeName="Units Number" />;
        }
    }
    
    const renderHeading = () => {
        switch (activeRoute) {
            case "Type":
                return "Property type";
            case "Units Number":
                return "Number of units";
            case "Charge":
                return "Charge per month";
            case "Rooms":
                return "Number of bedrooms";
            case "BathRoom":
                return "Bathroom information";
            case "Toilet":
                return "Toilet information";
            case "Power":
                return "Power charges collection";
            case "Location":
                return "Property address";
            case "Map":
                return "Property map pin";
            case "Amenities":
                return "Ammenities offered";
            case "Spaces":
                return "Tenant spaces offered";
            case "Front Images":
                    return "Front pouch pictures";
            case "Bedroom Images":
                    return "Bedroom pictures";
            case "Bathroom Images":
                    return "Bathroom pictures";
            case "Toilet Images":
                    return "Toilet pictures";
            case "Env Images":
                    return "Property enviroment pictures";
            case "Description":
                    return "Property description and info";
            case "Title":
                    return "Property name or title";
            default:
                return "Property type";
        }
    }

    return (
        <div className="py-5 h-screen flex flex-col relative">
            
            <div className="w-full p-3 top-0 left-0 right-0 bg-white fixed">
                <h1 className="text-xl mb-4">{renderHeading()}</h1>
                <ProgressBar completed={completed} borderRadius="10px" height="15px" animateOnRender={true} bgColor="#100f0f" isLabelVisible={false} />
            </div>

                <div className={`flex flex-1 ${unitsActive ? "mt-20" : "items-center"} justify-center`}>
                    {renderTab()}
                </div>
            
            
            
        </div>
    )
};

export default AddProperty;