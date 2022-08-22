import React from 'react';
import Button from '../../../../components/atoms/Button';
import TEXTS from '../../../../shared/texts/texts';
import image from '../../../../assets/images/blog-hero-img.jpg';
import { useNavigate } from 'react-router-dom';

import {
  StyledBlog,
  StyledImageDiv,
  StyledOverlay,
  StyledText,
  StyledButtonDiv,
  StyledSpan,
  StyledLeftDiv,
  StyledRightDiv,
  StyledContentContainer,
} from './OurBlog.style';

const OurBlog = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate(`/blog/10`);

  return (
    <StyledBlog>
      <StyledLeftDiv>
        <StyledImageDiv>
          <img src={image} alt='' />
          <StyledOverlay></StyledOverlay>
        </StyledImageDiv>
        <h1>{TEXTS.blogPage.ourBlog.heading}</h1>
      </StyledLeftDiv>
      <StyledRightDiv>
        <StyledContentContainer>
          <StyledText>
            <span>{TEXTS.blogPage.ourBlog.label}</span>
            <h4>{TEXTS.blogPage.ourBlog.title}</h4>
            <p>{TEXTS.blogPage.ourBlog.desc}</p>
          </StyledText>
          <StyledButtonDiv>
            <Button
              onClick={handleClick}
              text={TEXTS.button.more}
              bg='primary'
            />
            <StyledSpan>{TEXTS.blogPage.ourBlog.postDate}</StyledSpan>
          </StyledButtonDiv>
        </StyledContentContainer>
      </StyledRightDiv>
    </StyledBlog>
  );
};

export default OurBlog;
