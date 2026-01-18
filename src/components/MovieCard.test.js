import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MovieCard from './MovieCard';

test('renders movie title and rating correctly', () => {
 
  render(<MovieCard title="Inception" rating="8.8" posterUrl="" />);
  

  const titleElement = screen.getByText(/Inception/i);
  expect(titleElement).toBeInTheDocument();

  
  const ratingElement = screen.getByText(/8.8/i);
  expect(ratingElement).toBeInTheDocument();
})