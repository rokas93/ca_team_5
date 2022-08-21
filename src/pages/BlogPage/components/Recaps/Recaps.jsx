import React from 'react';
import rmImage from '../../../../assets/images/rm-blog-img.jpg';
import TEXTS from '../../../../shared/texts/texts';
import RecapCard from '../RecapCard';
import ArrowButton from '../../../../components/atoms/ArrowButton';
import rcImage1 from '../../../../assets/images/blog-rc-img-1.jpg';
import rcImage2 from '../../../../assets/images/blog-rc-img-2.jpg';
import rcImage3 from '../../../../assets/images/blog-rc-img-3.jpg';

import {
  StyledRecapsDiv,
  StyledCardsDiv,
  StyledDesc,
  StyledHeading,
  StyledRmDiv,
  StyledSpan,
  StyledText,
} from './Recaps.style';

const Recaps = () => {
  return (
    <StyledRecapsDiv>
      <StyledRmDiv>
        <img src={rmImage} alt='rm-blog-img' />
        <StyledText>
          <StyledSpan>{TEXTS.blogPage.ourBlog.postDate}</StyledSpan>
          <StyledHeading>{TEXTS.blogPage.recaps.rm.title}</StyledHeading>
          <StyledDesc>{TEXTS.blogPage.recaps.rm.desc}</StyledDesc>
        </StyledText>
        <ArrowButton path={'/'} text={TEXTS.button.read} />
      </StyledRmDiv>
      <StyledCardsDiv>
        <RecapCard
          image={rcImage1}
          title={TEXTS.blogPage.recaps.postTitle1}
          date={TEXTS.blogPage.ourBlog.postDate}
        />
        <RecapCard
          image={rcImage2}
          title={TEXTS.blogPage.recaps.postTitle2}
          date={TEXTS.blogPage.ourBlog.postDate}
        />
        <RecapCard
          image={rcImage3}
          title={TEXTS.blogPage.recaps.postTitle3}
          date={TEXTS.blogPage.ourBlog.postDate}
        />
      </StyledCardsDiv>
    </StyledRecapsDiv>
  );
};

export default Recaps;
