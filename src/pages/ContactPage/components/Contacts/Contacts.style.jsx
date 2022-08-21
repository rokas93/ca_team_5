import styled from 'styled-components';
import BREAKPOINTS from '../../../../shared/constants/breakpoints';

export const StyledContacts = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-column-gap: 50px;
  grid-row-gap: 48px;

  padding-top: 50px;
  padding-bottom: 50px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    grid-template-columns: repeat(2, 1fr);

    padding-top: 80px;
    padding-bottom: 100px;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    padding-bottom: 128px;
    grid-column-gap: 139px;
  }

  & form {
    grid-row: 2;
    gap: 48px;
  }
`;

export const StyledContactsHeading = styled.h1`
  ${({ theme }) => theme.h1}

  text-align: center;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    grid-column: 1 / span 2;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    grid-column: 1;

    text-align: left;
  }
`;

export const StyledContactsRight = styled.div`
  grid-row: 3;

  display: flex;
  flex-direction: column;
  gap: 32px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    grid-row: 2;
  }
`;

export const StyledContactsInfo = styled.p`
  ${({ theme }) => theme.title2}

  white-space: pre-line;

  & span {
    ${({ theme }) => theme.body2}

    margin-bottom: 2px;

    display: block;

    opacity: 0.7;
  }
`;

export const StyledContactsForm = styled.form``;
