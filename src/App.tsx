import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import EventsScreen from './screens/EventsScreen';
import logo from './assets/logo.svg';
import { Header, Logo } from './styles';
import DetailsView from './screens/DetailsView';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Header>
          <Logo src={logo} alt="img" />
        </Header>
        <BrowserRouter>
          <Route path="/" exact component={EventsScreen} />
          <Route path="/details/:id" exact component={DetailsView} />
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
