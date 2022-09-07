// import context
import { useContext } from 'react';
import { CarContext } from '../Context/CarContext';

// import components
import Car from './Car';

// import link (react-router-dom)
import { Link } from 'react-router-dom';

// import spinner (react-icons)
import { CgSpinnerTwoAlt } from 'react-icons/cg';

const CarListing = () => {
    const { cars, loading } = useContext(CarContext);

    // loading
    if (loading) {
        return(<CgSpinnerTwoAlt className='mx-auto animate-spin text-green-500 text-4xl mt-[200px]' />)
    }

    if (cars.length < 1) {
        return<div className='text-center text-2xl text-neutral-400 mt-48'>No Cars Found</div>
    }

    return(
        <section>
            <div className='container mx-auto'>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
                    {cars.map((car, index) => {
                        return (
                            <Link to={`/car/${car.id}`} key={index} >
                                <Car car={car}/>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default CarListing;