"use client";

import Navbar from "../components/navbar";

export default function About() {
  return (
    <div className='bg-background text-foreground min-h-screen dark:bg-background dark:text-foreground'>
      <div>
        <Navbar />
        <div>
          <h1 className='text-4xl text-center p-24 m-4'>
            <strong>About Page</strong>
          </h1>
        </div>
        <div className='flex justify-center'>
          <p className='text-2xl p-4 m-2 max-w-2xl text-justify'>
            Have you ever been in a situation where you buy some coffee beans
            from a local shop to try. You take them home, make your favorite
            kind of coffee, then you realize that the coffee is one of your
            favorites. You want to record this type of bean, the roast, and
            where you bought these beans just in case you want to return to
            somthing familiar and lovely. But writing that down on a piece of
            paper seems a bit archaic. Well, you are in luck! Taht is where
            Brews comes in. This app is aimed at helping you create a catalogue
            of your favorite coffee beans. You can add the name of the bean, the
            roast, the shop you bought it from, and even give it a rating. You
            can also edit the information you have entered and delete it if you
            no longer have the beans. This app is perfect for coffee lovers who
            want to keep track of their favorite beans.
          </p>
        </div>
        <div className='flex justify-center'>
          <p className='text-2xl p-4 m-2 max-w-2xl text-justify'>
            To get started, just head on over to the sign up page.
          </p>
        </div>
        <div className='flex justify-center'>
          <p className='text-2xl p-4 m-2 max-w-2xl text-justify'>
            If you have any feedback or feature requests, please feel free to
            reach out at <strong>pixelbrewerstudios@gmail.com</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
