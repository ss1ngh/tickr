'use client';

import * as React from 'react';
import Image from 'next/image';
import screenshot from '../../public/assets/authSectionImage.png';

import Autoplay from 'embla-carousel-autoplay';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

import FeatureCard from '@/components/ui/FeatureCard';

export function AuthCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <div className="w-full">
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[plugin.current]}
        className="w-full"
      >
        <CarouselContent>
          <CarouselItem>
            <div className="p-1 flex items-center justify-center">
              <Image
                src={screenshot}
                alt="Hero Section"
                width={900}
                height={700}
                className="
                  rounded-xl 
                  border 
                  border-neutral-800 
                  shadow-2xl 
                  shadow-[#C8FF00]/10
                "
              />
            </div>
          </CarouselItem>

          {/* Slide 2: Feature Card */}
          <CarouselItem>
            {/* 1. Add flex utilities to center the card */}
            <div className="p-1 h-full flex items-center justify-center">
              {/* 2. Added glass-effect styles to this wrapper div */}
              <div className="w-full max-w-xl backdrop-blur-lg bg-neutral-900/40 border border-white/15 rounded-3xl overflow-hidden">
                <FeatureCard
                  index={0}
                  title="All market movements, in one view."
                  description="Create personalized watchlists, get instant price alerts, track your portfolio in real-time."
                />
              </div>
            </div>
          </CarouselItem>

          {/* Slide 3: Feature Card */}
          <CarouselItem>
            {/* 1. Add flex utilities to center the card */}
            <div className="p-1 h-full flex items-center justify-center">
              {/* 2. Added glass-effect styles to this wrapper div */}
              <div className="w-full max-w-xl backdrop-blur-lg bg-neutral-900/40 border border-white/15 rounded-3xl overflow-hidden">
                <FeatureCard
                  index={1}
                  title="Unified Dashboard"
                  description="Monitor all your assets in one place with a clean, intuitive interface."
                />
              </div>
            </div>
          </CarouselItem>

          {/* Slide 4: Feature Card */}
          <CarouselItem>
            {/* 1. Add flex utilities to center the card */}
            <div className="p-1 h-full flex items-center justify-center">
              {/* 2. Added glass-effect styles to this wrapper div */}
              <div className="w-full max-w-xl backdrop-blur-lg bg-neutral-900/40 border border-white/15 rounded-3xl overflow-hidden">
                <FeatureCard
                  index={2}
                  title="Customizable Watchlists"
                  description="Create personalized watchlists to track every stock, crypto, and asset on your radar."
                />
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}

