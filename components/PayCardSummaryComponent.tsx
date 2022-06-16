import { AiTwotoneDollar } from "react-icons/ai";
import { FaRegBuilding } from "react-icons/fa";

interface Props {
  property: any;
}

const PayCardSummaryComponent: React.FC<Props> = ({ property }) => {
  return (
    <div className="hidden lg:flex flex-col w-1/2 h-full ml-4 shadow-sm">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold ">
          UGX {property.charge_per_month.toLocaleString()}
        </h1>
        <p className="text-sm text-gray-500">paid per month</p>
      </div>
      <div className="flex flex-row items-center justify-between border-[0.8px] border-gray-300 p-2 my-5 shadow-md rounded-sm w-full">
        <div className="flex flex-row items-center mx-2">
          <FaRegBuilding />
          <h1 className="px-2">{property.property_type}</h1>
        </div>
      </div>
      <div className="bg-gray-200 my-4 h-[0.5px] w-full" />

      <div className="flex flex-row items-center mx-2">
        <div className="flex flex-row items-center">
          <AiTwotoneDollar color="#f6a10d" size={22} />
          <h1 className="text-lg mx-3 font-light ">Find Omie coupons</h1>
        </div>
      </div>

      <div className="bg-gray-200 my-4 h-[0.5px] w-full" />

      <div className="flex flex-row my-8 items-center justify-between w-full">
        <h1 className="text-base">You save</h1>
        <h1 className="text-base font-bold ">UGX 50,000</h1>
      </div>
      <div className="flex flex-row items-center justify-between w-full">
        <h1 className="text-base">Total price</h1>
        <h1 className="text-base font-bold ">UGX 200,000</h1>
      </div>

      <button className="bg-green-600 my-8 text-white py-4 px-4 rounded-sm">
        Continue to book
      </button>
    </div>
  );
};

export default PayCardSummaryComponent;
