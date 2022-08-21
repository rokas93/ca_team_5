import { uid } from 'uid';
import TEXTS from '../shared/texts/texts';
import {
  DiagServiceIcon,
  EngineServiceIcon,
  WheelServiceIcon,
  OilServiceIcon,
  BodyServiceIcon,
  BatteryServiceIcon,
  IncurServiceIcon,
  CustomServiceIcon,
} from '../assets/icons';
import diagnosticImg from '../assets/images/service-diagnostic.jpg';
import engineRepairImg from '../assets/images/service-engine-repair.jpg';
import wheelRepairImg from '../assets/images/service-wheel-repair.jpg';
import oilChangeImg from '../assets/images/service-oil-change.jpg';
import bodyWorkImg from '../assets/images/service-body-work.jpg';
import batteryImg from '../assets/images/service-battery.jpg';
import insuranceImg from '../assets/images/service-car-insurance.jpg';
import customImg from '../assets/images/service-custom.jpg';
import carWashImg from '../assets/images/service-car-wash.jpg';
import acRepairImg from '../assets/images/service-ac-repair.jpg';

const SERVICES = [
  {
    id: uid(),
    slug: 'car-diagnostic',
    text: `${TEXTS.services.diag}`,
    logo: <DiagServiceIcon />,
    title1: `${TEXTS.servicePage.title1}`,
    paragraph1: `${TEXTS.servicePage.paragraph1}`,
    title2: `${TEXTS.servicePage.title2}`,
    paragraph2: `${TEXTS.servicePage.paragraph2}`,
    quote: `${TEXTS.servicePage.quote}`,
    img: {
      image: diagnosticImg,
      alt: 'service-diagnostic.jpg',
    },
  },
  {
    id: uid(),
    slug: 'engine-repair',
    text: `${TEXTS.services.engine}`,
    logo: <EngineServiceIcon />,
    title1: `${TEXTS.servicePage.title1}`,
    paragraph1: `${TEXTS.servicePage.paragraph1}`,
    title2: `${TEXTS.servicePage.title2}`,
    paragraph2: `${TEXTS.servicePage.paragraph2}`,
    quote: `${TEXTS.servicePage.quote}`,
    img: {
      image: engineRepairImg,
      alt: 'service-engine-repair.jpg',
    },
  },
  {
    id: uid(),
    slug: 'wheel-repair',
    text: `${TEXTS.services.wheel}`,
    logo: <WheelServiceIcon />,
    title1: `${TEXTS.servicePage.title1}`,
    paragraph1: `${TEXTS.servicePage.paragraph1}`,
    title2: `${TEXTS.servicePage.title2}`,
    paragraph2: `${TEXTS.servicePage.paragraph2}`,
    quote: `${TEXTS.servicePage.quote}`,
    img: {
      image: wheelRepairImg,
      alt: 'service-wheel-repair.jpg',
    },
  },
  {
    id: uid(),
    slug: 'oil-change',
    text: `${TEXTS.services.oil}`,
    logo: <OilServiceIcon />,
    title1: `${TEXTS.servicePage.title1}`,
    paragraph1: `${TEXTS.servicePage.paragraph1}`,
    title2: `${TEXTS.servicePage.title2}`,
    paragraph2: `${TEXTS.servicePage.paragraph2}`,
    quote: `${TEXTS.servicePage.quote}`,
    img: {
      image: oilChangeImg,
      alt: 'service-oil-change.jpg',
    },
  },
  {
    id: uid(),
    slug: 'body-repair',
    text: `${TEXTS.services.body}`,
    logo: <BodyServiceIcon />,
    title1: `${TEXTS.servicePage.title1}`,
    paragraph1: `${TEXTS.servicePage.paragraph1}`,
    title2: `${TEXTS.servicePage.title2}`,
    paragraph2: `${TEXTS.servicePage.paragraph2}`,
    quote: `${TEXTS.servicePage.quote}`,
    img: {
      image: bodyWorkImg,
      alt: 'service-body-work.jpg',
    },
  },
  {
    id: uid(),
    slug: 'battery-change',
    text: `${TEXTS.services.batteries}`,
    logo: <BatteryServiceIcon />,
    title1: `${TEXTS.servicePage.title1}`,
    paragraph1: `${TEXTS.servicePage.paragraph1}`,
    title2: `${TEXTS.servicePage.title2}`,
    paragraph2: `${TEXTS.servicePage.paragraph2}`,
    quote: `${TEXTS.servicePage.quote}`,
    img: {
      image: batteryImg,
      alt: 'service-battery.jpg',
    },
  },
  {
    id: uid(),
    slug: 'car-insurance',
    text: `${TEXTS.services.insur}`,
    logo: <IncurServiceIcon />,
    title1: `${TEXTS.servicePage.title1}`,
    paragraph1: `${TEXTS.servicePage.paragraph1}`,
    title2: `${TEXTS.servicePage.title2}`,
    paragraph2: `${TEXTS.servicePage.paragraph2}`,
    quote: `${TEXTS.servicePage.quote}`,
    img: {
      image: insuranceImg,
      alt: 'service-car-insurance.jpg',
    },
  },
  {
    id: uid(),
    slug: 'custom-service',
    text: `${TEXTS.services.custom}`,
    logo: <CustomServiceIcon />,
    title1: `${TEXTS.servicePage.title1}`,
    paragraph1: `${TEXTS.servicePage.paragraph1}`,
    title2: `${TEXTS.servicePage.title2}`,
    paragraph2: `${TEXTS.servicePage.paragraph2}`,
    quote: `${TEXTS.servicePage.quote}`,
    img: {
      image: customImg,
      alt: 'service-custom.jpg',
    },
  },
  {
    id: uid(),
    slug: 'car-wash',
    text: `${TEXTS.services.wash}`,
    logo: <DiagServiceIcon />,
    title1: `${TEXTS.servicePage.title1}`,
    paragraph1: `${TEXTS.servicePage.paragraph1}`,
    title2: `${TEXTS.servicePage.title2}`,
    paragraph2: `${TEXTS.servicePage.paragraph2}`,
    quote: `${TEXTS.servicePage.quote}`,
    img: {
      image: carWashImg,
      alt: 'service-car-wash.jpg',
    },
  },
  {
    id: uid(),
    slug: 'ac-repair',
    text: `${TEXTS.services.ac}`,
    logo: <EngineServiceIcon />,
    title1: `${TEXTS.servicePage.title1}`,
    paragraph1: `${TEXTS.servicePage.paragraph1}`,
    title2: `${TEXTS.servicePage.title2}`,
    paragraph2: `${TEXTS.servicePage.paragraph2}`,
    quote: `${TEXTS.servicePage.quote}`,
    img: {
      image: acRepairImg,
      alt: 'service-ac-repair.jpg',
    },
  },
];

export default SERVICES;
