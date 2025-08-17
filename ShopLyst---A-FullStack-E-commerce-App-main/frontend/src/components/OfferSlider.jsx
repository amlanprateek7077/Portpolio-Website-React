import { useState, useEffect } from "react";

const offers = [
	{ imageUrl: "/jeans.jpg", alt: "Special Discount 50% Off" },
	{ imageUrl: "/shoes.jpg", alt: "Summer Sale - Buy 1 Get 1 Free" },
	{ imageUrl: "/tshirts.jpg", alt: "Free Shipping on Orders Over $50" },
	{ imageUrl: "/glasses.jpeg", alt: "Exclusive Glass Collection - Up to 40% Off" },
	{ imageUrl: "/ba2.jpg", alt: "Stylish Bags - Flat 30% Off" },
	{ imageUrl: "/r1.jpg", alt: "Mega Electronics Sale - Up to 60% Off" },
	{ imageUrl: "/f4.jpeg", alt: "Home Furniture Deals - Save Big!" },
	{ imageUrl: "/m7.webp", alt: "Luxury Mobiles - Buy 2 Get 1 Free" },
	{ imageUrl: "/ba5.jpg", alt: "Beauty Essentials - Up to 50% Off" },
	{ imageUrl: "/tshirts.jpg", alt: "Sports Gear - Special Combo Offers" },
];

const OfferSlider = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % offers.length);
		}, 3000); // Changes slide every 3 seconds

		return () => clearInterval(interval);
	}, []);

	return (
        <div className='relative w-full h-[200px] sm:h-[300px] lg:h-[400px] overflow-hidden rounded-lg shadow-xl'>
			{offers.map((offer, index) => (
				<div
					key={index}
					className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
						index === currentIndex ? "opacity-100" : "opacity-0"
					}`}
				>
					<img
						src={offer.imageUrl}
						alt={offer.alt}
						className='w-full h-full object-cover'
					/>
					<div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-center justify-center'>
						<h2 className='text-white text-2xl md:text-3xl font-bold shadow-lg'>
							{offer.alt}
						</h2>
					</div>
				</div>
			))}
		</div>
	);
};

export default OfferSlider;
