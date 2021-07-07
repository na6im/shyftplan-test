import styled, { keyframes, ThemedStyledProps } from 'styled-components';

const blink = keyframes`
  0% {
    opacity: 0;
    transform: scale(0)
  }
  75%{
    opacity: 1;
    transform: scale(1)
    }
  100% {
    opacity: 0;
  }
  `;

const Loader = styled.img<ThemedStyledProps<any, any>>`
  height: ${(props) => props.size || '12vh'};
  width: ${(props) => props.size || '12vh'};
  border-radius: ${(props) => props.size || '12vh'};
  animation: ${blink} 3s linear infinite;
  margin: auto;
`;

export default Loader;
