import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo2 from '../../public/assets/logo2.svg';
import PixelBlast from '@/components/ui/PixelBlast';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex items-center justify-center mx-auto p-4 overflow-hidden">
      <div className="hidden md:block absolute inset-0 z-0">
        <PixelBlast
          variant="circle"
          pixelSize={4}
          color="#C8FF00"
          patternScale={3}
          patternDensity={1.5}
          pixelSizeJitter={1.2}
          enableRipples={true}
          rippleSpeed={1.2}
          rippleThickness={1.0}
          rippleIntensityScale={1.2}
          liquid={false}
          liquidStrength={1.5}
          liquidRadius={1.2}
          liquidWobbleSpeed={2}
          speed={1.2}
          edgeFade={0.10}
          transparent={true}
        />
      </div>

      <div className="absolute inset-0 bg-black opacity-65 z-10" />
      
      <div className="relative z-20 w-full max-w-lg p-6 bg-neutral-600/20 border border-white/15 rounded-3xl backdrop-blur-lg my-2">
        <div className="flex justify-center mb-3">
          <Link href="/">
            <Image src={logo2} alt="tickr logo" width={60} height={60} />
          </Link>
        </div>

        <div className="overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}