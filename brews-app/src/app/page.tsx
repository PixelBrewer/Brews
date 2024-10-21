"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "./components/navbar";

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [brews, setBrews] = useState<{ id: number; name: string }[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

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

  const handleSearch = () => {
    // Implement search logic here
    console.log("Searching for:", searchTerm);
    // Find the brew that matches the searchTerm
    const matchingBrew = brews.find(
      (brew) => brew.name.toLowerCase() === searchTerm.toLowerCase()
    );
    if (matchingBrew) {
      setBrews([matchingBrew]);
    } else {
      setBrews([]);
    }
  };

  return (
    <div className='bg-background text-foreground min-h-screen dark:bg-background dark:text-foreground'>
      {/* Navbar */}
      <div>
        <Navbar />
      </div>
      {/* Main Content */}
      <div className='flex flex-col items-center justify-center h-screen'>
        {/* Logo */}
        <div className='mb-8'>
          <Image
            src='/BrewsAILogo.png'
            alt='Brews Logo'
            width={200}
            height={100}
          />
        </div>

        {/* Search Bar */}
        <div className='w-full max-w-lg'>
          <input
            type='text'
            placeholder='Search for coffee brews...'
            className='w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-200 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Buttons */}
        <div className='mt-8 flex space-x-4'>
          <button
            className='bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white p-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500'
            onClick={handleSearch}>
            Search
          </button>
          <button className='bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white p-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500'>
            Surprise me!
          </button>
        </div>

        {/* Display Brews */}
        <div className='mt-8'>
          {brews.length > 0 ? (
            brews.map((brew) => <p key={brew.id}>{brew.name}</p>)
          ) : (
            <p>No brews found</p>
          )}
        </div>
      </div>
    </div>
  );
}
