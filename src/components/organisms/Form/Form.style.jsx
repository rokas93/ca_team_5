import styled from 'styled-components';
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

  padding: 23px 40px;

  outline: none;
  border: none;

  border-radius: 2px;

  &::placeholder {
    ${({ theme }) => theme.body2};
    color: ${({ theme }) => theme.color.black};

    opacity: 0.5;
  }
`;

export const StyledInputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
