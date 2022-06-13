import Image from "next/image";

const LoadingImagesComponent: React.FC<any> = () => {
  return (
    <div className="flex flex-row w-1/2 h-full bg-gray-200">
      <div className="flex flex-col w-full h-full bg-gray-100 cursor-pointer hover:bg-gray-50 relative overflow-hidden rounded-sm">
        {/* big left image */}
        {/* <Image src="/assets/images/home1.jpg" layout="fill" /> */}
      </div>
      <div className="flex flex-col w-36 border-l-4  border-white h-full bg-gray-200">
        {/* narrow right container */}
        <div className="flex flex-row justify-between w-full h-full rounded-sm bg-gray-100 cursor-pointer overflow-hidden relative hover:bg-gray-50 border-b-4 border-white">
          {/* <Image src="/assets/images/home2.jpg" layout="fill" /> */}
        </div>
        <div className="flex flex-row justify-between w-full h-full rounded-sm bg-gray-100 cursor-pointer overflow-hidden relative hover:bg-gray-50 border-b-4 border-white">
          {/* <Image src="/assets/images/home3.jpg" layout="fill" /> */}
        </div>
        <div className="flex flex-row justify-between w-full h-full rounded-sm bg-gray-100 cursor-pointer overflow-hidden relative hover:bg-gray-50 border-b-4 border-white">
          {/* <Image src="/assets/images/hostel2.jpg" layout="fill" /> */}
        </div>
        <div className="flex flex-row justify-between w-full h-full rounded-sm bg-gray-100 cursor-pointer overflow-hidden relative hover:bg-gray-50">
          {/* <Image src="/assets/images/hostel1.jpg" layout="fill" /> */}
        </div>
      </div>
    </div>
  );
};

export default LoadingImagesComponent;
