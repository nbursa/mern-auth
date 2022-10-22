import { render, screen } from '@testing-library/react';
import App from './App';

test('renders login', () => {
  render(<App />);
  const title = screen.queryByTestId('login-title');
  expect(title).toBeInTheDocument();
});
