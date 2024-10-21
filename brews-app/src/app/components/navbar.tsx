import Link from "next/link";
import Image from "next/image";
import DarkModeToggle from "./dark-mode-toggle";

const Navbar = () => {
  return (
    <nav className='w-full bg-background dark:bg-background shadow-md p-4'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {" "}
          {/* Ensure items-center is here */}
          <div className='flex items-center p-2'>
            <Link href='/'>
              <Image
                className='h-16'
                src='/BrewsSmall.jpg'
                alt='Brews Logo'
                width={85}
                height={60}
              />
            </Link>
          </div>
          <div className='flex space-x-4 items-center'>
            <Link
              href='/about'
              className='text-foreground dark:text-foreground hover:text-gray-900 dark:hover:text-white'>
              About
            </Link>
            <Link
              href='/signup'
              className='text-foreground dark:text-foreground hover:text-gray-900 dark:hover:text-white'>
              Sign Up
            </Link>
            <Link
              href='/login'
              className='text-foreground dark:text-foreground hover:text-gray-900 dark:hover:text-white'>
              Login
            </Link>
          </div>
        </div>
      </div>
      <div>
        <DarkModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
