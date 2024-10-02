import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_URL } from '../utils/constants';

const RestroMenu = () => {
	const [resInfo, setResInfo] = useState(null);

	const { resId } = useParams();

	useEffect(() => {
		fetchMenu();
	}, []);

	const fetchMenu = async () => {
		const data = await fetch(MENU_URL + resId);

		const jsonData = await data.json();

		setResInfo(jsonData.data);
	};

	const { name, cuisines, costForTwoMessage } =
		resInfo?.cards[2]?.card.card.info || {};

	const { itemCards } =
		resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
			?.card || {};

	return resInfo === null ? (
		<Shimmer />
	) : (
		<div className="menu">
			<h1>{name}</h1>
			<h3>
				{cuisines.join(', ')} - {costForTwoMessage}
			</h3>
			<h3>Menu</h3>
			<ul>
				{itemCards.map((item) => (
					<li key={item.card.info.id}>
						{item.card.info.name} - Rs.{' '}
						{(item.card.info.defaultPrice || item.card.info.price) /
							100}
					</li>
				))}
			</ul>
		</div>
	);
};

export default RestroMenu;
