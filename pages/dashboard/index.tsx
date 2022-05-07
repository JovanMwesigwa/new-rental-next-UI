import Link from "next/link";
import { useState } from "react";

import { AllTenants, CardComponent, CardItem, DashboardHeader, DashboardHome, DashboardUnits, LeftSideBar, TenantDetails } from "../../components";

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

    const renderTab = () => {
        switch (active) {
            case "home":
                return <DashboardHome 
                activateCard={activateCard} 
                activeCard={activeCard} 
                selectUser={selectUser} 
                selectedUser={selectedUser} 
                tenants={tenants} 
               />;
            case "units":
                return <DashboardUnits />;
            default:
                return <DashboardHome 
                activateCard={activateCard} 
                activeCard={activeCard} 
                selectUser={selectUser} 
                selectedUser={selectedUser} 
                tenants={tenants} 
               />;
        }
    }


    return (
            <div className="bg-gray-100 flex flex-1 relative">
                <LeftSideBar active={active} activatePage={activatePage} />
                {/* Left side Nav bar */}

                {renderTab()}
                
            </div>
    )
};

export default Dashboard;
