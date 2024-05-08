import Cloud from "@/assets/Cloud";
import { getDayNameFromDate } from "@/utils";
import React from "react";

const WeatherDayCard = ({ data }) => {
  return (
    <>
      <div className="flex flex-col h-fit cursor-pointer bg-white shadow-lg py-6 px-9 rounded-lg justify-center items-center transition-all hover:-translate-y-4 gap-1">
        <div className="text-lg font-medium" data-id="32">
          {data?.time}
        </div>
        <img
          src={`/icons/${data?.icon}.png`}
          className="w-20 invert"
          alt="weather icon"
        />
        <div data-id="34">
          <span className="font-medium" data-id="35">
            {data?.temperature}
          </span>
        </div>
      </div>
    </>
  );
};

export default WeatherDayCard;
