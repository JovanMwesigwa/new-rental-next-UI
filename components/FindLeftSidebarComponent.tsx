import { AiOutlinePlus } from "react-icons/ai";

interface Props {
  priceValue: any;
  setPriceValue: (value: number) => void;
}

const FindLeftSidebarComponent: React.FC<Props> = ({
  priceValue,
  setPriceValue,
}) => {
  return (
    <div className=" hidden lg:flex flex-col h-full w-1/4 p-8 border-r-[0.4px] border-gray-200 fixed top-24 left-0 z-10 bg-white">
      <h1 className="text-3xl font-bold leading-9 text-[#3f3e3e]">Filters</h1>
      <h3 className="text-base font-bold text-[#3f3e3e]">
        Popular locations in kampala
      </h3>
      <div className="flex flex-col">
        <input
          className="w-full h-10 px-4 my-8 bg-gray-200 rounded-sm outline-none"
          type="text"
          placeholder="Search"
        />
        <div className="flex flex-row flex-wrap ">
          <p className="p-2 bg-gray-200 mr-3 mb-3 text-sm cursor-pointer">
            Kireka
          </p>
          <p className="p-2 bg-gray-200 mr-3 mb-3 text-sm cursor-pointer">
            Kampala
          </p>
          <p className="p-2 bg-gray-200 mr-3 mb-3 text-sm cursor-pointer">
            Kawempe
          </p>
          <p className="p-2 bg-gray-200 mr-3 mb-3 text-sm cursor-pointer">
            Kiboga
          </p>
          <p className="p-2 bg-gray-200 mr-3 mb-3 text-sm cursor-pointer">
            Bweyogere
          </p>
          <p className="p-2 bg-gray-200 mr-3 mb-3 text-sm cursor-pointer">
            Ntinda - Kisaasi
          </p>
          <p className="p-2 bg-gray-200 mr-3 mb-3 text-sm cursor-pointer">
            Mpereelwe
          </p>
        </div>

        <div className="flex flex-row items-center mt-2 cursor-pointer">
          <AiOutlinePlus size={20} className="text-red-600 mr-2" />
          <h1 className="text-red-600 ">View more</h1>
        </div>

        <div className="flex flex-col py-3 mt-6 border-t-[0.4px] border-gray-200 border-b-[0.4px] ">
          <h1 className="text-lg font-bold leading-9 text-[#3f3e3e]">
            Price range
          </h1>
          <>
            {/* create an input range slider */}
            <input
              type="range"
              min="50000"
              max="1200000"
              value={priceValue}
              className="bg-red-500 p-2"
              onChange={(e: any) => setPriceValue(e.target.value)}
              id="myRange"
            />
            <p className="text-sm font-bold leading-9 text-[#3f3e3e]">
              UGX {parseInt(priceValue).toLocaleString()}
            </p>
          </>
        </div>
      </div>
    </div>
  );
};

export default FindLeftSidebarComponent;
