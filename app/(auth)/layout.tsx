
import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo2 from '../../public/assets/logo2.svg';
import { AuthCarousel } from './AuthCarousel';

import PixelBlast from '@/components/ui/PixelBlast';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-black flex">
      {/* LeftsideForm */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-lg">
          <div className="space-y-6 flex justify-center lg:justify-start">
            <Link href="/">
              <Image src={logo2} alt="tickr logo" width={80} height={80} />
            </Link>
          </div>
          
          <div className="mt-6">
            {children}
          </div>
        </div>  
      </div>

      {/* RightSide */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-12 relative overflow-hidden">
        
        <div className="absolute inset-0 z-0">
          <PixelBlast
            variant="circle"
            pixelSize={3}
            color="#C8FF00"
            patternScale={3}
            patternDensity={1.0}
            pixelSizeJitter={1.0}
            enableRipples
            rippleSpeed={1.2}
            rippleThickness={0.0}
            rippleIntensityScale={1.5}
            liquid
            liquidStrength={0.0}
            liquidRadius={0.0}
            liquidWobbleSpeed={0}
            speed={0.6}
            edgeFade={0.25}
            transparent
          />
        </div>

        {/* 4. Wrap carousel in a relative div with z-10 to place it on top */}
        <div className="relative z-10">
          <AuthCarousel/>
        </div>
      </div>
    </div>
  );
}