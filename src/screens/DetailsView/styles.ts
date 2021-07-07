import styled from 'styled-components';

export const DetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const EventDetails = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: 10px;
`;

export const EmployeesDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

export const EmployeeInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;

  img {
    margin: 10px;
    height: 30px;
    width: 30px;
    border-radius: 30px;
  }
`;

export const NotFound = styled.img`
  height: 100px;
  display: flex;
  align-items: center;
  flex-direction: row;
`;
