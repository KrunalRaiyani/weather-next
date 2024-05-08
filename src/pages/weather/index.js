import { ALL_DESCRIPTIONS } from "@/DateConstants";
import Footer from "@/components/Footer";
import LeftSection from "@/components/LeftSection";
import Navbar from "@/components/Navbar";
import RightSection from "@/components/RightSection";
import {
  getTodayForecastWeather,
  getWeekForecastWeather,
  transformDateFormat,
} from "@/utils";
import React from "react";
const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
const WEATHER_API_KEY = "28dada34bd59b34fc0e3e3522d5883fd";

const Index = ({ data, place }) => {
  console.log(data);
  const weekData = getWeekForecastWeather(data[1], ALL_DESCRIPTIONS);

  const fullDayData = getTodayForecastWeather(data[1]);
  console.log(fullDayData, "all_today_forecasts_list");
  return (
    <div>
      <Navbar />
      <div className="xl:flex max-w-screen-2xl mx-auto overflow-x-hidden gap-12 xl:gap-8 py-14 xl:px-14 lg:px-10 px-4 pt-10">
        {/* left section */}
        <LeftSection currentData={data[0]} place={place} />
        {/* right section */}
        <RightSection weekData={weekData} fullDayData={fullDayData} />
      </div>
      <Footer />
    </div>
  );
};

export default Index;

export async function getServerSideProps({ query }) {
  const place = query?.place || "";
  let weatherResponse;
  let forcastResponse;
  try {
    let [weatherPromise, forcastPromise] = await Promise.all([
      fetch(
        `${WEATHER_API_URL}/weather?q=${place}&appid=${WEATHER_API_KEY}&units=metric`
      ),
      fetch(
        `${WEATHER_API_URL}/forecast?q=${place}&appid=${WEATHER_API_KEY}&units=metric`
      ),
    ]);

    weatherResponse = await weatherPromise.json();
    forcastResponse = await forcastPromise.json();
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      data: [weatherResponse, forcastResponse],
      place: place,
    },
  };
}
