// import context
import { useState, useContext } from 'react';
import { CarContext } from '../Context/CarContext';

// import icons (react-icons)
import { IoCarSportSharp, IoChevronDownSharp, IoChevronUpSharp } from 'react-icons/io5';

// import headless ui
import { Menu } from '@headlessui/react';

const  TypeDropdown = () => {
    const { type, setType, types } = useContext(CarContext);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Menu as='div' className='dropdown relative'>
            <Menu.Button onClick={() => setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
                <IoCarSportSharp className='dropdown-icon-primary' />
                <div>
                    <p className='font-medium leading-tight'>{type}</p>
                    <p className='font-normal text-[13px]'>Select your car type</p>
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
                { types.map((type, index) => {
                    return (
                        <Menu.Item onClick={() => setType(type)} className='cursor-pointer hover:text-green-500 transition' as='li' key={index}>
                            {type}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    )
}

export default TypeDropdown;