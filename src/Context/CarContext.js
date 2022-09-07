import { useState, useEffect, createContext } from 'react';

// import data
import { carData } from '../dummyData';

// create context
export const CarContext = createContext();

// create context provider that takes in the entire document as a param
const CarContextProvider = ({ children }) => {
    // Car Data
    const [cars, setCars] = useState(carData);
    // Car Types
    const [type, setType] = useState('Car Type (any)');
    const [types, setTypes] = useState([]);
    // Car Brands
    const [brand, setBrand] = useState('Car Brand (any)');
    const [brands, setBrands] = useState([]);
    // Price and loading
    const [price, setPrice] = useState('Price (any)');
    const [loading, setLoading] = useState(false);

    // return all types
    useEffect(() => {
        const allTypes = cars.map((car) => {
            return car.type;
        });

        // remove duplicates
        const uniqueTypes = ['Car Type (any)', ...new Set(allTypes)];

        setTypes(uniqueTypes);
    }, []);

    // return all brands
    useEffect(() => {
        const allBrands = cars.map((car) => {
            return car.brand;
        });

        // remove duplicates
        const uniqueBrands = ['Car Brand (any)', ...new Set(allBrands)];

        setBrands(uniqueBrands);
    }, []);

    // changes the car listing
    const handleClick = () => {
        setLoading(true);

        // check if any is selected
        const isAny = (str) => {
            return str.split(' ').includes('(any)');
        };

        // get prices
        const minPrice = parseInt(price.split(' ')[0]);
        const maxPrice = parseInt(price.split(' ')[2]);

        // MOST IMPORTANT ASPECT of car listing
        const newCars = carData.filter((car) => {
            const carPrice = parseInt(car.price);
            
            // no (any) selected
            if (car.type === type && car.brand === brand && carPrice >= minPrice && carPrice <= maxPrice) {
                return car;
            }

            // all (any)
            if (isAny(type) && isAny(brand) && isAny(price)) {
                return car;
            }

            // only type is selected
            if (!isAny(type) && isAny(brand) && isAny(price)) {
                return car.type === type;
            }

            // only brand is selected
            if (isAny(type) && !isAny(brand) && isAny(price)) {
                return car.brand === brand;
            }

            // only price is selected
            if (isAny(type) && isAny(brand) && !isAny(price)) {
                if (carPrice >= minPrice && carPrice <= maxPrice) {
                    return car;
                }
            }

            // type and brand selected
            if (!isAny(type) && !isAny(brand) && isAny(price)) {
                return car.type === type && car.brand === brand;
            }

            // type and price selected
            if (!isAny(type) && isAny(brand) && !isAny(price)) {
                if (carPrice >= minPrice && carPrice <= maxPrice) {
                    return car.type === type;
                }
            }

            // brand and price is selected
            if (isAny(type) && !isAny(brand) && !isAny(price)) {
                if (carPrice >= minPrice && carPrice <= maxPrice) {
                    return car.brand === brand;
                }
            }
        });

        setTimeout(() => {
            return(
                newCars.length < 1 ? setCars([]) :
                setCars(newCars),
                setLoading(false)
            )
        }, 1000)
    }

    return (
        <CarContext.Provider value={{
            type,
            setType,
            types,
            brand,
            setBrand,
            brands,
            price,
            setPrice,
            cars,
            loading,
            handleClick,      
        }}>
            {children}
        </CarContext.Provider>
    )
}

export default CarContextProvider;