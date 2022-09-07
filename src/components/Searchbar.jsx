// import context
import { useContext } from 'react';
import { CarContext } from '../Context/CarContext';

// import components
import { TypeDropdown, BrandDropdown, PriceDropdown } from './index';

// import search icon (react-icon)
import { RiSearch2Line } from 'react-icons/ri';

const Searchbar = () => {
    const { handleClick } = useContext(CarContext);

    return (
        <div className='flex justify-center items-center gap-5 mx-auto my-6 max-w-[700px] lg:max-w-[1500px] px-10 py-10 lg:py-5 bg-neutral-800 rounded-lg flex-col lg:flex-row'>
            {/* Dropdown Menus */}
            <TypeDropdown />
            <BrandDropdown />
            <PriceDropdown />

            {/* Search Button */}
            <button onClick={() => handleClick()} className='bg-green-500 w-full lg:w-[250px] xl:w-full h-[64px] rounded-lg flex justify-center items-center text-neutral-900 text-lg hover:bg-green-400 transition'>
                <RiSearch2Line />
            </button>
        </div>
    );
};

export default Searchbar;