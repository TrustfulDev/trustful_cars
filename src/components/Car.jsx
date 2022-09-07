// import icons (react-icons)
import { GiCarDoor, GiSpeedometer, GiCarWheel } from 'react-icons/gi';

const Car = ({ car }) => {
    const { smImage, type, brand, name, doors, drivetrain, year, price, horsepower } = car;

    return (
        <div className='rounded-lg bg-neutral-800 p-5 max-w-[500px] hover:scale-105 transition'>
            <img className='object-scale-down object-center rounded-lg border-b-2 border-green-500' src={ smImage } alt='' />
            <div className='flex gap-x-5 my-3'>
                <p className='bg-violet-500 rounded-full text-neutral-50 px-3'>{brand}</p>
                <p className='bg-violet-500 rounded-full text-neutral-50 px-3'>{type}</p>
            </div>

            <h2 className='text-neutral-50 font-semibold'>{year} {name}</h2>

            <div className='flex gap-x-5 items-center mb-10'>
                <div className='flex gap-x-2 justify-center items-center text-neutral-300'>
                    <p><GiCarDoor /></p>
                    <p>{doors}</p>
                </div>

                <div className='flex gap-x-2 justify-center items-center text-neutral-300'>
                    <p><GiSpeedometer /></p>
                    <p>{horsepower} HP</p>
                </div>

                <div className='flex gap-x-2 justify-center items-center text-neutral-300'>
                    <p><GiCarWheel /></p>
                    <p>{drivetrain}</p>
                </div>
            </div>

            <div className='text-lg font-bold text-green-500'>${price}</div>
        </div>
    );
};

export default Car;