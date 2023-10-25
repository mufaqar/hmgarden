import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <>
      <Head>
        <title>505 | Home & Garden Masters </title>
        <meta
          name="description"
          content="Over 100 services for your home and garden! 7 days-a-week availability, trained specialists, instant booking, all managed online."
        />
        <link
          rel="canonical"
          href="https://www.homeandgardenmasters.co.uk/505"
        />
      </Head>
      <section>
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
              500
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold ">
              Something's missing.
            </p>
            <p className="mb-4 text-lg font-light">
              Sorry, we can't find that page. You'll find lots to explore on the
              home page.{' '}
            </p>
            <Link
              href="/"
              className="inline-flex focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4 bg-black text-white"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
