import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import HeaderComponent from '../HeaderComponent';
import appStore from '../../utils/appStore';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

it('Should render Header component with a login button', () => {
	render(
		<BrowserRouter>
			<Provider store={appStore}>
				<HeaderComponent />
			</Provider>
		</BrowserRouter>
	);

	const loginBtn = screen.getByRole('button', { name: 'Login' });

	// const login = screen.getByText('Login');

	expect(loginBtn).toBeInTheDocument();
});

it('Should render Header component with cart items zero', () => {
	render(
		<BrowserRouter>
			<Provider store={appStore}>
				<HeaderComponent />
			</Provider>
		</BrowserRouter>
	);

	const cartItems = screen.getByText('Cart (0 Items)');

	expect(cartItems).toBeInTheDocument();
});

it('Should change Login Btn to Logout on click', () => {
	render(
		<BrowserRouter>
			<Provider store={appStore}>
				<HeaderComponent />
			</Provider>
		</BrowserRouter>
	);

	const loginBtn = screen.getByRole('button', { name: 'Login' });

	fireEvent.click(loginBtn);

	const logoutBtn = screen.getByRole('button', { name: 'Logout' });

	expect(logoutBtn).toBeInTheDocument();
});
