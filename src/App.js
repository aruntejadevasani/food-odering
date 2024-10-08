import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import HeaderComponent from './components/HeaderComponent';
import BodyComponent from './components/BodyComponent';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestroMenu from './components/RestroMenu';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore.js';
import Cart from './components/Cart.js';

const Grocery = lazy(() => import('./components/Grocery.js'));

const AppLayout = () => {
	const [userInfo, setUserInfo] = useState();

	useEffect(() => {
		const data = {
			name: 'ABC',
		};
		setUserInfo(data.name);
	}, []);

	return (
		<Provider store={appStore}>
			<UserContext.Provider
				value={{ loggedInUser: userInfo, setUserInfo }}
			>
				<div className="app">
					<HeaderComponent />
					<Outlet />
				</div>
			</UserContext.Provider>
		</Provider>
	);
};

const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		children: [
			{
				path: '/',
				element: <BodyComponent />,
			},
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '/contact',
				element: <Contact />,
			},
			{
				path: '/grocery',
				element: (
					<Suspense fallback={<h1>Loading...</h1>}>
						<Grocery />
					</Suspense>
				),
			},
			{
				path: '/restro/:resId',
				element: <RestroMenu />,
			},
			{
				path: '/cart',
				element: <Cart />,
			},
		],
		errorElement: <Error />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
