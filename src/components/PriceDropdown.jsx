// import context
import { useState, useContext } from 'react';
import { CarContext } from '../Context/CarContext';

// import icons (react-icons)
import { IoWalletSharp, IoChevronDownSharp, IoChevronUpSharp } from 'react-icons/io5';

// import headless ui
import { Menu } from '@headlessui/react';

const  PriceDropdown = () => {
    const { price, setPrice } = useContext(CarContext);
    const [isOpen, setIsOpen] = useState(false);

    const prices = [
        {
          value: 'Price range (any)',
        },
        {
          value: '5000 - 10000',
        },
        {
          value: '10000 - 50000',
        },
        {
          value: '50000 - 130000',
        },
        {
          value: '130000 - 160000',
        },
      ]

    return (
        <Menu as='div' className='dropdown relative'>
            <Menu.Button onClick={() => setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
                <IoWalletSharp className='dropdown-icon-primary' />
                <div>
                    <p className='font-medium leading-tight'>{price}</p>
                    <p className='font-normal text-[13px]'>Select your pricing</p>
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
                { prices.map((price, index) => {
                    return (
                        <Menu.Item onClick={() => setPrice(price.value)} className='cursor-pointer hover:text-green-500 transition' as='li' key={index}>
                            {price.value}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    )
}

export default PriceDropdown;