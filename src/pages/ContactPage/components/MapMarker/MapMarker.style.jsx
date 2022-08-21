import styled from 'styled-components';
import BREAKPOINTS from '../../../../shared/constants/breakpoints';

export const StyledMapMarker = styled.div`
  padding: 0;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    padding: 30px;
  }

  & svg {
    display: inline-block;
    margin: 0 auto;
    padding-bottom: 20px;

    @media screen and (min-width: ${BREAKPOINTS.md}) {
      display: block;
    }
  }
`;

export const StyledMapMarkerParagraph = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-weight: 600;
  margin-bottom: 10px;
  white-space: pre-line;

  &:last-child {
    margin-bottom: 0;
  }

  & span {
    font-size: 12px;
    display: block;
    color: ${({ theme }) => theme.color.darkGrey};
  }
`;
