import styled, { css } from 'styled-components';

export const StyledInput = styled.input`
  ${({ theme }) => theme.body2};

  width: 100%;

  padding: 23px 30px;

  outline: none;
  border: none;

  border-radius: 2px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    padding: 23px 40px;
  }

  &::placeholder {
    ${({ theme }) => theme.body2};
    color: ${({ theme }) => theme.color.black};
  }

  ${(props) => {
    switch (props.fill) {
      case 'light':
        return css`
          background-color: ${({ theme }) => theme.color.white};

          &::placeholder {
            opacity: 0.5;
          }
        `;

      case 'dark':
        return css`
          background-color: ${({ theme }) => theme.color.lightGrey};

          &::placeholder {
            transition: opacity 0.5s;
          }

          &:focus::placeholder {
            opacity: 0.5;
          }
        `;

      default:
        break;
    }
  }}
`;
