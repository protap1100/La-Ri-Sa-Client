import {} from "react-icons/bs";
import addImage from "../../assets/images/addpage.png";

const AddRooms = () => {
  return (
    <div>
      <div className="mt-5 container mx-auto">
        {/* <Helmet>
                <link rel="icon" type="image/svg+xml" href="/src/assets/icon/contact.png" />
                <title>Contact Us</title>
            </Helmet> */}
        <h1 className="text-center my-10 font-bold text-3xl text-red-600">
          Add Room
        </h1>
        <section className="py-6 mt-5 bg-gray-200 dark:text-gray-900 rounded-xl">
          <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
            <div className="py-6 md:py-0 md:px-6 flex items-center relative">
              <img className="rounded-xl" src={addImage} alt="" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white text-lg font-bold p-5 bg-gray-700 rounded">
                  Add Your Room Here
                </p>
              </div>
            </div>

            <form className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
              <label className="block">
                <span className="mb-1">Room Description</span>
                <input
                  type="text"
                  placeholder="Room Description"
                  className="block w-full h-10 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 bg-blue-100"
                />
              </label>
              <label className="block">
                <span className="mb-1">Price Per Night</span>
                <input
                  type="text"
                  placeholder="Price Per Night"
                  className="block h-10 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 bg-blue-100"
                />
              </label>
              <label className="block w-full px-2 lg:px-0 lg:w-1/2">
                <span className="mb-1">Availability</span>
                <select
                  name="availability"
                  className="block h-10 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 bg-blue-100"
                  required
                  defaultValue=""
                >
                  <option disabled value="">
                    Select Stock Status
                  </option>
                  <option value="available">Available</option>
                  <option value="notAvailable">Not Available</option>
                </select>
              </label>
              <label className="block">
                <span className="mb-1">Room Size</span>
                <input
                  type="text"
                  placeholder="Room Size"
                  className="block h-10 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 bg-blue-100"
                />
              </label>
              <label className="block">
                <span className="mb-1">Special Offer</span>
                <input
                  type="text"
                  placeholder="Special Offer"
                  className="block h-10 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 bg-blue-100"
                />
              </label>
              <button
                type="button"
                className="self-center w-full btn btn-primary border-btn-border hover:bg-btn-hover hover:border-btn-hover bg-btn"
              >
                Add Room
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AddRooms;
