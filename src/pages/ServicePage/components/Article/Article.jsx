import React from 'react';
import {
  StyledArticle,
  StyledArticleHeading,
  StyledArticleParagraph,
  StyledArticleQuote,
  StyledArticleSubHeading,
  StyledArticleSubParagraph,
} from './Article.style';

const Article = ({ service }) => {
  return (
    <StyledArticle>
      <img src={service.img.image} alt={service.img.alt} />
      <StyledArticleHeading>{service.title1}</StyledArticleHeading>
      <StyledArticleParagraph>{service.paragraph1}</StyledArticleParagraph>
      <StyledArticleSubHeading>{service.title2}</StyledArticleSubHeading>
      <StyledArticleSubParagraph>
        {service.paragraph2}
      </StyledArticleSubParagraph>
      <StyledArticleQuote>{service.quote}</StyledArticleQuote>
    </StyledArticle>
  );
};

export default Article;
