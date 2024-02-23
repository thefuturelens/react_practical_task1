"use client";
import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className="mb-4">
          <button
            className={`outline-none w-full p-4 bg-gray-200 text-left flex justify-between items-center ${
              activeIndex === index ? "rounded-t-lg" : " rounded-lg"
            }`}
            onClick={() => handleClick(index)}
          >
            <span>{item.title}</span>
            <svg
              className={`h-6 w-6 duration-300  transition-all ${
                activeIndex === index
                  ? "transform hue-rotate-60"
                  : "transform rotate-0"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={activeIndex === index ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
              />
            </svg>
          </button>
          <div
            className={`bg-gray-100  transition duration-300 ease-in-out  overflow-hidden ${
              activeIndex === index ? "rounded-b-lg" : "max-h-0"
            }`}
          >
            <div className="p-4"> {item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
