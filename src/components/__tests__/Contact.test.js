import { render, screen } from '@testing-library/react';
import Contact from '../Contact';
import '@testing-library/jest-dom';

describe('Contact Us Test Cases', () => {
	// Helper functions
	beforeAll(() => {
		// console.log('Before All');
	});

	afterAll(() => {
		// console.log('After All');
	});

	beforeEach(() => {
		// console.log('Before Each');
	});

	afterEach(() => {
		// console.log('After Each');
	});

	it('Should load Contact Us Component', () => {
		render(<Contact />);

		const heading = screen.getByRole('heading');

		expect(heading).toBeInTheDocument();
	});

	it('Should load button inside Contact Us Component', () => {
		render(<Contact />);

		const button = screen.getByRole('button');

		expect(button).toBeInTheDocument();
	});

	test('Should load input name inside Contact Us Component', () => {
		render(<Contact />);

		const inputName = screen.getByPlaceholderText('name');

		expect(inputName).toBeInTheDocument();
	});

	test('Should load 2 input boxes inside Contact Us Component', () => {
		render(<Contact />);

		//Querying
		const inputBoxes = screen.getAllByRole('textbox');

		expect(inputBoxes.length).toBe(2);
	});
});
