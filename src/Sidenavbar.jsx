import { useState } from "react";
import { Icon } from "@iconify/react";

const Sidenavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div>
      {/* for mobile ttoggle button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-20 bg-blue-500 text-white p-3 rounded-full shadow-md"
        onClick={toggleSidebar}
      >
        <Icon icon="mdi:menu" width={24} />
      </button>

      <aside
        className={`fixed top-0 left-0 h-full z-10 bg-white shadow-md flex flex-col space-y-3 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 w-16 md:w:12 lg:w-16`}
      >
        <div className="items-center justify-center space-x-4 py-4 hidden lg:flex">
          <Icon
            icon="mdi:briefcase-search"
            width={30}
            className="text-blue-700 lg:scale-125"
          />
        </div>

        <nav className="flex flex-col space-y-4">
          {[
            { name: "home", icon: "mdi:home" },
            { name: "profile", icon: "mdi:account" },
            { name: "messages", icon: "mdi:message" },
            { name: "contact", icon: "mdi:phone" },
            { name: "notifications", icon: "mdi:bell" },
            { name: "settings", icon: "mdi:cog" },
          ].map((item) => (
            <button
              key={item.name}
              className={`flex items-center justify-center text-gray-700 p-4 w-full text-xl rounded-lg ${
                activeButton === item.name
                  ? "bg-blue-500 text-white"
                  : "bg-white"
              }`}
              onClick={() => handleButtonClick(item.name)}
            >
              <Icon icon={item.icon} width={20} />
            </button>
          ))}
        </nav>
      </aside>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-5 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidenavbar;
