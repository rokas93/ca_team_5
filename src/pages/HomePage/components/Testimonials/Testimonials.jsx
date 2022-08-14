import { useState, useEffect } from 'react';
import {
  StyledTestimonialBottom,
  StyledTestimonialButtonsWrapper,
  StyledTestimonialPointer,
  StyledTestimonialButton,
  StyledTestimonials,
  StyledTestimonialsHeading,
  StyledTestimonialWrapper,
} from './Testimonials.style';
import StyledContainer from '../../../../assets/styles/StyledContainer';
import TEXTS from '../../../../shared/texts/texts';
import SliderCard from '../SliderCard';
import SLIDER_DATA from '../../../../data/slider';
import useViewport from '../../../../hooks/useViewport';
import usePagination from '../../../../hooks/usePagination';
import BREAKPOINTS from '../../../../shared/constants/breakpoints';
import { SmallArrowIcon } from '../../../../assets/icons';
import { motion } from 'framer-motion';

const TestimonialsMotion = motion(StyledTestimonialWrapper);

const Testimonials = () => {
  // -- States
  const [page, setPage] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [isNext, setIsNext] = useState(true);

  const { isSmall } = useViewport(BREAKPOINTS.lg);
  const data = usePagination(SLIDER_DATA, isSmall ? 1 : 2);

  // -- Functions
  const handleNextChange = (page, data) => {
    setIsNext(true);

    if (page + 1 < data.length) {
      return setPage(page + 1);
    }

    return setPage(0);
  };

  const handlePrevChange = (page, data) => {
    setIsNext(false);

    if (page <= 0) {
      return setPage(data.length - 1);
    }

    return setPage(page - 1);
  };

  // -- onTouchStart
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  // -- onTouchEnd
  const handleTouchEnd = (e) => {
    if (touchStart === null) {
      return;
    }

    const touchLength = touchStart - e.changedTouches[0].clientX;

    if (touchLength > 5) {
      return handleNextChange(page, data);
    }

    if (touchLength < 5) {
      return handlePrevChange(page, data);
    }

    setTouchStart(null);
  };

  // -- Side effects
  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextChange(page, data);
    }, 2000);

    return () => clearTimeout(timer);
  }, [page, data]);

  if (data.length - 1 < page) {
    return setPage(0);
  }

  // -- Motion variants
  const slider = {
    next: { x: `${isSmall ? '20px' : '50'}`, opacity: 0 },
    prev: { x: `${isSmall ? '-20px' : '-50'}`, opacity: 0 },
  };

  return (
    <StyledContainer>
      <StyledTestimonials>
        <StyledTestimonialsHeading>
          {TEXTS.homePage.testimonials.heading}
        </StyledTestimonialsHeading>
        <TestimonialsMotion
          key={page}
          initial={isNext ? 'next' : 'prev'}
          animate={{ x: 0, opacity: 1 }}
          exit={isNext ? 'next' : 'prev'}
          variants={slider}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <SliderCard data={data[page][0]} />
          {!isSmall && <SliderCard data={data[page][1]} />}
        </TestimonialsMotion>
        <StyledTestimonialBottom>
          {data.map((_, index) => (
            <StyledTestimonialPointer
              key={index}
              isActive={index === page}
            ></StyledTestimonialPointer>
          ))}

          <StyledTestimonialButtonsWrapper>
            <StyledTestimonialButton
              onClick={() => handlePrevChange(page, data)}
              clickType={'prev'}
            >
              <SmallArrowIcon />
            </StyledTestimonialButton>
            <StyledTestimonialButton
              onClick={() => handleNextChange(page, data)}
              clickType={'next'}
            >
              <SmallArrowIcon />
            </StyledTestimonialButton>
          </StyledTestimonialButtonsWrapper>
        </StyledTestimonialBottom>
      </StyledTestimonials>
    </StyledContainer>
  );
};

export default Testimonials;
