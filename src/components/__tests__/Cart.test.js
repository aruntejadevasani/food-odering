import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import RestroMenu from '../RestroMenu';
import HeaderComponent from '../HeaderComponent';
import MOCK_DATA from '../mocks/mockResMenu.json';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Cart from '../Cart';

global.fetch = jest.fn(() =>
	Promise.resolve({
		json: () => Promise.resolve(MOCK_DATA),
	})
);

it('Should load Restro Menu Component', async () => {
	await act(async () =>
		render(
			<BrowserRouter>
				<Provider store={appStore}>
					<HeaderComponent />
					<RestroMenu />
					<Cart />
				</Provider>
			</BrowserRouter>
		)
	);

	const accordionHeader = screen.getByText('Recommended (20)');
	fireEvent.click(accordionHeader);

	const foodItems = screen.getAllByTestId('foodItems');
	expect(foodItems.length).toBe(20);

	expect(screen.getByText('Cart (0 Items)')).toBeInTheDocument();

	const addBtns = screen.getAllByText('Add +');

	fireEvent.click(addBtns[0]);
	expect(screen.getByText('Cart (1 Items)')).toBeInTheDocument();

	fireEvent.click(addBtns[1]);
	expect(screen.getByText('Cart (2 Items)')).toBeInTheDocument();

	expect(screen.getAllByTestId('foodItems').length).toBe(22);

	fireEvent.click(screen.getByRole('button', { name: 'Clear Cart' }));
	expect(screen.getAllByTestId('foodItems').length).toBe(20);
});
