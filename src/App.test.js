import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders game heading', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/Memory Game/i);
  expect(headerElement).toBeInTheDocument();
});
