import styled from 'styled-components';

const CardContent = styled.div`
  padding: 1em;
  height: fit-content;
  width: 30%;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border: 1px solid lightgrey;
  margin: 0.5em;
  transition: all 500ms ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }
`;

export default CardContent
