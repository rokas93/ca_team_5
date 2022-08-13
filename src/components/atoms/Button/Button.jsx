import { StyledButton } from './Button.style';

const Button = (props) => {
  return <StyledButton {...props}>{props.text}</StyledButton>;
};

export default Button;
