import React, { useState, useEffect } from 'react';
import { useInfiniteQuery } from 'react-query';
import { RouteComponentProps } from 'react-router-dom';
// @ts-ignore
import DatePicker from 'react-datepicker';
import api from '../../api';
import EventCard from '../../components/EventCard';
import { Event, Pagination } from '../../types';
import {
  AppContainer,
  LoadMoreButton,
  LoaderContainer,
  EventsContainer,
  FiltersContainer,
  Filter,
  ResetButton,
} from './styles';
import Loader from '../../components/Loader/Loader';
import logo from '../../assets/logo-only.png';
import 'react-datepicker/dist/react-datepicker.css';

interface Request {
  pagination: Pagination;
  items: Event[];
}
const EventsScreen: React.FC<RouteComponentProps> = () => {
  const [startsAt, setStartsAt] = useState(null);
  const [endsAt, setEndsAt] = useState(null);

  const {
    isLoading,
    isError,
    data,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    refetch,
  } = useInfiniteQuery<Request>(
    'Events',
    (args) => api.getEvents(10, 0, args, startsAt, endsAt),
    {
      getNextPageParam: (lastPage) => {
        const {
          pagination: { offset, limit, count },
        } = lastPage;
        if (offset + limit < count) {
          return offset + 10;
        }
        return false;
      },
    }
  );

  useEffect(() => {
    refetch();
  }, [startsAt, endsAt]);

  const resetFilter = () => {
    setStartsAt(null);
    setEndsAt(null);
  };

  if (isLoading)
    return (
      <LoaderContainer>
        <Loader src={logo} />
      </LoaderContainer>
    );
  if (isError) return <LoaderContainer>Error</LoaderContainer>;

  return (
    <AppContainer>
      <FiltersContainer>
        <Filter>
          <div>
            <b>Starts At: </b>
          </div>
          <DatePicker
            selected={startsAt}
            onSelect={setStartsAt}
            onChange={setStartsAt}
          />
        </Filter>
        <Filter>
          <div>
            <b>Ends At: </b>
          </div>
          <DatePicker
            selected={endsAt}
            onSelect={setEndsAt}
            onChange={setEndsAt}
          />
        </Filter>
        <ResetButton onClick={resetFilter}> Reset </ResetButton>
      </FiltersContainer>
      <EventsContainer>
        {data?.pages?.map((group: any) =>
          group.items?.map((event: Event) => (
            <EventCard eventElement={event} key={event.id} />
          ))
        )}
      </EventsContainer>
      {hasNextPage && (
        <LoadMoreButton
          disabled={isFetchingNextPage}
          onClick={() => fetchNextPage()}
        >
          {' '}
          {isFetchingNextPage ? 'Loading...' : 'Load More'}{' '}
        </LoadMoreButton>
      )}
    </AppContainer>
  );
};

export default EventsScreen;
