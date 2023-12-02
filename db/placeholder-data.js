const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@carhive.com',
    password: '123456',
  },
];

const testimonials = [
  {
    id: '985425fe-0c7e-4700-8e6d-d48b3bc66768',
    name: 'Olivia Parker',
    comment:
      "Best Car Rental Experience! The website's interface is intuitive, making it easy to find the ideal car. The reviews from other users were incredibly helpful, and the entire process, from booking to return, was a breeze. Highly recommended!",
    username: 'oliviaparker',
    image_url: '/avatars/olivia-parker_aembie',
  },
  {
    id: '6671f37d-75ad-404f-bf23-04ddff964aa5',
    name: 'Emma Thompson',
    comment:
      'A Seamless Experience! This website made renting a car hassle-free. The search filters helped me find the perfect car for my trip, and the customer support was responsive and friendly. 5-star service all the way!',
    username: 'emmathompson',
    image_url: '/avatars/emma-thompson_o2ivnb',
  },
  {
    id: '8ecd373f-65c7-4651-a575-63325489297a',
    name: 'Sophia Rodriguez',
    comment:
      "Reliable and Affordable! I've used several car rental websites before, but this one stands out. The prices are transparent, no hidden fees, and the cars are well-maintained. I'll be coming back for all my future trips.",
    username: 'sophiarodriguez',
    image_url: 'avatars/sophia-rodriguez_rxxvrc',
  },
  {
    id: '944fdb07-590d-4cb1-a797-e7fb672c84e1',
    name: 'Daniel Johnson',
    comment:
      'Exceptional Service! From booking to drop-off, everything was smooth and easy. The selection of cars was impressive, and the prices were unbeatable. Will definitely recommend to friends!',
    username: 'danjohnson',
    image_url: '/avatars/daniel-johnson_vnlm3m',
  },
];

