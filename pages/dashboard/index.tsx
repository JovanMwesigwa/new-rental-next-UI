import Link from "next/link";
import { useState } from "react";
import { BsPlusLg } from 'react-icons/bs'

import { AllTenants, CardComponent, CardItem, DashboardHeader, LeftSideBar, TenantDetails } from "../../components";

import tenants from '../../data/users'
import { UserProps } from "../../types";

const Dashboard: React.FC<any> = () => {
    const [ active, setActive ] = useState<string>("home");
    const [ activeCard, setActiveCard ] = useState<string | null>("rent");

    const [ selectedUser, setSelectedUser ] = useState<UserProps | any>(tenants[0]);

    // const [ selectedUserID, setSelectedUserID ] = useState<string | number | null>(1);

    const activatePage = (name: string) => {
        setActive(name);
    }

    const activateCard = (name: string) => {
        setActiveCard(name);
    }


    const selectUser = (user: UserProps) => {
        setSelectedUser(user);
    } 


    return (
            <div className="bg-gray-100 flex flex-1 relative">
                <LeftSideBar active={active} activatePage={activatePage} />
                {/* Left side Nav bar */}


                <div className="flex flex-1 flex-col p-5 ml-20">
                    {/* Top header */}
                    <div className="flex flex-row items-center justify-between mb-4">

                        <Link href="/host">
                            <div className="p-2 bg-black flex px-3 flex-row items-center rounded-md border-2 cursor-pointer">
                                <BsPlusLg color="#f9f6f6" />
                                <h1 className="text-white font-medium text-sm ml-3">ADD HOME</h1>
                            </div>
                        </Link>
                         

                        <div className="flex flex-row items-center">
                            <h3 className="mr-4">Sekkamatte John</h3>
                            <div className="h-10 w-10 rounded-full bg-gray-400">

                            </div>
                        </div>
                    </div>
                    
                    <h1 className="text-black font-medium mt-4">DASHBOARD</h1>

                    <CardComponent activeCard={activeCard} activateCard={activateCard} />

                    <div className="flex flex-1 flex-row my-3">
                        {/* All tenants left */}
                        <AllTenants selectedUser={selectedUser} selectUser={selectUser} tenants={tenants} />
                        {/* Tenant info */}
                        <TenantDetails selectedUser={selectedUser} />
                    </div>

                </div>
                
            </div>
    )
};

export default Dashboard;
