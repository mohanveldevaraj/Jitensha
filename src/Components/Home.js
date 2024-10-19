import React from 'react';
import Elements from './Elements';
import ShopBy from './Category';


const Home = () => {
  return (
    <main className="flex-grow">
      
      <section className="container">
        <div className="relative h-[500px]">
          <img
            src="/f.jpg"
            alt="Cyclists on a road"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-opacity-40 flex flex-col items-center justify-center text-white">
            <h1 className="text-5xl font-bold mb-6">End of Season Super Sale</h1>
            <div className="space-x-4">
              <button variant="outline" className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">
                Shop Road bikes
              </button>
              <button variant="outline" className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap backdrop-blur-md bg-transparent border border-gray-200 rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:shadow-none">
                Shop Hybrid bikes
              </button>
            </div>
          </div>
        </div>
      </section>
      

      <section className="container">
  <div className="bg-black py-4 text-white">
    <div className="container mx-auto px-4 gap-4 flex overflow-hidden">
      <div className="flex animate-slide whitespace-nowrap">
        <span className="mr-52">300+ service locations</span>
        <span className="item">|  </span>
        <span className="mr-52">Flexible payment options</span>
        <span className="item">|  </span>
        <span className="mr-52">Designed and engineered in Germany</span>
        <span className="item">|  </span>
        <span className="mr-52">Direct to you - unbeatable value</span>
        <span className="item">|  </span>
        <span className="mr-52">Raced by champions</span>
        <span className="item">|  </span>
        <span className="mr-52">300+ service locations</span>
        <span className="item">|  </span>
        <span className="mr-52">Flexible payment options</span>
        <span className="item">|  </span>
        <span className="mr-52">Designed and engineered in Germany</span>
        <span className="item">|  </span>
        <span className="mr-52">Direct to you - unbeatable value</span>
        <span className="item">|  </span>
        <span className="mr-52">Raced by champions</span>
        <span className="item">|  </span>
      </div>
    </div>
  </div>
</section>
<br/>


      
      <section className="container">
        <div className="relative h-[500px] overflow-hidden">
          <video
            autoPlay
            loop
            muted
            className="absolute w-full h-full object-cover"
          >
            <source src="/cycling.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0  bg-opacity-40 flex flex-col items-center justify-center text-white">
            <h2 className="text-5xl font-bold mb-8">Save up to 30%</h2>
            <div className="space-x-4">
              <button variant="secondary" className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-black bg-white border border-transparent rounded-full md:w-auto  hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600">
                Shop Grizl
              </button>
              <button variant="secondary" className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-black bg-white border border border-transparent rounded-full md:w-auto hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600">
                Shop Grail
              </button>
            </div>
          </div>
        </div>
      </section>
      <br/>

      {/* <section className='container'>
      <div className="bg-white">
  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-1 lg:max-w-7xl lg:px-0">
    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Bestsellers</h2>

    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 p-">
          <img src="1.jpg" alt="Front of men&#039;s Basic Tee in black." className="h-80  w-50 object-cover object-center lg:h-full lg:w-full"/>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0"></span>
                Basic Tee
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">Black</p>
          </div>
          <p className="text-sm font-medium text-gray-900">$35</p>
        </div>
      </div>

      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img src="2.jpg" alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0"></span>
                Basic Tee
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">Black</p>
          </div>
          <p className="text-sm font-medium text-gray-900">$35</p>
        </div>
      </div>

      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img src="3.jpg" alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0"></span>
                Basic Tee
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">Black</p>
          </div>
          <p className="text-sm font-medium text-gray-900">$35</p>
        </div>
      </div>

      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img src="5.jpg" alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0"></span>
                Basic Tee
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">Black</p>
          </div>
          <p className="text-sm font-medium text-gray-900">$35</p>
        </div>
      </div>

       </div>
       </div>
       </div>

      </section> */}
      <Elements/>
      
      <ShopBy/>
    </main>
  );
};

export default Home;
