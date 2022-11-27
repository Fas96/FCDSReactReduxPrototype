import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import { Provider } from 'react-redux';
import {store} from "./store";
//
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });



test('renders learn react link', () => {
  const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});