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
    <div className="min-h-screen flex items-center justify-center mx-auto p-4">
      <div className="hidden md:block absolute inset-0 z-0">
        <PixelBlast
          variant="circle"
          pixelSize={4}
          color="#C8FF00"
          patternScale={3}
          patternDensity={2.0}
          pixelSizeJitter={1.2}
          enableRipples={true}
          rippleSpeed={1.2}
          rippleThickness={1.2}
          rippleIntensityScale={1.8}
          liquid={false}
          liquidStrength={1.5}
          liquidRadius={1.2}
          liquidWobbleSpeed={2}
          speed={1.2}
          edgeFade={0.3}
          transparent={true}
        />
      </div>

      {/* Form */}
      <div className="relative z-10 w-full max-w-md p-8 md:p-10 bg-neutral-900/10 border border-white/15 rounded-3xl backdrop-blur-lg">
        <div className="flex justify-center mb-6">
          <Link href="/">
            <Image src={logo2} alt="tickr logo" width={80} height={80} />
          </Link>
        </div>

        <div>
          {children}
        </div>
      </div>
    </div>
  );
}