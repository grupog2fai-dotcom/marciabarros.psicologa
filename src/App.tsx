import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PrinciplesMarquee } from './components/PrinciplesMarquee';
import { Identification } from './components/Identification';
import { AboutMarcia } from './components/AboutMarcia';
import { Approach } from './components/Approach';
import { HowItWorks } from './components/HowItWorks';
import { OnlineCare } from './components/OnlineCare';
import { FirstContactQuiz } from './components/FirstContactQuiz';
import { Faq } from './components/Faq';
import { FinalContact } from './components/FinalContact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <main id="conteudo-principal">
        <Hero />
        <PrinciplesMarquee />
        <Identification />
        <AboutMarcia />
        <Approach />
        <HowItWorks />
        <OnlineCare />
        <FirstContactQuiz />
        <Faq />
        <FinalContact />
      </main>
      <Footer />
    </>
  );
};

export default App;
