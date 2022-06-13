// import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "mapbox-gl/dist/mapbox-gl.css";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

interface Props {
  moveOn: any;
  routeName: string;
}

// const Map = ReactMapboxGl({
//     accessToken:
//     'pk.eyJ1Ijoiam9veHZ5IiwiYSI6ImNrYTBjcHkzcTBmM3IzZnJ0M3B3enpwb20ifQ.ld6Rcnl2NHbxXUCg0nopbw',
//   });

const PropertyMapPin: React.FC<Props> = ({ moveOn, routeName }) => {
  return (
    <div className="w-1/2">
      <div className="py-10">
        <h1 className="text-xl w-2/3 tracking-wide text-black font-semibold">
          Is the pin showing the right place?
        </h1>
        <h3 className=" text-sm text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s
        </h3>

        <div className="h-64 rounded-md overflow-hidden mt-5 w-full">
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      <div className="flex flex-1 w-full flex-row items-center justify-between">
        <Link href="/host">
          <div className="flex flex-row items-center cursor-pointer">
            <IoIosArrowBack size={20} />
            <h2 className="text-lg mx-3">Back</h2>
          </div>
        </Link>

        <div
          onClick={() => moveOn(routeName)}
          className="flex flex-row items-center cursor-pointer bg-black text-white px-5 py-2 rounded-md"
        >
          <h2 className="text-lg mx-3">Next</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyMapPin;
