

const PropertyTypeSection: React.FC<any> = () => {
    return (
        <div>
            <div className="py-10">
                <h1 className="text-xl tracking-wide text-black font-semibold">What kind of property are you listing?</h1>

            <div className="flex flex-col my-4">
                <label className="text-base my-2 text-gray-700 mt-4">Choose a property type</label>
                <select className="p-3 border-2 rounded-md outline-none" placeholder="Select one" name="property type" id="property">
                    <option value="rentals">Rentals</option>
                    <option value="apartments">Apartments</option>
                    <option value="hostels">Hostels</option>
                    <option value="rooms">Rooms</option>
                </select>
            </div>
                

            </div>
        </div>
    )
};

export default PropertyTypeSection;