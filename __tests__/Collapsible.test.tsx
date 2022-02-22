import React from 'react';

import {render} from '@testing-library/react-native';
import Collapsible from '../Collapsible';

import renderer from 'react-test-renderer';

it('should render tab navigation synchronously', () => {
  const inst = renderer.create(<Collapsible />);

  expect(inst.root.findByProps({testID: 'view-1'})).not.toBeNull();
});

xit('TEST NEVER COMPLETES - should render tab navigation asynchronously', async () => {
  const inst = renderer.create(<Collapsible />);

  await new Promise(resolve => setTimeout(resolve, 0));

  expect(inst.root.findByProps({testID: 'view-1'})).not.toBeNull();
});

xit('TEST NEVER COMPLETES - should render tab navigation with testing library', () => {
  const {getByTestId} = render(<Collapsible />);

  expect(getByTestId('view-1')).not.toBeNull();
});
