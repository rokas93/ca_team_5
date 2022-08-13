import brandImg1 from '../../assets/images/brand-img-1.png';
import brandImg2 from '../../assets/images/brand-img-2.png';
import brandImg3 from '../../assets/images/brand-img-3.png';
import brandImg4 from '../../assets/images/brand-img-4.png';
import brandImg5 from '../../assets/images/brand-img-5.png';

import { uid } from 'uid';

const BRANDS = [
  { id: uid(), img: `${brandImg1}`, alt: 'brandImg1' },
  { id: uid(), img: `${brandImg2}`, alt: 'brandImg2' },
  { id: uid(), img: `${brandImg3}`, alt: 'brandImg3' },
  { id: uid(), img: `${brandImg4}`, alt: 'brandImg4' },
  { id: uid(), img: `${brandImg5}`, alt: 'brandImg5' },
  { id: uid(), img: `${brandImg1}`, alt: 'brandImg1' },
  { id: uid(), img: `${brandImg2}`, alt: 'brandImg2' },
  { id: uid(), img: `${brandImg3}`, alt: 'brandImg3' },
  { id: uid(), img: `${brandImg4}`, alt: 'brandImg4' },
  { id: uid(), img: `${brandImg5}`, alt: 'brandImg5' },
];

export default BRANDS;
