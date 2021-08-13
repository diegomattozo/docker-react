import { render, screen } from '@testing-library/react';
import App from './App';

test('render find hello text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello there./i);
  expect(linkElement).toBeInTheDocument();
});
