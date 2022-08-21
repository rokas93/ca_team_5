import React from 'react';
import { StyleCard, StyleCardText } from './Card.styled';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const CardMotion = motion(StyleCard);

const Card = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/services/${props.slug}`);
  };

  return (
    <CardMotion
      onClick={handleClick}
      variants={props.variants}
      transition={{ delay: props.index / 10 }}
    >
      {props.logo}
      <StyleCardText>{props.text}</StyleCardText>
    </CardMotion>
  );
};

export default Card;
