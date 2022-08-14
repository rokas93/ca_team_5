import styled from 'styled-components';

const StyledWrapper = styled.section`
  ${(props) => {
    switch (props.theme) {
      case 'darker':
        return 'background-color: #1E1B1B;';

      case 'dark':
        return 'background-color: #1E1B1B; opacity: 0.98;';

      case 'light':
        return 'background-color: #E2E6E9;';

      case 'lighter':
        return 'background-color: #F2F2F2;';

      case 'grey':
        return 'background-color: #F5F5F5;';

      default:
        return 'background-color: #fff;';
    }
  }}
`;

export default StyledWrapper;
