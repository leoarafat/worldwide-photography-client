import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            {/* header */}
            <section>
	<div className="dark:bg-violet-400">
		<div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">Welcome to AP Photography!</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">Photography is the art, application, and practice of creating durable images by recording light, either electronically by means of an image sensor, or chemically by means of a light-sensitive material such as photographic film.</p>
			<div className="flex flex-wrap justify-center">
				<button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50">See More</button>
				<button type="button" className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-700 dark:text-gray-900">About us</button>
			</div>
		</div>
	</div>
	<img src="https://images.unsplash.com/photo-1554844453-7ea2a562a6c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500" />
</section>
            {/* header */}
            {/* Banner section */}
            <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    
    <img src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="w-full" alt='' />
    
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="https://images.unsplash.com/photo-1520390138845-fd2d229dd553?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" className="w-full" alt=''/>
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="https://images.unsplash.com/uploads/141219324227007364f95/be0967a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="w-full" alt='' />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src="https://images.unsplash.com/photo-1420136663600-498c31ee1c97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="w-full" alt='' />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
            {/* Banner section */}
            {/* getup */}
            <div className="px-8 py-2 dark:bg-gray-900 dark:text-gray-100">
	<div className="flex items-center mx-auto container justify-center md:justify-between py-2">
		<div>
			<span>Get up to 50% off your first order + free shipping,&nbsp;</span>
			<Link href="#" rel="noopener noreferrer" className="underline">sign up</Link>today!
		</div>
		<Link href="#" rel="noopener noreferrer" className="items-center gap-2 hidden md:flex">
			<svg role="img" viewBox="0 0 22 22" className="fill-current h-4 w-4">
				<path clipRule="evenodd" d="M6.5 1.75a1.75 1.75 0 100 3.5h3.51a8.785 8.785 0 00-.605-1.389C8.762 2.691 7.833 1.75 6.5 1.75zm5.49 3.5h3.51a1.75 1.75 0 000-3.5c-1.333 0-2.262.941-2.905 2.111a8.778 8.778 0 00-.605 1.389zM1.75 6.75v3.5h18.5v-3.5H1.75zm18 5H21a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75h-2.761a3.25 3.25 0 00-2.739-5c-2.167 0-3.488 1.559-4.22 2.889a9.32 9.32 0 00-.28.553 9.32 9.32 0 00-.28-.553C9.988 1.809 8.667.25 6.5.25a3.25 3.25 0 00-2.739 5H1A.75.75 0 00.25 6v5c0 .414.336.75.75.75h1.25V21c0 .414.336.75.75.75h16a.75.75 0 00.75-.75v-9.25zm-1.5 0H3.75v8.5h14.5v-8.5z" fillRule="evenodd"></path>
			</svg>
			<span className="hover:underline focus-visible:underline">Gift Cards</span>
		</Link>
	</div>
</div>
            {/* getup */}
        </div>
    );
};

export default Home;