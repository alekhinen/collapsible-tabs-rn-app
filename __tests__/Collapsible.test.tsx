import React from 'react';

import {render} from '@testing-library/react-native';
import Collapsible from '../Collapsible';

import renderer from 'react-test-renderer';

it('should render a tab navigation', () => {
  const inst = renderer.create(<Collapsible />);

  expect(inst.root.findByProps({testID: 'view-1'})).not.toBeNull();
});
