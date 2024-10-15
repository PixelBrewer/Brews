"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/navbar";

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [brews, setBrews] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    const fetchBrews = async () => {
      try {
        const response = await fetch("/api/brews");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const brewsData = await response.json();
        setBrews(brewsData);
      } catch (error) {
        console.error("Error fetching brews:", error);
      }
    };

    fetchBrews();
  }, []);

  return (
    <div className='bg-background text-foreground min-h-screen dark:bg-background dark:text-foreground'>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className='flex flex-col items-center justify-center h-screen'>
        {/* Logo */}
        <div className='mb-8'>
          {/* <Image
            src='/logo.png'
            alt='Coffee Brew Logo'
            width={200}
            height={100}
          /> */}
        </div>

        {/* Search Bar */}
        <div className='w-full max-w-lg'>
          <input
            type='text'
            placeholder='Search for coffee brews...'
            className='w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-200 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400'
          />
        </div>

        {/* Buttons */}
        <div className='mt-8 flex space-x-4'>
          <button className='bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white p-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500'>
            Search
          </button>
          <button className='bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white p-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500'>
            Surprise me!
          </button>
        </div>
      </div>
    </div>
  );
}
