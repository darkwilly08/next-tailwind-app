/* eslint-disable no-restricted-imports */
import React from 'react';
import { render, RenderOptions } from '@testing-library/react';

function CommonProviders({ children }: { children: JSX.Element }) {
  return <div>{children}</div>;
}

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: CommonProviders, ...options });

// Re-export everything
export * from '@testing-library/react';

// Override render method
export { customRender as render };
