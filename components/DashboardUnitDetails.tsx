
import Image from "next/image";
import { AnalysisProps, UserProps } from "../types";
import { GoLocation } from 'react-icons/go';
import { CgGym } from 'react-icons/cg';
import { GiBrickWall } from 'react-icons/gi';
import { AiOutlineWifi } from 'react-icons/ai';
import { RiArchiveDrawerLine, RiParkingLine } from 'react-icons/ri';
import { FaRegMoneyBillAlt, FaToilet, FaFireExtinguisher, FaSwimmingPool } from 'react-icons/fa';
import { BiBed, BiBath } from 'react-icons/bi';
import { MdOutlinePower, MdOutlineHotTub, MdSmokeFree, MdOutlineLocalLaundryService } from 'react-icons/md';

interface Props {
    selectedUser: UserProps | any;
}

const DashboardUnitDetails: React.FC<Props> = ({ selectedUser }) => {

    // console.log("DEBUG HERE =============", selectedUser.analysis)
    return (
        <div className="bg-white p-6 flex flex-col flex-1 ml-2 rounded-md">
            <div className="flex w-full h-56 flex-wrap flex-row">
                <div className="w-24 h-24 mr-3 mb-3 bg-gray-100 rounded-md cursor-pointer relative overflow-hidden">
                    <Image src={selectedUser.picture} alt="user picture" layout='fill' />
                </div>
                <div className="w-24 h-24 mr-3 mb-3 bg-gray-100 rounded-md cursor-pointer relative overflow-hidden">
                    <Image src={selectedUser.picture} alt="user picture" layout='fill' />
                </div>
                <div className="w-24 h-24 mr-3 mb-3 bg-gray-100 rounded-md cursor-pointer relative overflow-hidden">
                    <Image src={selectedUser.picture} alt="user picture" layout='fill' />
                </div>
                <div className="w-24 h-24 mr-3 mb-3 bg-gray-100 rounded-md cursor-pointer relative overflow-hidden">
                    <Image src={selectedUser.picture} alt="user picture" layout='fill' />
                </div>
                <div className="w-24 h-24 mr-3 mb-3 bg-gray-400 flex items-center justify-center rounded-md cursor-pointer relative overflow-hidden">
                        <h2 className="text-xs text-center text-white font-semibold">Add more photos</h2>
                </div> 

                <div className="flex flex-col py-3">
                        <div className="flex flex-row">
                            <h1 className="text-sm font-semibold">Status:</h1>
                            <h1 className="text-sm ml-2 text-red-600">Occupied</h1>
                        </div>
                        <div className="flex flex-row">
                            <h1 className="text-sm font-semibold">Tenant:</h1>
                            <h1 className="text-sm ml-2">Mugezi Kigozi</h1>
                        </div>
                        <div className="flex flex-row">
                            <h1 className="text-sm font-semibold">Rent:</h1>
                            <h1 className="text-sm ml-2 text-green-600">CLEARED</h1>
                        </div>
                    </div>
                <div className="w-full h-[0.5px] bg-gray-300" />
                
            </div>

            <div className="flex flex-1 flex-col mt-4">
                    <div className="flex flex-col flex-1 mb-4 flex-grow">
                        <div className="flex flex-row w-full">
                            <div className="p-4 mr-3 bg-gray-300 flex items-center justify-center rounded-md">
                                <GoLocation size={18} />
                            </div>
                            <h1 className="text-sm font-">10th Floor, Tower 1, Seawoods Grand Central
                                Sector 40, Seawoods Railway Station Nerul Node
                                Mumbai, MH 400706</h1>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 mb-4 flex-grow">
                        <div className="flex flex-row w-full">
                            <div className="p-4 mr-3 bg-gray-300 flex items-center justify-center rounded-md">
                                <FaRegMoneyBillAlt size={18} />
                            </div>
                            <h1 className="text-sm">UGX 150,000 / Per month</h1>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 mb-4 flex-grow">
                        <div className="flex flex-row w-full">
                            <div className="p-4 mr-3 bg-gray-300 flex items-center justify-center rounded-md">
                                <BiBed size={18} />
                            </div>
                            <h1 className="text-sm">3 bedrooms</h1>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 mb-4 flex-grow">
                        <div className="flex flex-row w-full">
                            <div className="p-4 mr-3 bg-gray-300 flex items-center justify-center rounded-md">
                                <FaToilet size={18} />
                            </div>
                            <h1 className="text-sm">Indoor toilet</h1>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 mb-4 flex-grow">
                        <div className="flex flex-row w-full">
                            <div className="p-4 mr-3 bg-gray-300 flex items-center justify-center rounded-md">
                                <BiBath size={18} />
                            </div>
                            <h1 className="text-sm">Bathroom toilet</h1>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 mb-4 flex-grow">
                        <div className="flex flex-row w-full">
                            <div className="p-4 mr-3 bg-gray-300 flex items-center justify-center rounded-md">
                                <MdOutlinePower size={18} />
                            </div>
                            <h1 className="text-sm">Yaka for electricity charges</h1>
                        </div>
                    </div>

                    <div className="w-full h-[0.5px] bg-gray-300" />

                    <h1 className="text-lg font-semibold my-5">Amenities</h1>

                    <div className="flex flex-col flex-1 mb-4 flex-grow">
                        <div className="flex flex-row w-full flex-wrap">
                            <div className="p-3 mr-5 bg-gray-300 flex items-center justify-center rounded-full">
                                <AiOutlineWifi size={28} />
                            </div>
                            <div className="p-3 mr-5 bg-gray-300 flex items-center justify-center rounded-full">
                                <MdOutlineHotTub size={30} />
                            </div>
                            <div className="p-3 mr-5 bg-gray-300 flex items-center justify-center rounded-full">
                                <RiArchiveDrawerLine size={30} />
                            </div>
                            <div className="p-3 mr-5 bg-gray-300 flex items-center justify-center rounded-full">
                                <FaFireExtinguisher size={30} />
                            </div>
                            <div className="p-3 mr-5 bg-gray-300 flex items-center justify-center rounded-full">
                                <MdSmokeFree size={30} />
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-[0.5px] bg-gray-300" />

                    <h1 className="text-lg font-semibold my-5">Tenant spaces</h1>

                    <div className="flex flex-col flex-1 mb-4 flex-grow">
                        <div className="flex flex-row w-full flex-wrap">
                            <div className="p-3 mr-5 bg-gray-300 flex items-center justify-center rounded-full">
                                <GiBrickWall size={28} />
                            </div>
                            <div className="p-3 mr-5 bg-gray-300 flex items-center justify-center rounded-full">
                                <RiParkingLine size={30} />
                            </div>
                            <div className="p-3 mr-5 bg-gray-300 flex items-center justify-center rounded-full">
                                <FaSwimmingPool size={30} />
                            </div>
                            <div className="p-3 mr-5 bg-gray-300 flex items-center justify-center rounded-full">
                                <MdOutlineLocalLaundryService size={30} />
                            </div>
                            <div className="p-3 mr-5 bg-gray-300 flex items-center justify-center rounded-full">
                                <CgGym size={30} />
                            </div>
                        </div>
                    </div>

                </div>
            

        </div>
    )
};

export default DashboardUnitDetails;