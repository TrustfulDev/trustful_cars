// import components
import { Hero, Searchbar, CarListing } from '../components';

const Home = () => {
    return (
        <div className='min-h-[1500px]'>
            <Hero />
            <Searchbar />
            <CarListing />
        </div>
    );
};

export default Home;