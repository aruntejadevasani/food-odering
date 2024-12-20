import { useState } from 'react';
import ItemList from './ItemList';

const ResCat = ({ data, showItems, setExpIndex }) => {
	const handleClick = () => {
		setExpIndex();
	};
	return (
		<div>
			<div className="w-6/12 mx-auto my-5 bg-gray-100 shadow-lg p-4 ">
				<div
					className="flex justify-between cursor-pointer"
					onClick={handleClick}
				>
					<span className="font-bold text-lg">
						{data.title} ({data?.itemCards?.length})
					</span>
					<span>⬇</span>
				</div>
				{showItems && <ItemList items={data?.itemCards} />}
			</div>
		</div>
	);
};

export default ResCat;
