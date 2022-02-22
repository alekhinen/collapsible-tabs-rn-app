import React from 'react';

import {render} from '@testing-library/react-native';
import Collapsible from '../Collapsible';

it('should render a tab navigation', () => {
  const {getByTestId} = render(<Collapsible />);

  expect(getByTestId('view-1')).toBeTruthy();
});
