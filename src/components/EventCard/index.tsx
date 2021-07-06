import React from 'react';
import { CardContainer, CardContent } from './styles'

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

const EventCard: React.FC<{ eventElement: Event }> = ({eventElement}) => (
        <CardContainer>
            <CardContent>
                <div><b>Name: </b> {eventElement.position?.name}</div>
                <div><b>Starts at: </b>{new Date(eventElement?.startsAt).toLocaleString(
                    'fr',
                    {
                        dateStyle: 'short',
                        timeStyle: 'short',
                    }
                )}</div>
                <div><b>Ends at: </b>{new Date(eventElement?.endsAt).toLocaleString(
                    'fr',
                    {
                        dateStyle: 'short',
                        timeStyle: 'short',
                    }
                )}</div>
            </CardContent>
        </CardContainer>
    )

export default EventCard
