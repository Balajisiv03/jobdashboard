import { useState } from "react";
import photo from "../src/assets/anjalisingh.jpeg";
import { Icon } from "@iconify/react";

const Rightsidebar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const auditions = [
    { date: "3", day: "Sun" },
    { date: "4", day: "Mon" },
    { date: "5", day: "Tue" },
    { date: "6", day: "Wed" },
    { date: "7", day: "Thu" },
  ];

  return (
    <div>
      <div className="space-y-6">
        <div
          className="bg-white mt-1 rounded shadow-md relative"
          style={{
            backgroundImage: `url(${photo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "180px",
          }}
        >
          <div className="absolute bottom-0 w-full bg-white bg-opacity-60 p-3 flex justify-between items-center pr-6">
            <div className="mr-12">
              {" "}
              <h4 className="text-md font-semibold text-black">Anjali Singh</h4>
              <p className="text-blue-600 text-sm font-bold">Actor | Singer</p>
            </div>
            <button className="text-white font-semibold bg-blue-400 rounded-[20px] p-2">
              <Icon icon="mdi:pencil" width={24} height={24} />{" "}
            </button>
          </div>
        </div>

        {/* Auditions List */}
        <div className="bg-white p-2 rounded shadow-md">
          <div className="flex justify-between items-center">
            <h3 className="text-gray-800 text-lg font-semibold">Auditions</h3>
            <div className="flex space-x-4">
              <button className="font-semibold">{"<"}</button>
              <button className="font-semibold">{">"}</button>
            </div>
          </div>
          <div className="mt-2 flex space-x-4">
            {auditions.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedDate(index)}
                className={`px-6 py-2 rounded ${
                  selectedDate === index
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                <div className="flex flex-col items-center">
                  <span className="font-bold">{item.date}</span>
                  <span className="text-sm">{item.day}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white p-1 rounded shadow-md">
          <div className="flex items-center justify-between">
            <Icon icon="mdi:account" width={48} height={48} />
            <div className="flex-1 ml-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Co-actor</span>
                <span className="text-gray-600 px-2 bg-green-300 rounded-[10px]">
                  17:00-18:00
                </span>
              </div>
              <span className="text-blue-600">Location: Mumbai</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-1 rounded shadow-md">
          <div className="flex items-center justify-between">
            <Icon icon="mdi:account" width={48} height={48} />
            <div className="flex-1 ml-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Co-actor</span>
                <span className="text-gray-600 px-2 hover:bg-green-300 rounded-[10px]">
                  10:00-11:00
                </span>
              </div>
              <span className="text-blue-600">Location: Mumbai</span>
            </div>
          </div>
        </div>

        <h3 className="text-gray-800 text-sm font-semibold text-center">
          Tomorrow
        </h3>

        <div className="bg-white p-1 rounded shadow-md">
          <div className="flex items-center justify-between">
            <Icon icon="mdi:account" width={48} height={48} />
            <div className="flex-1 ml-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Co-actor</span>
                <span className="text-gray-600 px-2 hover:bg-green-300 rounded-[10px]">
                  18:00-19:00
                </span>
              </div>
              <span className="text-blue-600">Location: Mumbai</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightsidebar;
