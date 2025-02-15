import Head from 'next/head';

import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

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
          <Services />
          <About />
          <Contact />
          <Footer />
        </main>
      </div>
    );
  }