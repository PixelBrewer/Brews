import Link from "next/link";
import DarkModeToggle from "./dark-mode-toggle";

const Navbar = () => {
  return (
    <nav className='w-full bg-background dark:bg-background shadow-md'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex-shrink-0'>
            <DarkModeToggle />
            <Link href='/'>
              {/* <img
                className='h-10'
                src='/logo.png'
                alt='Coffee Brew'
              /> */}
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
    </nav>
  );
};

export default Navbar;
