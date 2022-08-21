import {
  StyledServices,
  StyledServicesDesc,
  StyledServicesHeading,
  StyledServicesHighlighted,
} from './Services.style';
import TEXTS from '../../../../shared/texts/texts';
import ArrowButton from '../../../../components/atoms/ArrowButton';
import SERVICES from '../../../../data/services';
import Card from '../../../../components/atoms/Card';
import shortenText from '../../../../shared/func/shortenText';
import shuffleArray from '../../../../shared/func/shuffleArray';

const Services = () => {
  const services = shuffleArray(SERVICES);

  return (
    <StyledServices>
      <StyledServicesHighlighted>
        <img src={services[0].img.image} alt={services[0].img.alt} />
        <StyledServicesHeading>{services[0].text}</StyledServicesHeading>
        <StyledServicesDesc>
          {shortenText(services[0].paragraph1, 30)}
        </StyledServicesDesc>
        <ArrowButton
          path={`/services/${services[0].slug}`}
          text={TEXTS.servicesPage.services.buttonText}
        />
      </StyledServicesHighlighted>
      {services.slice(0, 6).map((service) => (
        <Card
          key={service.id}
          text={service.text}
          logo={service.logo}
          slug={service.slug}
        />
      ))}
    </StyledServices>
  );
};

export default Services;
