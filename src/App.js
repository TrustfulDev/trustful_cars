// import routes and route
import { Routes, Route } from 'react-router-dom';

// import components
import { Navbar, Footer } from './components';

// import pages
import  Home  from './pages/Home';
import  CarDetail  from './pages/CarDetail';

function App() {
  return (
    <div className='max-w-[1650px] mx-auto'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/car/:id' element={<CarDetail />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
