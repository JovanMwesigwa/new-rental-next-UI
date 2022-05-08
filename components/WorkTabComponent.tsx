const WorkTabComponent: React.FC<any> = () => {
  return (
    <div className="w-full flex flex-col p-8 h-60 my-10">
      <h1 className="text-lg font-semibold mb-5">
        All the heckic landlord's work done for you
      </h1>
      <div className="flex flex-1 flex-row">
        <div className="flex-1 flex-row border-[1px] border-gray-300 rounded-md mr-4 flex p-3">
          <div className="h-24 w-24 bg-orange-500 rounded-md"></div>
          <div className="flex flex-1 flex-col pl-2">
            <h1 className="font-normal text-sm">Alert Reminders</h1>
            <p className="font-light text-xs text-gray-600">
              Send rent reminder alerts to your tenents
            </p>
          </div>
        </div>
        <div className="flex-1 flex-row border-[1px] border-gray-300 rounded-md mr-4 flex p-3">
          <div className="h-24 w-24 bg-orange-500 rounded-md"></div>
          <div className="flex flex-1 flex-col pl-2">
            <h1 className="font-normal text-sm">Reciept management</h1>
            <p className="font-light text-xs text-gray-600">
              Creating reciepts and payment records for all your clients
            </p>
          </div>
        </div>
        <div className="flex-1 flex-row border-[1px] border-gray-300 rounded-md mr-4 flex p-3">
          <div className="h-24 w-24 bg-orange-500 rounded-md"></div>
          <div className="flex flex-1 flex-col pl-2">
            <h1 className="font-normal text-sm">Tenant Info desk</h1>
            <p className="font-light text-xs text-gray-600">
              Manage and know all your tenant info through their records and
              info
            </p>
          </div>
        </div>
        <div className="flex-1 flex-row border-[1px] border-gray-300 rounded-md flex p-3">
          <div className="h-24 w-24 bg-orange-500 rounded-md"></div>
          <div className="flex flex-1 flex-col pl-2">
            <h1 className="font-normal text-sm">Billing and collections</h1>
            <p className="font-light text-xs text-gray-600">
              Customise and set billing prices for your specific tenants
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkTabComponent;
