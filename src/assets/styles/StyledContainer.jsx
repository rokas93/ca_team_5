import styled from 'styled-components';
import BREAKPOINTS from '../../shared/constants/breakpoints';

const StyledContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: ${BREAKPOINTS.sm}) {
    padding: 0 40px;
  }
`;

export default StyledContainer;
