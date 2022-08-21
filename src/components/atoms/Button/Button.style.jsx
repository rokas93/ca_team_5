import styled from 'styled-components';

export const StyledButton = styled.button`
  color: ${({ theme }) => theme.color.white};
  font-weight: 600;
  font-size: 18px;
  line-height: 175%;

  border: none;
  border-radius: 12px;

  padding: 16px 40px;

  cursor: pointer;

  background: ${(props) =>
    props.bg === 'primary'
      ? '#FF6433'
      : props.bg === 'black'
      ? '#1E1B1B'
      : props.bg};

  transition: 0.3s ease-in;

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
