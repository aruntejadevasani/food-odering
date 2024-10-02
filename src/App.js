import React from 'react';
import ReactDOM from 'react-dom/client';
import HeaderComponent from './components/HeaderComponent';
import BodyComponent from './components/BodyComponent';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestroMenu from './components/RestroMenu';

const AppLayout = () => {
	return (
		<div className="app">
			<HeaderComponent />
			<Outlet />
		</div>
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
				path: '/restro/:resId',
				element: <RestroMenu />,
			},
		],
		errorElement: <Error />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
