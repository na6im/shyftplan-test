import React from 'react';
import { useInfiniteQuery } from 'react-query';
import { RouteComponentProps } from 'react-router-dom';
import api from '../../api';
import EventCard from '../../components/EventCard';
import { Event, Pagination } from '../../types';
import { AppContainer, LoadMoreButton, LoaderContainer, EventsContainer} from "./styles";

interface Request {
  pagination: Pagination;
  items: Event[];
}
const EventsScreen: React.FC<RouteComponentProps> = () => {
  const {
    isLoading,
    isError,
    data,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage
  } = useInfiniteQuery<Request>(
    'blocks',
    (args) => api.getEvents(10, 0, args),
    {
      getNextPageParam: (lastPage) => {
        const { pagination: { offset, limit, count } } = lastPage
        if(offset + limit < count) {
          return offset + 10
        }
        return false
      },
    }
  );

  if (isLoading) return <LoaderContainer>...loading</LoaderContainer>;
  if (isError) return <LoaderContainer>Error</LoaderContainer>;

  return (
      <AppContainer>
      <EventsContainer>
        {data?.pages?.map((group: any) =>
          group.items?.map((event: Event) => <EventCard eventElement={event} key={event.id}/>)
        )}
      </EventsContainer>
        {hasNextPage && <LoadMoreButton disabled={isFetchingNextPage} onClick={()=> fetchNextPage()}> {isFetchingNextPage ? 'Loading...' : 'Load More'} </LoadMoreButton>}
      </AppContainer>
  );
};

export default EventsScreen;
