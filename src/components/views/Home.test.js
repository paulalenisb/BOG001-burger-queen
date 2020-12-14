import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';


test('renders learn react link', () => {
  const history = {push: jest.fn() }
  const component = render(<Home history ={history} />);
  console.log(component)

  /* const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument(); */
});
