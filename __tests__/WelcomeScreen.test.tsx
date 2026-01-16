/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import WelcomeScreen from '../app/screens/WelcomeScreen';

// Mock navigation
const mockNavigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
  dispatch: jest.fn(),
  reset: jest.fn(),
  isFocused: jest.fn(() => true),
  canGoBack: jest.fn(() => true),
  dangerouslyGetParent: jest.fn(),
  dangerouslyGetState: jest.fn(),
  setParams: jest.fn(),
  setOptions: jest.fn(),
  addListener: jest.fn(),
  removeListener: jest.fn(),
  replace: jest.fn(),
  push: jest.fn(),
  pop: jest.fn(),
  popToTop: jest.fn(),
};

test('WelcomeScreen renders correctly', async () => {
  await ReactTestRenderer.act(() => {
    ReactTestRenderer.create(<WelcomeScreen navigation={mockNavigation as any} />);
  });
});
