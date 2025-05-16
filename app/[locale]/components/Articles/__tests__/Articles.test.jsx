import { render, screen } from '@testing-library/react';
import Articles from '../Articles';

test('renders Articles', () => {
  render(<Articles />);
  // Example: screen.getByText('...');
});
