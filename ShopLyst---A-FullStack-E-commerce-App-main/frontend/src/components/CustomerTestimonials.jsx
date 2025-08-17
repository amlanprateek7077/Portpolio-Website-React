import React from 'react';

const testimonials = [
	{
		name: "John Doe",
		feedback: "Amazing products! Great quality and fast delivery. Highly recommend this store.",
		imageUrl: "/customer1.jpeg"
	},
	{
		name: "Jane Smith",
		feedback: "Fantastic customer service and a seamless shopping experience.",
		imageUrl: "/customer2.jpg"
	},
	{
		name: "Robert Brown",
		feedback: "Affordable and stylish clothing. Will definitely shop again!",
		imageUrl: "/customer3.jpg"
	},
];

const CustomerTestimonials = () => {
	return (
		<div className='bg-gray-900 py-12 px-4 sm:px-6 lg:px-8'>
			<h2 className='text-3xl font-bold text-center text-emerald-400 mb-8'>
				What Our Customers Say About Us
			</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{testimonials.map((testimonial, index) => (
					<div
						key={index}
						className='bg-gray-800 p-6 rounded-lg shadow-md text-center'
					>
						<img
							src={testimonial.imageUrl}
							alt={testimonial.name}
							className='w-16 h-16 mx-auto rounded-full mb-4'
						/>
						<p className='text-gray-300 italic mb-4'>"{testimonial.feedback}"</p>
						<h4 className='text-emerald-400 font-semibold'>{testimonial.name}</h4>
					</div>
				))}
			</div>
		</div>
	);
};

export default CustomerTestimonials;
