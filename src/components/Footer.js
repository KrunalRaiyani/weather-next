import Link from "next/link";
import React from "react";

const popularCities = [
  { name: "New York", query: "New%20York" },
  { name: "London", query: "London" },
  { name: "Tokyo", query: "Tokyo" },
  { name: "Paris", query: "Paris" },
];

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          {popularCities.map((city, index) => (
            <Link
              key={index}
              href={`/weather?place=${city.query}`}
              className="mr-4 mb-2 cursor-pointer hover:text-yellow-500"
            >
              {city.name}
            </Link>
          ))}
        </div>
        <p className="text-center mt-4">&copy; 2024 Weather App</p>
      </div>
    </footer>
  );
}

export default Footer;
