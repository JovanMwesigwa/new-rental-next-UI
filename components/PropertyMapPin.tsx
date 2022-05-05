import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { IoIosArrowBack } from 'react-icons/io'
import Link from "next/link";


interface Props {
    moveOn: any;
    routeName: string;
}


const Map = ReactMapboxGl({
    accessToken:
    'pk.eyJ1Ijoiam9veHZ5IiwiYSI6ImNrYTBjcHkzcTBmM3IzZnJ0M3B3enpwb20ifQ.ld6Rcnl2NHbxXUCg0nopbw',
  });

const PropertyMapPin: React.FC<Props> = ({ moveOn, routeName }) => {

    return (
        <div className='w-1/2'>
            <div className="py-10">
                <h1 className="text-xl w-2/3 tracking-wide text-black font-semibold">Is the pin showing the right place?</h1>
                <h3 className=" text-sm text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</h3>

            <div className="h-64 rounded-md overflow-hidden mt-5 w-full">
            <Map
                style="mapbox://styles/mapbox/streets-v9"
                containerStyle={{
                    height: '100vh',
                    width: '100vw'
                }}
                >
                <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                    <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
                </Layer>
            </Map>
                
            </div>
                

            </div>

            <div className="flex flex-1 w-full flex-row items-center justify-between">
                <Link href="/host">
                    <div className="flex flex-row items-center cursor-pointer">
                        <IoIosArrowBack size={20} />
                        <h2 className="text-lg mx-3">Back</h2>
                    </div>
                </Link>
                
                <div onClick={() => moveOn(routeName)} className="flex flex-row items-center cursor-pointer bg-black text-white px-5 py-2 rounded-md">
                    <h2 className="text-lg mx-3">Next</h2>
                </div>
                        
            </div>
        </div>
    )
};

export default PropertyMapPin;