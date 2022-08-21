import styled, { css } from 'styled-components';
import BREAKPOINTS from '../../../shared/constants/breakpoints';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;

  & button {
    align-self: center;

    @media screen and (min-width: ${BREAKPOINTS.md}) {
      align-self: flex-start;
    }
  }
`;

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

  ${(props) =>
    props.fill === 'light' &&
    css`
      background-color: ${({ theme }) => theme.color.white};

      &::placeholder {
        opacity: 0.5;
      }
    `}

  ${(props) =>
    props.fill === 'dark' &&
    css`
      background-color: ${({ theme }) => theme.color.lightGrey};

      &::placeholder {
        transition: opacity 0.5s;
      }

      &:focus::placeholder {
        opacity: 0.5;
      }
    `}
`;

export const StyledInputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
