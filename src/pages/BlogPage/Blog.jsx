import React from 'react';
import StyledWrapper from '../../assets/styles/StyledWrapper';
import StyledContainer from '../../assets/styles/StyledContainer';
import OurBlog from './components/OurBlog';
import Recaps from './components/Recaps/Recaps';
import Posts from './components/Posts';
import CallToAction from '../../components/organisms/CallToAction';
import Main from '../../components/atoms/Main';

const Blog = () => {
  return (
    <Main>
      <StyledWrapper>
        <OurBlog />
      </StyledWrapper>

      <StyledWrapper theme='grey'>
        <StyledContainer>
          <Recaps />
        </StyledContainer>
      </StyledWrapper>

      <StyledWrapper>
        <StyledContainer>
          <Posts />
        </StyledContainer>
      </StyledWrapper>

      <CallToAction />
    </Main>
  );
};

export default Blog;
