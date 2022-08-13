import styled from 'styled-components';
import BREAKPOINTS from '../../../../../shared/constants/breakpoints';

export const StyledCardWrapper = styled.div`
  display: flex;
  align-items: flex-end;

  background: url(${(props) => props.image});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;

  width: calc((100% / 2) - 10px);
  height: 350px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    width: calc((100% / 2) - 15px);
    height: 430px;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    width: calc((100% / 3) - 32px);
  }
`;

export const StyledCardBottomDiv = styled.div`
  width: 100%;

  background: #161616;
  color: #fff;

  padding: 24px 10px;

  transition: 0.3s ease-in;

  &:hover {
    opacity: 0.9;
  }
`;

// Card bottom-div title
export const StyledCardNameTitle = styled.h4`
  font-size: 16px;
  font-weight: 600;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    font-size: 20px;
  }
  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    font-size: 24px;
  }
`;

// Card bottom-div span
export const StyledCardPositionSpan = styled.span`
  color: #939191;
  font-weight: 600;
  font-size: 14px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    font-size: 16px;
  }
`;
