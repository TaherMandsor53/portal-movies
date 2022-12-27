import { render, screen } from '@testing-library/react';
import ErrorHandleComponent from './ErrorHandleComponent';
import { BrowserRouter as Router } from 'react-router-dom';

test('Renders Error Text', () => {
  window.location.pathname = '/abc';
  render(
    <Router>
      <ErrorHandleComponent />
    </Router>,
  );
  const errorText = screen.getByText('go back');
  expect(errorText).toBeInTheDocument();
});
