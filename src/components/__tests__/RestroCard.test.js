import { render, screen } from '@testing-library/react';
import RestroCard from '../RestroCard';
import MOCK_DATA from '../mocks/resMockData.json';
import '@testing-library/jest-dom';

it('Should render RestroCard component with Props', () => {
	render(<RestroCard resData={MOCK_DATA} />);

	const name = screen.getByText('Chinese Wok');

	expect(name).toBeInTheDocument();
});
