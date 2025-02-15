import Head from 'next/head';

import Hero from '../components/Hero';
import WhyUs from '../components/WhyUs';
import HowWeDo from '../components/HowWeDo';
import Services from '../components/Services';
import CaseStudies from '../components/CaseStudies';
import DemoRequest from '../components/DemoRequest';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';
 




export default function Home() {
    return (
      <div>
        <Head>
          <title>PGH Consultancy - Project Management Services</title>
          <meta name="description" content="Professional project management consulting services" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main>
          
          <Hero />
          <WhyUs />
          <HowWeDo />
          <CaseStudies />
          <Services />
          <DemoRequest />
          <Testimonials />
          <Contact />
          <Footer />
          <Copyright  />
        </main>
      </div>
    );
  }