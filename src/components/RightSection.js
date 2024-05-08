import Cloud from "@/assets/Cloud";
import React, { useState } from "react";
import WeatherDayCard from "./WeatherDayCard";
import WeeklyCard from "./WeeklyCard";

const RightSection = ({ weekData, fullDayData }) => {
  return (
    <div className="xl:p-0 flex flex-col gap-8">
      <div>
        <h2 className="text-2xl font-bold mt-12 mb-8 xl:mt-0 xl:mb-6">
          Today's Highlights
        </h2>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 h-fit">
          {fullDayData?.map((item, index) => (
            <WeatherDayCard key={index} data={item} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold mt-12 mb-8 xl:mt-0 xl:mb-6">
          Week Highlights
        </h2>
        <div className="flex flex-col gap-4">
          {weekData?.map((item, index) => (
            <WeeklyCard key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSection;
