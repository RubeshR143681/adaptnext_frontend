import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";

import dashboardicon from "../images/bar-chart.png";
import inventoryicon from "../images/inventory-management.png";
import ordericon from "../images/received.png";
import returnicon from "../images/return.png";
import customericon from "../images/customer-review.png";
import shippingicon from "../images/delivery-truck.png";
import channelicon from "../images/notification.png";
import integrationicon from "../images/data-integration.png";
import calculatoricon from "../images/calculator.png";
import reporticon from "../images/investment.png";
import account from "../images/cogwheel.png";

const Menus = [
  { title: "Dashboard", src: "/", icon: dashboardicon },
  { title: "Inventory", src: "/inventory", icon: inventoryicon },
  { title: "Order", src: "/order", icon: ordericon },
  { title: "Returns", src: "/returns", icon: returnicon },
  { title: "Customers", src: "/customers", icon: customericon },
  { title: "Shipping", src: "/shipping", icon: shippingicon },
  { title: "Channel", src: "/channel", icon: channelicon },
  { title: "Integrations", src: "/integration", icon: integrationicon },
  {
    title: "Calculators",
    icon: calculatoricon,
    subMenus: [
      { title: "Submenu 1", src: "/submenu" },
      { title: "Submenu 2", src: "/submenu" },
      { title: "Submenu 3", src: "/submenu" },
    ],
    isOpen: false,
  },
  {
    title: "Reports",
    icon: reporticon,
    subMenus: [
      { title: "Submenu 1", src: "/submenu" },
      { title: "Submenu 2", src: "/submenu" },
      { title: "Submenu 3", src: "/submenu" },
    ],
    isOpen: false,
  },
  {
    title: "Account",
    icon: account,
    subMenus: [
      { title: "Profile", src: "/submenu" },
      { title: "Settings", src: "/submenu" },
      { title: "Log Out", src: "/submenu" },
    ],
    isOpen: false,
  },
];

const App = () => {
  const [menu, setMenu] = useState(Menus);
  const [open, setOpen] = useState(true);
  const { pathname: currentPath } = useLocation();

  const setSubMenuOpen = (index) => {
    setMenu((prevMenus) =>
      prevMenus.map((menu, i) => {
        if (i === index) {
          return { ...menu, isOpen: !menu.isOpen };
        }
        return menu;
      })
    );
  };

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <div
        className={`relative ${
          open ? "w-48 lg:w-72" : "w-16"
        } bg-white h-screen transition-all duration-300 ease-in-out overflow-auto`}
      >
        {/* Toggle Button */}
        <button
          className="absolute lg:hidden top-2 right-2 bg-white hover:border-1-[#be99f0] w-6 h-6 bg-[#be99f0] rounded-full shadow-lg flex justify-center items-center text-gray-600 hover:bg-[#FAF0FF] hover:text-[#A878EA] duration-300"
          onClick={toggleSidebar}
        >
          {/* Dynamic Arrow Icon */}
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-4 h-4 text-white hover:text-[#be99f0]"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M10.354 12.354a.5.5 0 0 0 0-.708L7.707 9H14.5a.5.5 0 0 0 0-1H7.707l2.647-2.646a.5.5 0 0 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-4 h-4"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M5.646 3.646a.5.5 0 0 1 0 .708L3 7h6.5a.5.5 0 0 1 0 1H3l2.646 2.646a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0z"
              />
            </svg>
          )}
        </button>

        <ul className="pt-10">
          {menu.map((menuItem, index) => (
            <React.Fragment key={menuItem.src}>
              <Link to={menuItem.src}>
                <li
                  onClick={() => setSubMenuOpen(index)}
                  className={`flex items-center rounded-md p-3 m-1 cursor-pointer hover:bg-[#FAF0FF] hover:text-[#A878EA] text-gray-600 text-sm gap-x-4 ${
                    menuItem.src === currentPath
                      ? "bg-[#FAF0FF] text-[#A878EA]"
                      : ""
                  }`}
                >
                  {/* Icon */}
                  <img
                    src={menuItem.icon}
                    alt={`${menuItem.title} icon`}
                    className={`w-6 h-6 transition-transform duration-300 ${
                      !open ? "mx-auto" : ""
                    }`}
                  />

                  {/* Menu Title */}
                  {open && <span className="flex-1">{menuItem.title}</span>}

                  {/* Submenu Icon */}
                  {menuItem.subMenus && (
                    <BsChevronDown
                      className={`${
                        menuItem.isOpen && open ? "rotate-180" : ""
                      } transition-transform duration-300`}
                    />
                  )}
                </li>
              </Link>

              {/* Submenus */}
              {menuItem.subMenus && menuItem.isOpen && open && (
                <ul>
                  {menuItem.subMenus.map((subMenuItem) => (
                    <Link to={subMenuItem.src} key={subMenuItem.src}>
                      <li
                        className={`flex items-center rounded-md p-3 m-1 cursor-pointer hover:bg-[#FAF0FF] hover:text-[#A878EA] text-gray-600 text-sm gap-x-4`}
                      >
                        {subMenuItem.title}
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