const cars = [
  {
    id: '04df75a5-d495-4192-927d-4c54e68feca9',
    slug: 'eco-hatchback',
    name: 'Eco Hatchback',
    body_style: 'Hatchback',
    engine_type: 'Hybrid',
    transmission: 'Automatic',
    seats: 4,
    descriptions: [
      'Meet the Eco Hatch – a blend of eco-conscious driving and urban sophistication. Designed for the environmentally aware, this compact marvel combines fuel efficiency with agile performance, perfect for city life. Inside, it offers a spacious, tech-savvy interior with smart storage solutions and seamless connectivity.',
      "Safety is a priority, featuring advanced driver-assist systems. The Eco Hatch isn't just a car; it's a sustainable lifestyle choice, making eco-friendly driving effortlessly stylish and secure.",
    ],
    features: [
      'Air Conditioning',
      'Bluetooth',
      'Navigation',
      'Cruise control',
      'Android Auto',
      'Apple CarPlay',
    ],
    rating: 3.8,
    reviews: 42,
    unlimited_mileage: true,
    image_url: '/images/cars/eco-hatchback.webp',
    retail_price_per_day: 1000,
    retail_price_currency: 'MXN',
    discounted_price_per_day: 750,
    discounted_price_currency: 'MXN',
  },
  {
    id: '9fd1b27a-2e47-4105-88c2-8e19f5839f3d',
    slug: 'city-minivan',
    name: 'City Minivan',
    body_style: 'Minivan',
    engine_type: 'Gas',
    transmission: 'Automatic',
    seats: 7,
    descriptions: [
      'Redefining family travel with sophistication. Designed for urban adventures, this minivan blends versatility and style seamlessly. With its spacious interior and advanced safety features, it ensures a smooth, secure, and stylish ride for you and your loved ones.',
      'Perfect for city life, the City Minivan offers unparalleled comfort and convenience, making every journey a delightful experience.',
    ],
    features: [
      'Air Conditioning',
      'Bluetooth',
      'Navigation',
      'Cruise control',
      'Android Auto',
      'Apple CarPlay',
    ],
    rating: 4.2,
    reviews: 23,
    unlimited_mileage: true,
    image_url: '/images/cars/city-minivan.webp',
    retail_price_per_day: 1500,
    retail_price_currency: 'MXN',
    discounted_price_per_day: 1000,
    discounted_price_currency: 'MXN',
  },
  {
    id: 'f27a0c28-74ca-4974-92a6-e398842186eb',
    slug: 'mid-size-suv',
    name: 'Mid-Size SUV',
    body_style: 'SUV',
    engine_type: 'Gas',
    transmission: 'Automatic',
    seats: 5,
    descriptions: [
      'A blend of power and elegance. Its striking design makes a statement, while the spacious interior offers both comfort and flexibility.',
      'Whether navigating city streets or off-road adventures, this SUV delivers superior performance and modern convenience, ensuring an exceptional driving experience for every journey.',
    ],
    features: [
      'Air Conditioning',
      'Bluetooth',
      'Navigation',
      'Cruise control',
      'Android Auto',
      'Apple CarPlay',
    ],
    rating: 4.2,
    reviews: 11,
    unlimited_mileage: false,
    image_url: '/images/cars/mid-size-suv.webp',
    retail_price_per_day: 1700,
    retail_price_currency: 'MXN',
  },
  {
    id: '4561ca55-c694-4530-b937-ad185e36f0b4',
    slug: 'electric-luxury-sedan',
    name: 'Electric Luxury Sedan',
    body_style: 'Sedan',
    engine_type: 'Electric',
    transmission: 'Automatic',
    seats: 5,
    descriptions: [
      'This sedan combines the elegance of a luxury car with the eco-friendly essence of electric mobility. Its sleek design and advanced engineering promise a smooth, silent ride, embodying the future of driving.',
      'Inside, experience a blend of cutting-edge technology and plush comfort, creating an oasis of serenity on the road. The Electric Luxury Sedan sets new standards, offering a luxurious and sustainable driving experience for the discerning modern driver.',
    ],
    features: [
      'Air Conditioning',
      'Bluetooth',
      'Navigation',
      'Cruise control',
      'Android Auto',
      'Apple CarPlay',
    ],
    rating: 4.8,
    reviews: 0,
    unlimited_mileage: false,
    image_url: '/images/cars/electric-luxury-sedan.webp',
    retail_price_per_day: 1600,
    retail_price_currency: 'MXN',
  },
  {
    id: 'da2a5e67-272a-4bf6-92e6-0cfef87681c2',
    slug: 'full-size-sedan',
    name: 'Full-Size Sedan',
    body_style: 'Sedan',
    engine_type: 'Gas',
    transmission: 'Automaitc',
    seats: 5,
    descriptions: [
      "Where spaciousness meets sophistication. This sedan offers an abundance of room, making every journey comfortable and indulgent. With its elegant design and powerful performance, it's a perfect blend of style and substance. ",
      "Inside, you'll find a refined interior equipped with advanced technology, ensuring a seamless driving experience.",
    ],
    features: [
      'Air Conditioning',
      'Bluetooth',
      'Navigation',
      'Cruise control',
      'Android Auto',
      'Apple CarPlay',
    ],
    rating: 4.5,
    reviews: 31,
    unlimited_mileage: false,
    image_url: '/images/cars/full-size-sedan.webp',
    retail_price_per_day: 1300,
    retail_price_currency: 'MXN',
  },
  {
    id: '76cb7f00-6f8f-4dfc-8765-6253659a07b7',
    slug: 'luxury-sedan',
    name: 'Luxury Sedan',
    body_style: 'Sedan',
    engine_type: 'Gas',
    transmission: 'Automatic',
    seats: 5,
    descriptions: [
      'Crafted for those who demand the utmost in sophistication, this sedan exudes timeless luxury from every angle. Its sleek silhouette and premium finishes create an aura of opulence, while the powerful engine ensures a dynamic and smooth ride.',
      "Step inside, and you'll find a sumptuous interior adorned with the finest materials and cutting-edge technology.",
      'The Luxury Sedan elevates the driving experience, offering unparalleled comfort and style for the discerning driver who appreciates the finer things in life.',
    ],
    features: [
      'Air Conditioning',
      'Bluetooth',
      'Navigation',
      'Cruise control',
      'Android Auto',
      'Apple CarPlay',
    ],
    rating: 4.7,
    reviews: 9,
    unlimited_mileage: false,
    image_url: '/images/cars/luxury-sedan.webp',
    retail_price_per_day: 2000,
    retail_price_currency: 'MXN',
  },
  {
    id: '0b02be48-45f3-49b8-9e5b-1da952656635',
    slug: 'premium-sedan',
    name: 'Premium Sedan',
    body_style: 'Sedan',
    engine_type: 'Gas',
    transmission: 'Automatic',
    seats: 5,
    descriptions: [
      'A pinnacle of sophistication and performance. Its refined exterior hints at the power within, offering a smooth and exhilarating driving experience.',
      'With its advanced features and elegant aesthetics, this sedan delivers a driving experience that goes beyond the ordinary, setting new standards in the realm of premium automobiles.',
    ],
    features: [
      'Air Conditioning',
      'Bluetooth',
      'Navigation',
      'Cruise control',
      'Android Auto',
      'Apple CarPlay',
    ],
    rating: 4.6,
    reviews: 33,
    unlimited_mileage: true,
    image_url: '/images/cars/premium-sedan.webp',
    retail_price_per_day: 1500,
    retail_price_currency: 'MXN',
  },
  {
    id: '7c064fca-4f39-4b6f-b487-69e8abe99691',
    slug: 'premium-suv',
    name: 'Premium SUV',
    body_style: 'SUV',
    engine_type: 'Gas',
    transmission: 'Automatic',
    seats: 4,
    descriptions: [
      'A fusion of elegance and adventure. From city streets to rugged terrains, it exudes confidence and capability, promising an exhilarating driving experience.',
      "Step inside, and you're greeted with opulent interiors, expertly crafted for comfort and convenience.",
    ],
    features: [
      'Air Conditioning',
      'Bluetooth',
      'Navigation',
      'Cruise control',
      'Android Auto',
      'Apple CarPlay',
    ],
    rating: 4.7,
    reviews: 21,
    unlimited_mileage: false,
    image_url: '/images/cars/premium-suv.webp',
    retail_price_per_day: 1500,
    retail_price_currency: 'MXN',
  },
  {
    id: '2d0b0f66-2d96-4ff3-9f9c-e71ad0942bfc',
    slug: 'standard-sedan',
    name: 'Standard Sedan',
    body_style: 'Sedan',
    engine_type: 'Gas',
    transmission: 'Manual',
    seats: 5,
    descriptions: [
      'Where practicality meets comfort. Designed for everyday adventures, this sedan offers a reliable and efficient driving experience.',
      'Its classic design is complemented by a spacious interior, providing ample room for both passengers and luggage.',
      'With a focus on reliability and affordability, the Standard Sedan is the ideal choice for those seeking a dependable and straightforward vehicle for their daily commute or family outings.',
    ],
    features: [
      'Air Conditioning',
      'Bluetooth',
      'Navigation',
      'Cruise control',
      'Android Auto',
      'Apple CarPlay',
    ],
    rating: 4.3,
    reviews: 65,
    unlimited_mileage: true,
    image_url: '/images/cars/standard-sedan.webp',
    retail_price_per_day: 1100,
    retail_price_currency: 'MXN',
    discounted_price_per_day: 1000,
    discounted_price_currency: 'MXN',
  },
  {
    id: 'cec126bf-911f-433f-ad2e-1c8a8c4f6cf4',
    slug: 'standard-hatchback',
    name: 'Standard Hatchback',
    body_style: 'Hatchback',
    engine_type: 'Gas',
    transmission: 'Manual',
    seats: 4,
    descriptions: [
      'Simplicity meets versatility. This hatchback is crafted for practicality and efficiency, making it an ideal choice for urban living.',
      'Its compact yet functional design ensures easy maneuverability, while the spacious interior provides ample room for passengers and cargo.',
    ],
    features: [
      'Air Conditioning',
      'Bluetooth',
      'Navigation',
      'Cruise control',
      'Android Auto',
      'Apple CarPlay',
    ],
    rating: 4.1,
    reviews: 0,
    unlimited_mileage: true,
    image_url: '/images/cars/standard-hatchback.webp',
    retail_price_per_day: 1000,
    retail_price_currency: 'MXN',
    discounted_price_per_day: 700,
    discounted_price_currency: 'MXN',
  },
  {
    id: '2a845e71-52be-4e2c-948a-a9ebde5f2d8b',
    slug: 'city-hatchback',
    name: 'City Hatchback',
    body_style: 'Hatchback',
    engine_type: 'Gas',
    transmission: 'Automatic',
    seats: 5,
    descriptions: [
      'Engineered for city living, this hatchback seamlessly combines style with practicality.',
      'With fuel efficiency and modern features tailored for urban exploration, the City Hatch is your ideal companion for navigating the cityscape with ease and flair.',
    ],
    features: [
      'Air Conditioning',
      'Bluetooth',
      'Navigation',
      'Cruise control',
      'Android Auto',
      'Apple CarPlay',
    ],
    rating: 4.3,
    reviews: 47,
    unlimited_mileage: true,
    image_url: '/images/cars/city-hatchback.webp',
    retail_price_per_day: 1200,
    retail_price_currency: 'MXN',
    discounted_price_per_day: 1000,
    discounted_price_currency: 'MXN',
  },
  {
    id: '102b10e3-0b91-4075-b665-d2a5786e2658',
    slug: 'standard-suv',
    name: 'Standard SUV',
    body_style: 'SUV',
    engine_type: 'Gas',
    transmission: 'Manual',
    seats: 5,
    descriptions: [
      'With a focus on practicality and affordability, the Standard SUV ensures a straightforward driving experience, catering to those who seek reliability and functionality in their everyday journeys.',
      'Designed for everyday adventures, offering ample space and comfort for both city driving and off-road excursions.',
    ],
    features: [
      'Air Conditioning',
      'Bluetooth',
      'Navigation',
      'Cruise control',
      'Android Auto',
      'Apple CarPlay',
    ],
    rating: 4.4,
    reviews: 78,
    unlimited_mileage: true,
    image_url: '/images/cars/standard-suv.webp',
    retail_price_per_day: 1600,
    retail_price_currency: 'MXN',
    discounted_price_per_day: 1300,
    discounted_price_currency: 'MXN',
  },
  {
    id: '844e391e-7af0-4a1a-834b-7d60c001c2cf',
    slug: 'full-size-suv',
    name: 'Full-Size SUV',
    body_style: 'SUV',
    engine_type: 'Gas',
    transmission: 'Automatic',
    seats: 7,
    descriptions: [
      'This SUV redefines spaciousness and elegance, offering a commanding presence on the road. Its robust build and advanced engineering make it a versatile choice for both city commutes and off-road adventures.',
      'With ample room for passengers and cargo, the Full-Size SUV ensures a comfortable and sophisticated journey.',
    ],
    features: [
      'Air Conditioning',
      'Bluetooth',
      'Navigation',
      'Cruise control',
      'Android Auto',
      'Apple CarPlay',
    ],
    rating: 4.6,
    reviews: 45,
    unlimited_mileage: false,
    image_url: '/images/cars/full-size-suv.webp',
    retail_price_per_day: 1900,
    retail_price_currency: 'MXN',
    discounted_price_per_day: 1700,
    discounted_price_currency: 'MXN',
  },
  {
    id: '90e2bc9b-2569-40ae-85fb-e699cdf92838',
    slug: 'community-minivan',
    name: 'Community Minivan',
    body_style: 'Minivan',
    engine_type: 'Gas',
    transmission: 'Automatic',
    seats: 7,
    descriptions: [
      'Designed for shared experiences and effortless mobility. This minivan embodies versatility and connectivity, making it an ideal choice for community outings and family travels.',
      'Packed with safety features and modern conveniences, the Community Minivan ensures a secure and enjoyable ride, promoting unity and social engagement in every journey.',
    ],
    features: [
      'Air Conditioning',
      'Bluetooth',
      'Navigation',
      'Cruise control',
      'Android Auto',
      'Apple CarPlay',
    ],
    rating: 4.5,
    reviews: 0,
    unlimited_mileage: false,
    image_url: '/images/cars/community-minivan.webp',
    retail_price_per_day: 2000,
    retail_price_currency: 'MXN',
  },
  {
    id: '2ad6c3ae-8ab1-4b63-87f8-b592f7370b3c',
    slug: 'standard-minivan',
    name: 'Standard Minivan',
    body_style: 'Minivan',
    engine_type: 'Gas',
    transmission: 'Manual',
    seats: 5,
    descriptions: [
      'The Standard Minivan: where practicality meets family-friendly features. Engineered with the needs of busy families in mind, this minivan offers reliable performance and ample space for both passengers and cargo.',
      'Its straightforward design ensures ease of use, making it an accessible choice for various lifestyles.',
    ],
    features: [
      'Air Conditioning',
      'Bluetooth',
      'Navigation',
      'Cruise control',
      'Android Auto',
      'Apple CarPlay',
    ],
    rating: 4.3,
    reviews: 43,
    unlimited_mileage: true,
    image_url: '/images/cars/standard-minivan.avif',
    retail_price_per_day: 1500,
    retail_price_currency: 'MXN',
    discounted_price_per_day: 1100,
    discounted_price_currency: 'MXN',
  },
  {
    id: 'fbfdda25-e4b4-4cf5-8a96-f5f6b23206f6',
    slug: 'premium-pickup',
    name: 'Premium Pickup',
    body_style: 'Pickup Truck',
    engine_type: 'Gas',
    transmission: 'Automatic',
    seats: 4,
    descriptions: [
      'A blend of power and luxury, redefining the standards of utility vehicles. With its striking design and robust build, this pickup truck exudes confidence and sophistication.',
      'Whether tackling rugged terrains or city roads, it offers exceptional performance and towing capabilities, making it the ultimate choice for adventurers and workers alike.',
    ],
    features: [
      'Air Conditioning',
      'Bluetooth',
      'Navigation',
      'Cruise control',
      'Android Auto',
      'Apple CarPlay',
    ],
    rating: 4.9,
    reviews: 31,
    unlimited_mileage: false,
    image_url: '/images/cars/premium-pickup.webp',
    retail_price_per_day: 3500,
    retail_price_currency: 'MXN',
    discounted_price_per_day: 3150,
    discounted_price_currency: 'MXN',
  },
  {
    id: '260cc955-eeb4-4449-85bd-e263fb88678e',
    slug: 'standard-pickup',
    name: 'Standard Pickup',
    body_style: 'Pickup Truck',
    engine_type: 'Gas',
    transmission: 'Manual',
    seats: 4,
    descriptions: [
      'A dependable workhorse designed for versatility and reliability. This pickup truck embodies practicality, offering a robust performance for everyday tasks and adventures.',
      'Its sturdy build and functional features make it an ideal choice for hauling cargo or navigating challenging terrains.',
    ],
    features: [
      'Air Conditioning',
      'Bluetooth',
      'Navigation',
      'Cruise control',
      'Android Auto',
      'Apple CarPlay',
    ],
    rating: 4.5,
    reviews: 36,
    unlimited_mileage: false,
    image_url: '/images/cars/standard-pickup.webp',
    retail_price_per_day: 3000,
    retail_price_currency: 'MXN',
    discounted_price_per_day: 2850,
    discounted_price_currency: 'MXN',
  },
  {
    id: '736b82c2-0d21-49ab-bb6e-1c26a11df5fd',
    slug: 'off-road-suv',
    name: 'Off-Road SUV',
    body_style: 'SUV',
    engine_type: 'Gas',
    transmission: 'Automatic',
    seats: 5,
    descriptions: [
      'Built for rugged exploration and unmatched adventures. This SUV is engineered to conquer challenging terrains, making it the ultimate choice for off-road enthusiasts.',
      'With its robust suspension, advanced four-wheel-drive system, and high ground clearance, it can navigate rocky trails and uneven landscapes with ease.',
      'The Off-Road SUV offers a thrilling driving experience, combining power, agility, and durability, making it the perfect companion for those who crave off-road excitement and outdoor escapades.',
    ],
    features: [
      'Air Conditioning',
      'Bluetooth',
      'Navigation',
      'Cruise control',
      'Android Auto',
      'Apple CarPlay',
    ],
    rating: 4.6,
    reviews: 29,
    unlimited_mileage: false,
    image_url: '/images/cars/off-road-suv.webp',
    retail_price_per_day: 2100,
    retail_price_currency: 'MXN',
  },
  {
    id: '606e2dc2-b840-4183-ba12-a6b8d4eca20d',
    slug: 'turbo-sports-car',
    name: 'Turbo Sports Car',
    body_style: 'Sports Car',
    engine_type: 'Gas',
    transmission: 'Automatic',
    seats: 4,
    descriptions: [
      'An epitome of speed and exhilaration. This sports car is engineered for the thrill-seeker, boasting a powerful turbocharged engine that propels it from 0 to 60 in mere seconds.',
      'With its aerodynamic design and precision handling, it hugs the curves of the road with finesse, offering an adrenaline-pumping driving experience.',
      'Inside, the Turbo Sports Car is fitted with cutting-edge technology and luxurious finishes, ensuring both performance and comfort are at their peak.',
    ],
    features: [
      'Air Conditioning',
      'Bluetooth',
      'Navigation',
      'Cruise control',
      'Android Auto',
      'Apple CarPlay',
    ],
    rating: 5,
    reviews: 25,
    unlimited_mileage: false,
    image_url: '/images/cars/turbo-sports-car.webp',
    retail_price_per_day: 5000,
    retail_price_currency: 'MXN',
    discounted_price_per_day: 4750,
    discounted_price_currency: 'MXN',
  },
  {
    id: 'd5103ca4-cc3d-4d5f-a9a9-44897fb7d463',
    slug: 'premium-minivan',
    name: 'Premium Minivan',
    body_style: 'Minivan',
    engine_type: 'Gas',
    transmission: 'Automatic',
    seats: 7,
    descriptions: [
      'Where elegance meets versatility. This minivan sets new standards in family travel, offering a spacious interior adorned with premium materials and modern comforts.',
      "Whether you're on a road trip or running daily errands, the Premium Minivan delivers superior performance and opulence, ensuring every ride is a delightful adventure for the whole family.",
    ],
    features: [
      'Air Conditioning',
      'Bluetooth',
      'Navigation',
      'Cruise control',
      'Android Auto',
      'Apple CarPlay',
    ],
    rating: 4.6,
    reviews: 33,
    unlimited_mileage: true,
    image_url: '/images/cars/premium-minivan.webp',
    retail_price_per_day: 2000,
    retail_price_currency: 'MXN',
  },
  {
    id: 'c739113b-2e95-4a2b-a18a-dcb29e8e7242',
    slug: 'velocity-sports-car',
    name: 'Velocity Sports Car',
    body_style: 'Sports Car',
    engine_type: 'Gas',
    transmission: 'Automatic',
    seats: 4,
    descriptions: [
      'A true embodiment of speed and style. This sports car is engineered for high-performance enthusiasts, boasting a powerful engine that delivers jaw-dropping acceleration and unmatched agility.',
      'Its sleek and aerodynamic design not only turns heads but also enhances its aerodynamic efficiency, ensuring a thrilling and dynamic ride. ',
    ],
    features: [
      'Air Conditioning',
      'Bluetooth',
      'Navigation',
      'Cruise control',
      'Android Auto',
      'Apple CarPlay',
    ],
    rating: 4.5,
    reviews: 28,
    unlimited_mileage: false,
    image_url: '/images/cars/velocity-sports-car.avif',
    retail_price_per_day: 2800,
    retail_price_currency: 'MXN',
    discounted_price_per_day: 2500,
    discounted_price_currency: 'MXN',
  },
  {
    id: 'cfff2b45-bebc-4467-978a-9dfce7eb0fd0',
    slug: 'racer-sports-car',
    name: 'Racer Sports Car',
    body_style: 'Sports Car',
    engine_type: 'Gas',
    transmission: 'Automatic',
    seats: 4,
    descriptions: [
      'A symphony of speed and elegance. Crafted for racing enthusiasts, this sports car boasts a lightweight yet powerful engine, propelling it to remarkable speeds with precision.',
      'Its aggressive aerodynamics and responsive handling ensure it hugs corners and accelerates with unparalleled zeal.',
      'Designed for those who crave the thrill of the track, this car blends performance and style, making it the ultimate choice for speed aficionados.',
    ],
    features: [
      'Air Conditioning',
      'Bluetooth',
      'Navigation',
      'Cruise control',
      'Android Auto',
      'Apple CarPlay',
    ],
    rating: 4.6,
    reviews: 14,
    unlimited_mileage: false,
    image_url: '/images/cars/racer-sports-car.webp',
    retail_price_per_day: 2100,
    retail_price_currency: 'MXN',
  },
  {
    id: '37b78271-06ed-43af-a546-5475676bc19e',
    slug: 'urban-pickup',
    name: 'Urban Pickup',
    body_style: 'Pickup Truck',
    engine_type: 'Gas',
    transmission: 'Automatic',
    seats: 4,
    descriptions: [
      'A fusion of rugged capability and city sophistication. This pickup truck is tailored for urban dwellers, offering a perfect balance of functionality and style.',
      "Whether you're hauling equipment or heading out for a weekend adventure, this truck combines practicality and urban flair, making it the perfect companion for modern city living.",
    ],
    features: [
      'Air Conditioning',
      'Bluetooth',
      'Navigation',
      'Cruise control',
      'Android Auto',
      'Apple CarPlay',
    ],
    rating: 4.7,
    reviews: 50,
    unlimited_mileage: false,
    image_url: '/images/cars/urban-pickup.webp',
    retail_price_per_day: 2100,
    retail_price_currency: 'MXN',
  },
  {
    id: '65f2b06b-f6b8-4fca-a520-a6a7ee119050',
    slug: 'sporty-hatchback',
    name: 'Sporty Hatchback',
    body_style: 'Hatchback',
    engine_type: 'Gas',
    transmission: 'Automatic',
    seats: 4,
    descriptions: [
      'Designed for dynamic driving, this hatchback combines agile handling with a sleek exterior, making a bold statement on the road.',
      'Its compact size ensures nimble maneuverability, ideal for urban adventures, while the sporty design elements add a touch of excitement to your daily drive.',
      'The Sporty Hatch is the embodiment of lively driving dynamics and practical versatility, making it the perfect choice for those who seek excitement without sacrificing everyday usability.',
    ],
    features: [
      'Air Conditioning',
      'Bluetooth',
      'Navigation',
      'Cruise control',
      'Android Auto',
      'Apple CarPlay',
    ],
    rating: 4.4,
    reviews: 66,
    unlimited_mileage: true,
    image_url: '/images/cars/sporty-hatchback.avif',
    retail_price_per_day: 1400,
    retail_price_currency: 'MXN',
    discounted_price_per_day: 1000,
    discounted_price_currency: 'MXN',
  },
];

