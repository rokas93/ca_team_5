import styled from 'styled-components';
import BREAKPOINTS from '../../../../shared/constants/breakpoints';

export const StyledArticle = styled.article`
  & img {
    display: block;

    width: 100%;
    height: auto;
  }
`;

export const StyledArticleHeading = styled.h4`
  ${({ theme }) => theme.h4}
  margin-top: 26px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    margin-top: 56px;
  }
`;

export const StyledArticleSubHeading = styled.p`
  ${({ theme }) => theme.title1}
`;

export const StyledArticleParagraph = styled.p`
  ${({ theme }) => theme.body2}
  white-space: pre-line;

  margin-top: 24px;
  margin-bottom: 48px;

  opacity: 0.6;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    margin-bottom: 68px;
  }
`;

export const StyledArticleSubParagraph = styled.p`
  ${({ theme }) => theme.body2}

  margin: 24px 0;

  opacity: 0.6;
`;

export const StyledArticleQuote = styled.p`
  ${({ theme }) => theme.body1}

  border-left: 3px solid ${({ theme }) => theme.black};
  padding: 5px 32px;

  opacity: 0.6;
`;
