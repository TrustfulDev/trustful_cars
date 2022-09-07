// import link
import { Link } from 'react-router-dom';

// import logo
import Logo from '../assets/trustfulCar.png';

const Navbar = () => {
    return(
        <nav className='flex justify-between items-center mx-auto mb-3 lg:mb-10 px-3 sm:px-4 md:px-10'>
            {/* Logo */}
            <Link to='/' className='max-w-[100px] md:max-w-[150px]'><img src={ Logo } alt='Trustful Car Logo' /></Link>

            {/* Buttons */}
            <div className='flex items-center gap-2 sm:gap-5 md:gap-10'>
                <Link className='font-semibold text-sm sm:text-base md:text-lg hover:text-green-500 transition text-shadow' to=''>Sign Up</Link>
                <Link className='font-normal text-sm sm:text-base md:text-lg rounded-full px-4 py-2 text-neutral-900 bg-green-500 hover:bg-green-400 hover:-translate-y-px transition' to=''>Get A Quote</Link>
            </div>
        </nav>
    )
};

export default Navbar;