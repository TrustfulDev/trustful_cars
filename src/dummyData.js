// Import all SMALL car images
import fordMustangSm from './assets/Cars/fordMustangSm.jpg';
import fordHatchbackSm from'./assets/Cars/fordHatchbackSm.jpg';
import fordF150Sm from'./assets/Cars/fordF150Sm.jpg';
import tesla3Sm from './assets/Cars/tesla3Sm.jpg';
import teslaSSm from './assets/Cars/teslaSSm.jpg';
import teslaXSm from './assets/Cars/teslaXSm.jpg';
import mitsubishiMonteroSm from './assets/Cars/mitsubishiMonteroSm.jpg';
import mitsubishiEVOSm from './assets/Cars/mitsubishiEVOSm.jpg';

// Import all LARGE car images
import fordMustang from './assets/Cars/fordMustang.jpg';
import fordHatchback from'./assets/Cars/fordHatchback.jpg';
import fordF150 from'./assets/Cars/fordF150.jpg';
import tesla3 from './assets/Cars/tesla3.jpg';
import teslaS from './assets/Cars/teslaS.jpg';
import teslaX from './assets/Cars/teslaX.jpg';
import mitsubishiMontero from './assets/Cars/mitsubishiMontero.jpg';
import mitsubishiEVO from './assets/Cars/mitsubishiEVO.jpg';

// Create dummy data for all the cars
export const carData = [
    {
        id: 1,
        type: 'Sports',
        brand: 'Ford',
        name: 'Ford Mustang GT Premium Coupe',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
        image: fordMustang,
        smImage: fordMustangSm,
        doors: '2',
        drivetrain: 'RWD',
        year: '2019',
        price: '38000',
        horsepower: '460',
    },
    {
        id: 2,
        type: 'Sedan',
        brand: 'Tesla',
        name: 'Tesla Model 3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
        image: tesla3,
        smImage: tesla3Sm,
        doors: '4',
        drivetrain: 'AWD',
        year: '2017',
        price: '57000',
        horsepower: '252',
    },
    {
        id: 3,
        type: 'Sedan',
        brand: 'Mitsubishi',
        name: 'Mitsubishi Pajero Sport',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
        image: mitsubishiEVO,
        smImage: mitsubishiEVOSm,
        doors: '4',
        drivetrain: 'AWD',
        year: '2016',
        price: '32667',
        horsepower: '291',
    },
    {
        id: 4,
        type: 'Hatchback',
        brand: 'Ford',
        name: 'Ford Focus Titanium',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
        image: fordHatchback,
        smImage: fordHatchbackSm,
        doors: '4',
        drivetrain: 'FWD',
        year: '2015',
        price: '10000',
        horsepower: '160',
    },
    {
        id: 5,
        type: 'Truck',
        brand: 'Ford',
        name: 'Ford F-150',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
        image: fordF150,
        smImage: fordF150Sm,
        doors: '4',
        drivetrain: '4WD',
        year: '2016',
        price: '30000',
        horsepower: '385',
    },
    {
        id: 6,
        type: 'Sports',
        brand: 'Tesla',
        name: 'Tesla Model S',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
        image: teslaS,
        smImage: teslaSSm,
        doors: '4',
        drivetrain: 'AWD',
        year: '2022',
        price: '104000',
        horsepower: '1020',
    },
    {
        id: 7,
        type: 'SUV',
        brand: 'Tesla',
        name: 'Tesla Model X',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
        image: teslaX,
        smImage: teslaXSm,
        doors: '4',
        drivetrain: 'AWD',
        year: '2022',
        price: '120990',
        horsepower: '1020',
    },
    {
        id: 8,
        type: 'SUV',
        brand: 'Mitsubishi',
        name: 'Mitsubishi Pajero Sport',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
        image: mitsubishiMontero,
        smImage: mitsubishiMonteroSm,
        doors: '4',
        drivetrain: 'AWD',
        year: '2017',
        price: '17000',
        horsepower: '197',
    },
]