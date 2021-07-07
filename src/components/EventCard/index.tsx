import React from 'react';
import CardContent from './styles';
import { Event } from '../../types';

const EventCard: React.FC<{ eventElement: Event }> = ({ eventElement }) => (
    <CardContent>
      <div>
        <b>Name: </b> {eventElement.position?.name}
      </div>
      <div>
        <b>Starts at: </b>
        {new Date(eventElement?.startsAt).toLocaleString('fr', {
          dateStyle: 'short',
          timeStyle: 'short',
        })}
      </div>
      <div>
        <b>Ends at: </b>
        {new Date(eventElement?.endsAt).toLocaleString('fr', {
          dateStyle: 'short',
          timeStyle: 'short',
        })}
      </div>
    </CardContent>
);

export default EventCard;
