import React from 'react';
import { StyledArrowButton } from './ArrowButton.style';
import { ArrowIcon } from '../../../assets/icons';
import { Link } from 'react-router-dom';

const ArrowButton = (props) => {
  return (
    <StyledArrowButton>
      <Link to={props.path}>
        <span>{props.text}</span>
        <ArrowIcon />
      </Link>
    </StyledArrowButton>
  );
};

export default ArrowButton;
