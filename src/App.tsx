import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import EventsScreen from './screens/EventsScreen';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <BrowserRouter>
          <Route path="/" exact component={EventsScreen} />
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
