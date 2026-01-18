import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

test('updates input value when user types', () => {

  const mockOnSearch = jest.fn(); 
  
  render(<SearchBar onSearch={mockOnSearch} />);
  
  const input = screen.getByPlaceholderText(/Search for a movie.../i);
  

  fireEvent.change(input, { target: { value: 'Avatar' } });
  

  expect(input.value).toBe('Avatar');
})