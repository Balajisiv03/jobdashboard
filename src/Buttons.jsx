import { useState } from "react";

const Buttons = () => {
  const [activeButton, setActiveButton] = useState("All Applications");

  const buttons = [
    "All Applications",
    "Invites",
    "Drafts",
    "Submitted",
    "Auditions",
    "Archived",
  ];

  const handleButtonClick = (label) => {
    setActiveButton(label);
  };

  return (
    <div>
      <div className="flex flex-wrap gap-6 justify-center mb-6">
        {buttons.map((label) => (
          <button
            key={label}
            className={`px-4 py-2 rounded transition duration-200 ${
              activeButton === label
                ? "bg-black text-white"
                : "bg-white text-gray-700 border border-gray-300"
            }`}
            onClick={() => handleButtonClick(label)}
          >
            {label}
          </button>
        ))}

        <div className="relative">
          <select className="px-4 py-2 rounded border border-gray-300 bg-white">
            <option value="Top Jobs">Top Jobs</option>
            <option value="Recent Jobs">Recent Jobs</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
