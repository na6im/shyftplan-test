import React from 'react';
import {useInfiniteQuery} from "react-query";
import { RouteComponentProps } from 'react-router-dom';
import api from '../../api';
import EventCard from "../../components/EventCard";

interface Position {
    color: string,
    id: number,
    name: string
}

interface Event {
    endsAt: Date,
    id: number,
    startsAt: Date
    position: Position
}

interface Pagination {
    count: number,
    limit: number,
    offset: number
}

interface Request {
    pagination: Pagination, items: Event[]
}
const EventsScreen: React.FC<RouteComponentProps> = () => {
    const limit = 10;
    const { isLoading, isError, data,
        // hasNextPage,
        // isFetchingNextPage
    } = useInfiniteQuery<Request>(
        'blocks',
        (args) => api.getEvents(limit, 0, args),
        {
            getNextPageParam: (lastPage, pages) => {
                console.log(lastPage, pages)
                return 2
            }
        },
);

    console.log(data, '----data---')
    if(isLoading) return <div>...loading</div>
    if(isError) return <div>Error</div>

    return (
            <div>
                {data?.pages?.map((group: any) => group.items?.map((event: Event) => <EventCard eventElement={event}/>))}
            </div>
        )
}

export default EventsScreen
