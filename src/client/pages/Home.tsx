import React from 'react';


const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Fixed Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvbWV8ZW58MHx8MHx8fDA%3D)' }}
      ></div>

      {/* Black Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-30 z-10"></div>

      {/* Navbar */}
      {/* <Navbar /> */}

      {/* Scrollable Content */}
      <div className="relative z-20 w-full pt-20  text-white">
        <div className="w-full mx-auto">
          <div className='h-screen mt-20'>
            <header className="text-center mb-8">
              <h1 className="text-7xl font-bold mb-20">Find Your Home Dream</h1>
              <p className="text-2xl">We are a real estate agency that will help you <br /> find the best residence you dream of, let’s discuss for your dream house?</p>
            </header>

            <main>
              <div>
                <ul className='text-black flex items-center justify-center gap-5 mb-5'>
                  <li className='bg-white px-6 py-4 text-xl font-semibold rounded-md'>For Rent</li>
                  <li className='bg-white px-6 py-4 text-xl font-semibold rounded-md'>For Sale</li>
                </ul>
              </div>
              <div className='grid grid-cols-12'>
                <form action="" className='bg-white col-span-10 text-black rounded-s-md h-24 py-6'>
                  <div className='grid grid-cols-4'>
                    <div className='flex flex-col border-r px-4'>
                      <label htmlFor="name" className='text-sm mb-2'>Keywords</label>
                      <input type="text" name="name" className='text-black outline-none' placeholder='Search Keyword' />
                    </div>
                    <div className='flex flex-col border-r px-4'>
                      <label htmlFor="" className='text-sm mb-2'>Location</label>
                      <input type="text" className='text-black outline-none' placeholder='Search Keyword' />
                    </div>
                    <div className='flex flex-col border-r px-4'>
                      <label htmlFor="" className='text-sm mb-2'>Type</label>
                      <select name="" id="" className='outline-none'>
                        <option value="">All</option>
                        <option value="">Villa</option>
                        <option value="">Studio</option>
                        <option value="">House</option>
                      </select>
                    </div>
                    <div className='flex flex-col px-4'>
                      <label className='col-span-1'>Advanced</label>
                    </div>
                  </div>
                </form>
                <button className='bg-orange-600 font-semibold col-span-2 text-white py-6 h-24 rounded-e-md'>
                  Find Properties
                </button>
              </div>
            </main>
          </div>

          <div className="h-[2000px]  left-0 right-0 w-full max-w-[1600px] bg-white">
            I want to full width
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

