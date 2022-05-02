import Link from "next/link";

const HostProperty: React.FC<any> = () => {
    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center">
            <h1 className="text-6xl text-black  font-bold w-1/3 tracking-wide">List & manage your tenants</h1>

            <h3 className="w-1/3 my-10 text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</h3>

        <Link href="/host/add">
            <div className="bg-gradient-to-r cursor-pointer from-rose-700 text-white rounded-md px-9 to-pink-600 p-4">Get Started</div>
        </Link>

        </div>
    )
};

export default HostProperty;