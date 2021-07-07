import React from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import api from '../../api';
import {
  DetailsContainer,
  EventDetails,
  EmployeesDetails,
  EmployeeInfo,
  NotFound,
  GoBackButton,
} from './styles';
import Loader from '../../components/Loader/Loader';
import { LoaderContainer } from '../EventsScreen/styles';
import logo from '../../assets/logo-only.png';
import notFound from '../../assets/not-found.png';
import back from '../../assets/backIcon.svg';
import { EventDetail } from '../../types';

interface MatchParams {
  id: string;
}
const DetailsView: React.FC<RouteComponentProps<MatchParams>> = ({
  match: {
    params: { id },
  },
}) => {
  const { isLoading, data, isError, error } = useQuery<EventDetail, AxiosError>(
    ['events', id],
    () => api.getEvent(id),
    { staleTime: Infinity }
  );
  const history = useHistory();

  if (isLoading)
    return (
      <LoaderContainer>
        <Loader src={logo} />
      </LoaderContainer>
    );

  if (isError)
    return (
      <LoaderContainer>
        {error?.response?.status === 404 && (
          <>
            <NotFound src={notFound} alt="not-found" />
            <div>Event not found</div>
          </>
        )}
      </LoaderContainer>
    );

  return (
    <DetailsContainer>
      <GoBackButton
        onClick={() => {
          history.goBack();
        }}
      >
        <img src={back} alt="back-button" />
        Go back
      </GoBackButton>
      <EventDetails>
        <div>
          <b>Name: </b> {data?.position?.name}
        </div>
        <div>
          <b>Starts at: </b>
          {new Date(data?.startsAt!).toLocaleString('fr', {
            dateStyle: 'short',
            timeStyle: 'short',
          })}
        </div>
        <div>
          <b>Ends at: </b>
          {new Date(data?.endsAt!).toLocaleString('fr', {
            dateStyle: 'short',
            timeStyle: 'short',
          })}
        </div>
      </EventDetails>
      <EmployeesDetails>
        <b>Employees</b>
        {data?.employees?.map(({ firstName, lastName, image }) => (
          <EmployeeInfo>
            <img src={image} alt={firstName + lastName} /> {firstName}{' '}
            {lastName}
          </EmployeeInfo>
        ))}
      </EmployeesDetails>
    </DetailsContainer>
  );
};

export default DetailsView;
