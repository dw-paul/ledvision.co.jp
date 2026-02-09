import React from 'react';
import { LPHeader } from './components/lp/LPHeader';
import { LPHero } from './components/lp/LPHero';
import { LPPriceBlock } from './components/lp/LPPriceBlock';
import { LPStrengths } from './components/lp/LPStrengths';
import { LPUseCases } from './components/lp/LPUseCases';
import { LPFAQ } from './components/lp/LPFAQ';
import { LPFinalCTA } from './components/lp/LPFinalCTA';
import { LPContact } from './components/lp/LPContact';

export default function App() {
  return (
    <div className="relative bg-zinc-950 text-white">
      <LPHeader />
      <LPHero />
      <LPPriceBlock />
      <LPStrengths />
      <LPUseCases />
      <LPFAQ />
      <LPFinalCTA />
      <LPContact />
    </div>
  );
}
