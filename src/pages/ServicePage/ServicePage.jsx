import {
  StyledServicePage,
  StyledServicePageHeading,
} from './ServicePage.style';
import StyledContainer from '../../assets/styles/StyledContainer';
import { useParams } from 'react-router-dom';
import SERVICES from '../../shared/constants/services';
import Article from './components/Article/Article';
import Layout from './components/Layout';
import Sidebar from './components/Sidebar';
import CallToAction from '../../components/organisms/CallToAction';

const ServicePage = () => {
  const { id } = useParams();

  const service = SERVICES.find((service) => service.id === +id);
  const otherServices = SERVICES.filter((service) => service.id !== +id);

  return (
    <>
      <StyledServicePage>
        <StyledContainer>
          <StyledServicePageHeading>{service.text}</StyledServicePageHeading>
          <Layout>
            <Sidebar otherServices={otherServices} />
            <Article service={service} />
          </Layout>
        </StyledContainer>
      </StyledServicePage>
      <CallToAction />
    </>
  );
};

export default ServicePage;
