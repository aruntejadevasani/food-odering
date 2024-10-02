import RestroCard from './RestroCard';
import Shimmer from './Shimmer';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BodyComponent = () => {
	// State Variable
	let [tempList, setTempList] = useState([]);
	let [filteredRest, setFilteredRest] = useState([]);

	let [searchText, setSearchText] = useState('');

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

	return tempList.length === 0 ? (
		<Shimmer />
	) : (
		<div className="body">
			<div className="filter-div">
				<div className="search">
					<input
						type="text"
						className="search-box"
						value={searchText}
						onChange={(e) => {
							setSearchText(e.target.value);
						}}
					/>
					<button
						className="search-btn"
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
				<div className="filter">
					<button
						className="filter-btn"
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
			</div>
			<div className="restro-container">
				{filteredRest.map((item) => (
					<Link key={item.info.id} to={'/restro/' + item.info.id}>
						<RestroCard resData={item} />
					</Link>
				))}
			</div>
		</div>
	);
};

export default BodyComponent;
