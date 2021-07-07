import styled from 'styled-components';

export const DetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const EventDetails = styled.div`
  width: 400px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: 10px;
`;

export const EmployeesDetails = styled.div`
  width: 200px;
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

export const GoBackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: fit-content;
  cursor: pointer;
  border-radius: 8px;
  padding: 5px 10px 5px 5px;
  background-color: rgb(67, 135, 45);
  color: white;
  border: none;
  margin: 10px;

  img {
    height: 15px;
    margin-right: 5px;
  }
`;
