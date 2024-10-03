import useOnlineStatus from '../utils/useOnlineStatus';
import RestroCard, { withPromoted } from './RestroCard';
import Shimmer from './Shimmer';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../utils/UserContext';

const BodyComponent = () => {
	// State Variable
	let [tempList, setTempList] = useState([]);
	let [filteredRest, setFilteredRest] = useState([]);

	let [searchText, setSearchText] = useState('');

	const RestroCardPromoted = withPromoted(RestroCard);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await fetch(
			'https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.5316572&lng=78.3913328&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
		);

		const jsonData = await data.json();
		setTempList(
			jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants
		);
		setFilteredRest(
			jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants
		);
	};

	const onlineStatus = useOnlineStatus();
	if (!onlineStatus) return <h1>Please check you internet connection!!!</h1>;

	const { loggedInUser, setUserInfo } = useContext(UserContext);

	return tempList.length === 0 ? (
		<Shimmer />
	) : (
		<div className="">
			<div className="flex">
				<div className="m-4 p-4">
					<input
						type="text"
						className="border border-solid border-black"
						value={searchText}
						onChange={(e) => {
							setSearchText(e.target.value);
						}}
					/>
					<button
						className="px-4 py-2 bg-green-100 m-4 rounded-lg"
						onClick={() => {
							setFilteredRest(
								tempList.filter((res) =>
									res.info.name
										.toLowerCase()
										.includes(searchText)
								)
							);
						}}
					>
						Search
					</button>
				</div>
				<div className="m-4 p-4 flex items-center">
					<button
						className="px-4 py-2 bg-gray-100 rounded-lg"
						onClick={() => {
							setFilteredRest(
								tempList.filter(
									(res) => res.info.avgRatingString > 4.1
								)
							);
						}}
					>
						Top Rated Restros
					</button>
				</div>
				<div className="m-4 p-4 flex items-center">
					<label className="p-1">User Name </label>
					<input
						className="border border-black p-1"
						value={loggedInUser}
						onChange={(e) => setUserInfo(e.target.value)}
					/>
				</div>
			</div>
			<div className="flex">
				<div className="flex flex-wrap justify-center">
					{filteredRest.map((item) => (
						<Link key={item.info.id} to={'/restro/' + item.info.id}>
							{item.info.promoted ? (
								<RestroCardPromoted resData={item} />
							) : (
								<RestroCard resData={item} />
							)}
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default BodyComponent;
