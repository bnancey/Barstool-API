import { render, screen } from '@testing-library/react';
import Barstool from './Barstool';

test('renders learn react link', () => {
  render(<Barstool />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
