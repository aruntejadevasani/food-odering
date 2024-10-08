import { CDN_URL } from '../utils/constants';

const RestroCard = (props) => {
	const { resData } = props;
	const { cloudinaryImageId, name, cuisines, avgRatingString } =
		resData?.info;
	const { slaString } = resData?.info?.sla;
	return (
		<div
			data-testid="resCard"
			className="m-4 p-4 w-52 rounded-xl bg-gray-100 hover:bg-gray-300"
		>
			<img
				className="rounded-lg"
				alt="restro-logo"
				src={CDN_URL + cloudinaryImageId}
			/>
			<h3 className="font-bold py-4 text-lg">{name}</h3>
			<h4>{cuisines.join(', ')}</h4>
			<h4>{avgRatingString} Ratings</h4>
			<h4>{slaString}</h4>
		</div>
	);
};

export const withPromoted = (RestroCard) => {
	return (props) => {
		return (
			<div>
				<label>Promoted</label>
				<RestroCard {...props} />
			</div>
		);
	};
};

export default RestroCard;
