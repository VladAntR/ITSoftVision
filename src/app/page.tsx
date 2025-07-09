import Main from '../components/main/main';
import About from '../components/about/about';
import Services from '../components/services/services';
import Cases from '../components/cases/cases';
import Faq from '../components/faq/faq';
import ContactUs from '../components/contact-us/contact';

export default function Home() {
  return (
    <>
      <Main />
      <About />
      <Services />
      <Cases />
      <Faq />
      <ContactUs />
    </>
  );
}
