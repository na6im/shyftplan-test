import styled from 'styled-components';

export const AppContainer = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 2em;
`;
export const EventsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-flow: row wrap;
`;

export const LoadMoreButton = styled.button`
  cursor: pointer;
  padding: 10px 20px;
  margin: auto;
  transition: all 500ms ease;
  border-radius: 5px;
  background-color: rgb(67, 135, 45);
  color: white;
  font-weight: bold;
  border: none;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1.05);
  }
`;

export const LoaderContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const FiltersContainer = styled.div`
    display: flex;
    flex-direction: row;
  align-items: center;
`
export const Filter = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 10px;
`

export const ResetButton = styled.button`
  cursor: pointer;
  padding: 5px 20px;
  margin: auto;
  transition: all 500ms ease;
  border-radius: 5px;
  background-color: rgb(67, 135, 45);
  color: white;
  font-weight: bold;

  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1.05);
  }
`
