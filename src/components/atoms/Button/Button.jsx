import { StyledButton } from './Button.style';
import { useNavigate } from 'react-router-dom';

const Button = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!props.path) {
      return null;
    }

    navigate(props.path);
  };

  return (
    <StyledButton onClick={handleClick} {...props}>
      {props.text}
    </StyledButton>
  );
};

export default Button;
