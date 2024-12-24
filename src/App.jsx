import { Icon } from "@iconify/react";
import Sidenavbar from "./Sidenavbar.jsx";
import Applications from "./Applications.jsx";
import Rightsidebar from "./Rightsidebar.jsx";
import Buttons from "./Buttons.jsx";
import Pagination from "./Pagination.jsx";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-50 ml-20">
      <Sidenavbar />

      <main className="flex-1 p-4">
        <header className="bg-white shadow-md sticky top-0 z-10">
          <div className="flex flex-wrap items-center justify-between px-4 py-2 md:px-6 md:py-3">
            <p className="text-sm md:text-base font-semibold">
              Artist / Dashboard
            </p>
            <div className="flex-grow md:w-auto mt-2 mx-2 md:mt-0 relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-5 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm md:text-base"
              />
              <Icon
                icon="mdi:magnify"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              />
            </div>

            <div className="flex items-center space-x-2 md:space-x-4 mt-2 md:mt-0 w-full md:w-auto justify-between">
              <label
                htmlFor="file-upload"
                className="bg-blue-500 text-white px-3 py-1 md:px-4 md:py-2 rounded hover:bg-blue-600 text-sm md:text-base cursor-pointer"
              >
                Upload
                <input id="file-upload" type="file" className="hidden" />
              </label>
              <button className="bg-yellow-500 text-white px-3 py-1 md:px-4 md:py-2 rounded hover:bg-yellow-600 text-sm md:text-base">
                Get Pro
              </button>
              <Icon
                icon="mdi:bell-outline"
                className="text-xl md:text-2xl text-gray-600 cursor-pointer"
              />
              <Icon
                icon="mdi:menu"
                className="text-xl md:text-2xl text-gray-600 cursor-pointer hidden lg:flex"
              />
            </div>
          </div>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-4 md:space-y-6">
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white p-6 rounded shadow-md">
                <h3 className="text-gray-800 text-lg font-semibold">
                  Your Profile Score
                </h3>
                <div className="flex flex-col items-center mt-4">
                  <div className="relative">
                    <div className="w-40 h-20 bg-gradient-to-r from-orange-800 via-yellow-400 to-green-500 rounded-t-full relative">
                      <div className="absolute inset-0 bg-white w-36 h-18 rounded-t-full top-2 left-2"></div>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center top-10">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-blue-600">
                          412
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600 text-center text-lg font-bold">
                    Each skill contributes to the score.
                  </p>
                  <p className="text-gray-600 text-xm">
                    {" "}
                    Add more skills to boost your profile score
                  </p>
                  <button className="mt-4 bg-blue-500 text-white px-28 py-2 hover:bg-blue-600 rounded-[20px]">
                    Add Skills
                  </button>
                </div>
              </div>

              <div className="bg-white p-4 md:p-6 rounded shadow-md">
                <h3 className="text-gray-800 text-base md:text-lg font-semibold mb-4">
                  Applications Overview
                </h3>
                <div className="flex justify-between space-x-2 md:space-x-4">
                  <div className="text-center bg-blue-100 p-3 md:p-4 border border-blue-300 rounded-[10px]">
                    <div className="text-xl md:text-2xl font-bold text-blue-600">
                      12
                    </div>
                    <p className="text-gray-600 text-sm md:text-base">
                      Application Invites
                    </p>
                  </div>
                  <div className="text-center bg-blue-100 p-3 md:p-4 border border-blue-300 rounded-[10px]">
                    <div className="text-xl md:text-2xl font-bold text-blue-600">
                      23
                    </div>
                    <p className="text-gray-600 text-sm md:text-base">
                      Audition Requests
                    </p>
                  </div>
                </div>
                <div className="mt-4 text-center bg-blue-100 p-4 md:p-6 rounded border border-blue-500 w-full">
                  <div className="text-xl md:text-2xl font-bold text-blue-600">
                    406
                  </div>
                  <p className="text-gray-600 text-sm md:text-base">
                    New Roles Matched
                  </p>
                </div>
              </div>
            </section>

            <Buttons />
            <Applications />
          </div>
          <Rightsidebar />
        </div>
        <Pagination />
      </main>
    </div>
  );
};

export default App;
