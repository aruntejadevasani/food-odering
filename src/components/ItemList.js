import { useDispatch } from 'react-redux';
import { CDN_URL } from '../utils/constants';
import { addItems } from '../utils/cartSlice';

const ItemList = ({ items }) => {
	const dispatch = useDispatch();

	const handleAddItem = (item) => {
		dispatch(addItems(item));
	};

	return (
		<div>
			{items.map((item) => (
				<div
					data-testid="foodItems"
					key={item.card.info.id}
					className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
				>
					<div className="w-9/12">
						<div className="py-2">
							<div>{item.card.info.name}</div>
							<div>
								₹
								{(item.card.info.price ||
									item.card.info.defaultPrice) / 100}
							</div>
						</div>
						<p className="text-xs">{item.card.info.description}</p>
					</div>
					<div className="w-3/12 p-4">
						<div className="absolute">
							<button
								className="p-2 mx-16 bg-black text-white rounded-lg shadow-lg"
								onClick={() => handleAddItem(item)}
							>
								Add +
							</button>
						</div>
						<img
							src={CDN_URL + item.card.info.imageId}
							className="w-full"
						/>
					</div>
				</div>
			))}
		</div>
	);
};

export default ItemList;
