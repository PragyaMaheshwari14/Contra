'use client'
import Image from "next/image";
import acmeLogo from '@/assets/logo-acme.png';
import quantumLogo from '@/assets/logo-quantum.png';
import echoLogo from '@/assets/logo-echo.png';
import celestiaLogo from '@/assets/logo-celestial.png';
import pluseLogo from '@/assets/logo-pulse.png';
import apexLogo from '@/assets/logo-apex.png';
import {motion} from 'framer-motion';
export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right, transparent, black, transparent)]">
        <motion.div className="flex gap-14 flex-none pr-14"
         animate={{
            translateX: '-50%',
         }}
         transition={{
             duration:5,
             repeat:Infinity,
             ease:"linear",
             repeatType:"loop"
         }}
        >
          <Image src={acmeLogo} alt="Acme Logo" className="logo-ticker-image"/>
          <Image src={quantumLogo} alt="Quantum Logo" className="logo-ticker-image"/>
          <Image src={echoLogo} alt="Echo Logo" className="logo-ticker-image"/>
          <Image src={celestiaLogo} alt="Celestia Logo" className="logo-ticker-image"/>
          <Image src={pluseLogo} alt="Pluse Logo" className="logo-ticker-image"/>
          <Image src={apexLogo} alt="Apex Logo" className="logo-ticker-image"/>
          {/* Secong set if logo for animation */}
           <Image src={acmeLogo} alt="Acme Logo" className="logo-ticker-image"/>
          <Image src={quantumLogo} alt="Quantum Logo" className="logo-ticker-image"/>
          <Image src={echoLogo} alt="Echo Logo" className="logo-ticker-image"/>
          <Image src={celestiaLogo} alt="Celestia Logo" className="logo-ticker-image"/>
          <Image src={pluseLogo} alt="Pluse Logo" className="logo-ticker-image"/>
          <Image src={apexLogo} alt="Apex Logo" className="logo-ticker-image"/>
        </motion.div>
        </div>
      </div>
    </div>
  );
};
