import React from 'react';
import { StyledPostDiv, StyledText } from './Post.style';
import { useNavigate } from 'react-router-dom';

const Post = ({ image, span, title, desc, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${id}`);
  };

  return (
    <StyledPostDiv onClick={handleClick}>
      <img src={image} alt='' />
      <StyledText>
        <span>{span}</span>
        <h3>{title}</h3>
        <p>{desc}</p>
      </StyledText>
    </StyledPostDiv>
  );
};

export default Post;
