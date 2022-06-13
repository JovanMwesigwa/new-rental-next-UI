interface Props {
  item: any;
  onClick?: () => void;
  setSelectedUnit: (selectedUnit: any) => void;
}

const UnitCardComponent: React.FC<Props> = ({ item, setSelectedUnit }) => {
    const handleSelect = (selectedItem: any) => {
        setSelectedUnit(selectedItem);
    }
  return (
    <div
      onClick={() => handleSelect(item)}
      className={`flex flex-row  w-full h-28  p-3 cursor-pointer`}
    >
      <div className="flex flex-1">
        <div className="h-20 w-20 bg-gray-300 rounded-md relative overflow-hidden">
          {/* <Image src={item.picture} alt="user picture" layout='fill' /> */}
        </div>
        <div className="ml-3">
          <h2 className="text-sm font-semibold text-black">
            {item.title ? item.title : "Unit No"}
          </h2>
          <h2 className="text-xs font-semibold text-black">
            {item.tenant ? "Mugezi Kigozi" : "Vacant"}
          </h2>
          <h2 className="text-xs font-semibold text-gray-400">
            {item?.property_type}
          </h2>
          <h2 className="text-xs text-blue-700 font-medium">
            Location: {item?.address?.street}
          </h2>
        </div>
      </div>

      <div className="">
        {item.is_occupied ? (
          <button className="text-red-600 font-bold border-2 flex items-center flex-row border-red-600 text-xs px-4 py-2 rounded-md">
            <h1 className="">OCCUPIED</h1>
          </button>
        ) : (
          <button className="text-green-600 font-bold border-2 flex items-center flex-row border-green-600 text-xs px-4 py-2 rounded-md">
            <h1 className="">VACANT</h1>
          </button>
        )}
      </div>
    </div>
  );
};

export default UnitCardComponent;
