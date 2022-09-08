// import data
import { carData } from '../dummyData';

// import params for dynamic pages (react-router-dom)
import { useParams } from 'react-router-dom';

// import icons (react-icons)
import { GiCarDoor, GiSpeedometer, GiCarWheel } from 'react-icons/gi';

// import react hooks and icon for loading
import { useState } from 'react';
import { CgSpinnerTwo } from 'react-icons/cg';

const CarDetail = () => {
    const [loaded, setLoaded] = useState(false);

    setTimeout(() => {
            setLoaded(true);
    }, 500);

    const { id } = useParams();
    const car = carData.find(car => {
        return car.id === parseInt(id);
    });

    if ( !loaded ) {
        return (<CgSpinnerTwo className='mx-auto animate-spin text-green-500 text-4xl h-80' />)
    }

    return (
        <section className='mb-5 overflow-x-hidden'>
            <div className='flex gap-x-5 flex-col lg:flex-row px-5 overflow-hidden'>
                <img className='max-w-[750px] max-h-[502px] w-auto h-auto rounded-lg border-b-2 border-green-500 sm:h-fit' src={car.image} alt={car.name} />
                <div className='pt-5'>
                    <p>{car.year}</p>
                    <h1 className='text-4xl text-shadow'>{car.name}</h1>
                    
                    <div className='flex gap-x-5 items-center mb-5 xl:mb-10'>
                        <div className='flex gap-x-2 justify-center items-center text-neutral-300 text-shadow'>
                            <p><GiCarDoor /></p>
                            <p>{car.doors}</p>
                        </div>

                        <div className='flex gap-x-2 justify-center items-center text-neutral-300 text-shadow'>
                            <p><GiSpeedometer /></p>
                            <p>{car.horsepower} HP</p>
                        </div>

                        <div className='flex gap-x-2 justify-center items-center text-neutral-300 text-shadow'>
                            <p><GiCarWheel /></p>
                            <p>{car.drivetrain}</p>
                        </div>
                    </div>

                    <p className='text-shadow'>{car.description}</p>

                    <p className='flex items-end h-[100px] xl:h-[200px] text-4xl text-green-500 font-bold text-shadow'>${car.price}</p>
                </div>
            </div>
        </section>
    )
};

export default CarDetail;