const locations = [
  {
    id: 'fae436f3-6341-486a-8691-0633f64e1997',
    name: 'Amsterdam, Netherlands',
    slug: 'amsterdam',
    latitude: 52.3547,
    longitude: 4.904,
    featured: false,
    image_url: '',
  },
  {
    id: '6132dc81-cc1a-4a2e-93c3-d176139bec4f',
    name: 'Barcelona, Spain',
    slug: 'barcelona',
    latitude: 41.3925,
    longitude: 2.1404,
    featured: false,
    image_url: '',
  },
  {
    id: '92331cbf-254a-4acf-9671-a77810faef4c',
    name: 'Cancún, México',
    slug: 'cancun',
    latitude: 21.1617,
    longitude: -86.851,
    featured: true,
    image_url: 'locations/cancun_c1tw5i',
  },
  {
    id: 'e27e9e7c-5bf9-44f9-b24f-3b5df6417c77',
    name: 'Dubai, United Arab Emirates',
    slug: 'dubai',
    latitude: 25.2652,
    longitude: 55.2928,
    featured: true,
    image_url: 'locations/dubai_joqiup',
  },
  {
    id: 'fd1e4b0d-5e1a-41db-a89b-6e33eed72ace',
    name: 'New York, United States',
    slug: 'new-york',
    latitude: 40.6975,
    longitude: -73.9795,
    featured: false,
    image_url: '',
  },
  {
    id: '45d07433-25e2-4ce7-b039-f0317e694048',
    name: 'Paris, France',
    slug: 'paris',
    latitude: 48.8589,
    longitude: 2.3469,
    featured: true,
    image_url: 'locations/paris_tfbyw0',
  },
  {
    id: 'd9b23370-3be4-4936-ae23-3ad54b310fd8',
    name: 'Rio de Janeiro, Brazil',
    slug: 'rio',
    latitude: -22.9148,
    longitude: -43.4075,
    featured: false,
    image_url: '',
  },
  {
    id: '2538dcf8-b531-4c68-a87a-b49a42be0c23',
    name: 'Rome, Italy',
    slug: 'rome',
    latitude: 41.8931,
    longitude: 12.4832,
    featured: true,
    image_url: 'locations/rome_g8hdhk',
  },
  {
    id: 'b31d9e0c-77c6-427b-9a19-37382ea62d7b',
    name: 'Sydney, Australia',
    slug: 'sydney',
    latitude: -33.8693,
    longitude: 151.209,
    featured: false,
    image_url: '',
  },
  {
    id: 'ff841d10-0682-4e51-9330-47c5abb00643',
    name: 'Tokyo, Japan',
    slug: 'tokyo',
    latitude: 35.6841,
    longitude: 139.7742,
    featured: false,
    image_url: '',
  },
];

const rentalReservations = [
  {
    id: 'a5288c3d-e859-4ecf-8f72-1840c02d6cff',
    car_id: cars[6].id,
    user_id: users[0].id,
    location_id: locations[1].id,
    check_in: '2024-03-10',
    check_out: '2024-03-18',
    created_at: '2023-10-28',
  },
];

const newsletterSubscribers = [
  {
    id: '8cdd2d76-0989-4711-9377-9fa9f5d15b6d',
    email: 'test@carhive.com',
    created_at: '2023-10-31',
  },
];

module.exports = {
  users,
  testimonials,
  cars,
  rentalReservations,
  locations,
  newsletterSubscribers,
};
