import React from 'react';
import { render } from '@testing-library/react';
import DynamicSvg from './DynamicSvg';

test('renders without crashing', () => {
  const { container } = render(<DynamicSvg url="https://example.com/my.svg" />);
  expect(container).toBeDefined();
});
