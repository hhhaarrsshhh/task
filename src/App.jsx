import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../src/components/Footer/Footer'
import Navbar from'../src/components/Navbar/Navbar'
import Section from './components/Section1/Section';import FooterDesc from './components/FooterDescripton/FooterDesc';
import Logo from './components/Logos/Logo';
import Section2 from './components/Section2/Section2';
import Section3 from './components/Section3/Section3';
import Section3_2 from './components/Section3/Section3_2';
import Section4 from './components/Section4/Section4';
import Contact from './components/ContactForm/Contact';


function App() {

  return (
    <>
    <Navbar/>
    <Section/>
    <Logo/>
    <Section2/>
    <Section3/>
    <Section3_2/>
    <Section4/>
    <Contact/>
    <FooterDesc/>
    <Footer/>

   
    </>
  )
}

export default App
