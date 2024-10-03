import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import userRestroMenu from '../utils/useRestromenu';
import ResCat from './ResCat';
import { useState } from 'react';

const RestroMenu = () => {
	const { resId } = useParams();

	const resInfo = userRestroMenu(resId);

	const [expIndex, setExpIndex] = useState(null);

	const dummy = 'Dummy Data';

	const { name, cuisines, costForTwoMessage } =
		resInfo?.cards[2]?.card.card.info || {};

	const { itemCards } =
		resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
			?.card || {};

	const cat =
		resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
			(card) =>
				card?.card?.card?.['@type'].includes('ItemCategory') &&
				card?.card?.card?.itemCards
		);

	return resInfo === null ? (
		<Shimmer />
	) : (
		<div className="text-center">
			<h1 className="font-bold my-6 text-2xl">{name}</h1>
			<p className="font-bold text-lg">
				{cuisines.join(', ')} - {costForTwoMessage}
			</p>
			{cat.map((cate, index) => {
				// if (cate?.card?.card?.itemCards)
				return (
					<ResCat
						key={cate?.card?.card.title}
						data={cate?.card?.card}
						showItems={index === expIndex && true}
						setExpIndex={() => setExpIndex(index)}
					/>
				);
			})}
		</div>
	);
};

export default RestroMenu;
