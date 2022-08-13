import React from 'react';
import {
  StyledSliderCard,
  StyledSliderCardText,
  StyledSliderCardName,
  StyledSliderCardLocation,
} from './SliderCard.style';

const SliderCard = ({ data }) => {
  return (
    <StyledSliderCard>
      <img src={data.avatar} alt={data.alt} />
      <StyledSliderCardName>{data.name}</StyledSliderCardName>
      <StyledSliderCardLocation>{data.location}</StyledSliderCardLocation>
      <StyledSliderCardText>{data.text}</StyledSliderCardText>
    </StyledSliderCard>
  );
};

export default SliderCard;
