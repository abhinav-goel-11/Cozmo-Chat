import React, { useState, useRef, ReactElement } from "react";
import indiaFlag from "../assets/images/india.svg";
import usFlag from "../assets/images/us.svg";
import dropArrow from "../assets/images/dropArrow.svg";
import backArrow from "../assets/images/backArrow.svg";
import Image from "next/image";

interface Option {
  value: string;
  text: string;
  image: string;
}

interface CustomDropdownProps {
  options: Option[];
  selectedOption: Option;
  onSelect: (option: Option) => void;
}

function CustomDropdown({
  options,
  selectedOption,
  onSelect,
}: CustomDropdownProps): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: Option, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event propagation
    onSelect(option);
    setIsOpen(false);
  };

  const handleArrowClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the modal from closing
    toggleDropdown(); // Toggle the dropdown when clicking the arrow
  };

  const handleClickOutside = (e: React.MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  return (
    <div className="relative" onClick={handleClickOutside}>
      <div
        className="bg-transparent text-white pl-4 pr-2 py-2 rounded-xl cursor-pointer flex items-center font-normal text-base"
        onClick={toggleDropdown}
      >
        <img
          src={selectedOption.image}
          className="h-6 w-6 mr-2"
          alt={selectedOption.text}
        />
        <span className="white">{selectedOption.value}</span>
        <span
          className="ml-2 cursor-pointer text-sm"
          onClick={handleArrowClick}
        >
          <Image src={dropArrow} alt="back" />
        </span>
      </div>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute mt-4 w-36 border border-gray-300 rounded-lg shadow-lg font-normal text-base"
          style={{
            borderRadius: "0.75rem",
            border: "1px solid rgba(250, 250, 250, 0.12)",
            background: "linear-gradient(180deg, #3E2627 0%, #13151F 189.89%)",
            boxShadow: "0px 8px 30px 0px rgba(0, 0, 0, 0.24)",
            width: "14rem",
            padding: "10px",
          }}
        >
          <div className="text-15 text-white px-4 text-left">
            Select a country
          </div>
          {options.map((option) => (
            <div
              key={option.value}
              className="px-4 pb-2 mt-6 hover:bg-gray-100 cursor-pointer"
              onClick={(e) => handleOptionClick(option, e)} // Pass the event
            >
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center">
                  <img
                    src={option.image}
                    className="h-6 w-6 mr-2"
                    alt={option.text}
                  />
                  <span>{option.text}</span>
                </div>
                <span className="ml-2 text-right">{option.value}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default CustomDropdown;
