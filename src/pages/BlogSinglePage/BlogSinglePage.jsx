import React from 'react';
import StyledWrapper from '../../assets/styles/StyledWrapper';
import StyledContainer from '../../assets/styles/StyledContainer';
import { useParams } from 'react-router-dom';
import POST from '../../shared/constants/post';
import CallToAction from '../../components/organisms/CallToAction';

import {
  StyledTextContainer,
  StyledImg,
  StyledArticleContainer,
  StyledBr,
  StyledBigHd,
  StyledSmallHd,
  StyledPost,
} from './BlogSinglePage.style';
import Main from '../../components/atoms/Main';

const BlogSinglePage = () => {
  const { id } = useParams();

  console.log(typeof id);

  const post = POST.find((element) => `${element.id}` === id);

  return (
    <Main>
      <StyledWrapper>
        <StyledContainer>
          <StyledPost>
            <StyledTextContainer>
              <span>{post.date}</span>
              <h3>{post.firstTitle}</h3>
              <p>{post.desc1}</p>
            </StyledTextContainer>
            <StyledImg src={post.heroImage} alt='hero' />
            <StyledArticleContainer>
              <StyledBigHd>{post.secondTitle}</StyledBigHd>
              <p>{post.desc2}</p>
              <img src={post.postImg} alt='post' />
              <StyledSmallHd>{post.thirdTitle}</StyledSmallHd>
              <p>{post.desc3}</p>
              <StyledBr>{post.desc4}</StyledBr>
              <p>{post.desc5}</p>
            </StyledArticleContainer>
          </StyledPost>
        </StyledContainer>
      </StyledWrapper>

      <CallToAction />
    </Main>
  );
};

export default BlogSinglePage;
