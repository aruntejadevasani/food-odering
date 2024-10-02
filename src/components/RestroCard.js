import CDN_URL from '../utils/constants';

const RestroCard = (props) => {
	const { resData } = props;
	const { cloudinaryImageId, name, cuisines, avgRatingString } =
		resData?.info;
	const { slaString } = resData?.info?.sla;
	return (
		<div className="restro-card" style={{ backgroundColor: '#f0f0f0' }}>
			<img
				className="restro-logo"
				alt="restro-logo"
				src={CDN_URL + cloudinaryImageId}
			/>
			<h3>{name}</h3>
			<h4>{cuisines.join(', ')}</h4>
			<h4>{avgRatingString} Ratings</h4>
			<h4>{slaString}</h4>
		</div>
	);
};

export default RestroCard;
