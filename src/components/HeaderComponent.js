import { LOGO_URL } from '../utils/constants';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const HeaderComponent = () => {
	const [btnNameReact, setBtnNameReact] = useState('Login');

	const onlineStatus = useOnlineStatus();

	const { loggedInUser } = useContext(UserContext);

	const cartItems = useSelector((store) => store.cart.items);

	return (
		<div className="flex justify-between bg-pink-100 shadow-lg">
			<div className="logoContainer">
				<img className="w-56" src={LOGO_URL} />
			</div>
			<div className="flex items-center">
				<ul className="flex p-4 m-4">
					<li className="px-4">
						Online Status: {onlineStatus ? '🟢' : '🔴'}
					</li>
					<li className="px-4">
						<Link to="/">Home</Link>
					</li>
					<li className="px-4">
						<Link to="/about">About Us</Link>
					</li>
					<li className="px-4">
						<Link to="/contact">Contact Us</Link>
					</li>
					<li className="px-4">
						<Link to="/grocery">Grocery</Link>
					</li>
					<li className="px-4 font-bold text-xl">
						<Link to="/cart">Cart ({cartItems.length} Items)</Link>
					</li>
					<button
						className="px-4"
						onClick={() => {
							btnNameReact === 'Login'
								? setBtnNameReact('Logout')
								: setBtnNameReact('Login');
						}}
					>
						{btnNameReact}
					</button>
					<li className="px-4 font-bold">{loggedInUser}</li>
				</ul>
			</div>
		</div>
	);
};

export default HeaderComponent;
