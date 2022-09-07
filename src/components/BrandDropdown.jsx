// import context
import { useState, useContext } from 'react';
import { CarContext } from '../Context/CarContext';

// import icons (react-icons)
import { IoCogSharp, IoChevronDownSharp, IoChevronUpSharp } from 'react-icons/io5';

// import headless ui
import { Menu } from '@headlessui/react';

const  BrandDropdown = () => {
    const { brand, setBrand, brands } = useContext(CarContext);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Menu as='div' className='dropdown relative'>
            <Menu.Button onClick={() => setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
                <IoCogSharp className='dropdown-icon-primary' />
                <div>
                    <p className='font-medium leading-tight'>{brand}</p>
                    <p className='font-normal text-[13px]'>Select your brand</p>
                </div>
                {
                    isOpen ? (
                        <IoChevronUpSharp className='dropdown-icon-secondary' />
                    ) : (
                        <IoChevronDownSharp className='dropdown-icon-secondary' />
                    )
                }
            </Menu.Button>

            <Menu.Items className='dropdown-menu'>
                { brands.map((brand, index) => {
                    return (
                        <Menu.Item onClick={() => setBrand(brand)} className='cursor-pointer hover:text-green-500 transition' as='li' key={index}>
                            {brand}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    )
}

export default BrandDropdown;