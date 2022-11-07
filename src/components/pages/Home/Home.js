import React from 'react';

const Home = () => {
    return (
        <div>
            {/* header */}
            <section>
	<div className="dark:bg-violet-400">
		<div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">Welcome to Wild Photography World!</h1>
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
        </div>
    );
};

export default Home;