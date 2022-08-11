import { uid } from 'uid';
import TEXTS from '../texts/texts';
import {
  DiagServiceIcon,
  EngineServiceIcon,
  WheelServiceIcon,
  OilServiceIcon,
  BodyServiceIcon,
  BatteryServiceIcon,
  IncurServiceIcon,
  CustomServiceIcon,
} from '../../assets/icons';

const SERVICES = [
  { id: uid(), text: `${TEXTS.services.diag}`, logo: <DiagServiceIcon /> },
  { id: uid(), text: `${TEXTS.services.engine}`, logo: <EngineServiceIcon /> },
  { id: uid(), text: `${TEXTS.services.wheel}`, logo: <WheelServiceIcon /> },
  { id: uid(), text: `${TEXTS.services.oil}`, logo: <OilServiceIcon /> },
  { id: uid(), text: `${TEXTS.services.body}`, logo: <BodyServiceIcon /> },
  {
    id: uid(),
    text: `${TEXTS.services.batteries}`,
    logo: <BatteryServiceIcon />,
  },
  { id: uid(), text: `${TEXTS.services.insur}`, logo: <IncurServiceIcon /> },
  { id: uid(), text: `${TEXTS.services.custom}`, logo: <CustomServiceIcon /> },
  { id: uid(), text: `${TEXTS.services.wash}`, logo: <DiagServiceIcon /> },
  { id: uid(), text: `${TEXTS.services.ac}`, logo: <EngineServiceIcon /> },
];

export default SERVICES;
