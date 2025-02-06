import { useContext, useRef } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';

const Hero = () => {

    const { setSearchFilter, setIsSearched } = useContext(AppContext);

    const titleRef = useRef(null);
    const locationRef = useRef(null);

    const onSearch = () => {
        setSearchFilter({
            title: titleRef.current.value,
            location: locationRef.current.value
        });
        setIsSearched(true);
    }

    return (
        <div className='container 2xl:px-20 mx-auto my-10'>
            <div className='bg-gradient-to-r from-amber-200 to-orange-300 py-16 text-center mx-2 rounded-xl shadow-lg'>
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4'>
                    Find Your Dream Job
                </h2>
                <p className='mb-8 max-w-xl mx-auto text-sm text-gray-600 px-5'>
                    Explore thousands of job opportunities and take the next step in your career.
                </p>
                <div className='flex flex-col md:flex-row items-center justify-center bg-white rounded-lg text-gray-600 max-w-2xl mx-4 sm:mx-auto p-4 shadow'>
                    <div className='flex items-center w-full md:w-1/2 mb-4 md:mb-0 md:mr-2'>
                        <img className='h-5 w-5 mr-2' src={assets.search_icon} alt="" />
                        <input type="text"
                            placeholder='Search for jobs'
                            className='text-sm p-2 rounded-md outline-none w-full border border-gray-300'
                            ref={titleRef}
                        />
                    </div>
                    <div className='flex items-center w-full md:w-1/2 mb-4 md:mb-0 md:mr-2'>
                        <img className='h-5 w-5 mr-2' src={assets.location_icon} alt="" />
                        <input type="text"
                            placeholder='Location'
                            className='text-sm p-2 rounded-md outline-none w-full border border-gray-300'
                            ref={locationRef}
                        />
                    </div>
                    <button onClick={onSearch} className='bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-md text-white transition duration-300 w-full md:w-auto'>
                        Search
                    </button>
                </div>
            </div>

            <div className='border border-gray-300 shadow-md mx-2 mt-5 p-6 rounded-md flex justify-center'> {/* Centered the trusted by section */}
                <div className='flex flex-wrap justify-center gap-10 lg:gap-16'> {/* Added justify-center and flex-wrap */}
                    <p className='font-medium'>Trusted by</p>
                    <img className='h-6' src={assets.microsoft_logo} alt="" />
                    <img className='h-6' src={assets.walmart_logo} alt="" />
                    <img className='h-6' src={assets.accenture_logo} alt="" />
                    <img className='h-6' src={assets.samsung_logo} alt="" />
                    <img className='h-6' src={assets.amazon_logo} alt="" />
                    <img className='h-6' src={assets.adobe_logo} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Hero;