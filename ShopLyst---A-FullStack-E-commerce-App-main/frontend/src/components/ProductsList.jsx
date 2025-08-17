import { motion } from "framer-motion";
import { Trash, Star } from "lucide-react";
import { useProductStore } from "../stores/useProductStore";

const ProductsList = () => {
	const { deleteProduct, toggleFeaturedProduct, products } = useProductStore();

	console.log("products", products);

	return (
		<motion.div
			className='bg-gray-800 shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
		>
			{/* Scrollable Table Container */}
			<div className='max-h-[400px] overflow-y-auto'>
				<table className='min-w-full table-auto divide-y divide-gray-700'>
					{/* Table Header */}
					<thead className='bg-gray-700 sticky top-0'>
						<tr>
							<th className='px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider w-1/4'>
								Product
							</th>
							<th className='px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider w-1/6'>
								Price
							</th>
							<th className='px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider w-1/6'>
								Category
							</th>
							<th className='px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider w-1/6'>
								Featured
							</th>
							<th className='px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider w-1/6'>
								Actions
							</th>
						</tr>
					</thead>

					{/* Table Body */}
					<tbody className='bg-gray-800 divide-y divide-gray-700'>
						{products?.map((product) => (
							<tr key={product._id} className='hover:bg-gray-700'>
								{/* Product Column */}
								<td className='px-4 py-4 whitespace-normal break-words'>
									<div className='flex items-center'>
										<div className='flex-shrink-0 h-10 w-10'>
											<img
												className='h-10 w-10 rounded-full object-cover'
												src={product.image}
												alt={product.name}
											/>
										</div>
										<div className='ml-4'>
											<div className='text-sm font-medium text-white'>{product.name}</div>
										</div>
									</div>
								</td>

								{/* Price Column */}
								<td className='px-4 py-4'>
									<div className='text-sm text-gray-300'>${product.price.toFixed(2)}</div>
								</td>

								{/* Category Column */}
								<td className='px-4 py-4'>
									<div className='text-sm text-gray-300'>{product.category}</div>
								</td>

								{/* Featured Column */}
								<td className='px-4 py-4'>
									<button
										onClick={() => toggleFeaturedProduct(product._id)}
										className={`p-1 rounded-full ${
											product.isFeatured
												? "bg-yellow-400 text-gray-900"
												: "bg-gray-600 text-gray-300"
										} hover:bg-yellow-500 transition-colors duration-200`}
									>
										<Star className='h-5 w-5' />
									</button>
								</td>

								{/* Actions Column */}
								<td className='px-4 py-4'>
									<button
										onClick={() => deleteProduct(product._id)}
										className='text-red-400 hover:text-red-300'
									>
										<Trash className='h-5 w-5' />
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</motion.div>
	);
};

export default ProductsList;
