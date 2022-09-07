// import hero image
import Image from '../assets/heroImage.jpg';

const Hero = () => {
    return(
        <section className="h-full flex flex-col items-center gap-5 md:gap-10 xl:gap-20 lg:flex-row px-10">
            {/* Hero Image */}
            <div className='max-w-[700px]'>
                <img className='rounded-tl-full rounded-br-full border-[5px] border-green-500 z-10 relative' src={ Image } alt='' />
            </div>

            {/* Hero Description */}
            <div className='max-w-[700px] lg:max-w-[400px] xl:max-w-[700px] flex flex-col gap-y-2 md:gap-y-5 xl:gap-y-10'>
                <h1 className='text-4xl font-semibold text-green-500 text-shadow'>Buy Your Dream Car With Us</h1>
                <p className='font-normal text-shadow'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, corporis ab. Incidunt eveniet nostrum, dicta veniam labore ex quam debitis expedita porro quod ipsam accusamus similique! Ipsam, eligendi fugiat? Iusto. Consectetur voluptates qui est mollitia saepe distinctio!</p>
                <div className='flex lg:justify-end'>
                    <button className='font-normal bg-green-500 text-neutral-900 rounded-full px-10 py-5 hover:bg-green-400 hover:-translate-y-px transition '>Start Shopping</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;