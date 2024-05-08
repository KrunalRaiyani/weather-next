import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function Navbar() {
  const router = useRouter();
  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const url = `https://nominatim.openstreetmap.org/reverse?lat=${pos?.coords?.latitude}&lon=${pos?.coords?.longitude}&format=json`;

        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            const address = data?.address?.city;
            console.log(data);
            router.push(`/weather?place=${address}`);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
        // console.log(pos);
      },
      (err) => {
        console.log(err);
      }
    );
  };
  return (
    <nav className="bg-gray-800 text-gray-300 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div>
          <Link href="/" className="text-xl font-bold">
            Weather App
          </Link>
        </div>
        <div>
          {/* <ul className="flex space-x-4">
            <li>
              <Link
                href="/"
                className="hover:text-yellow-500 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/weather?place=New%20York"
                className="hover:text-yellow-500 transition duration-300"
              >
                Weather
              </Link>
            </li>
          </ul> */}
          <button
            onClick={handleLocation}
            className="bg-white text-black p-2 px-4 rounded"
          >
            Current Location
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
