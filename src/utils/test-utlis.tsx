// test-utils.js
import React, { ComponentType, ReactChild, ReactChildren } from 'react';
import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';

interface AuxProps {
  children: ReactChild | ReactChildren;
}

const queryClient = new QueryClient();

function renderWithQuery(ui: React.ReactElement) {
  const Wrapper = ({ children }: AuxProps) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
  return {
    ...render(ui, { wrapper: Wrapper as ComponentType }),
  };
}

// override render method

export * from '@testing-library/react';

export { renderWithQuery };
