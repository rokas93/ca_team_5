import React from 'react';
import HighlightCard from '../HighlightCard';
import HIGHLIGHTS from '../../../../shared/constants/highlights';

import { StyledHighlights } from './Highlights.style';

const Highlights = () => {
  return (
    <StyledHighlights>
      {HIGHLIGHTS.map((element) => (
        <HighlightCard
          key={element.id}
          image={element.img}
          color={element.color}
          title={element.title}
          description={element.desc}
        />
      ))}
    </StyledHighlights>
  );
};

export default Highlights;
