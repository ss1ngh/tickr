'use client'

import useTradingViewWidget from '@/hooks/useTradingViewWidget';
import { cn } from '@/lib/utils';
import React, { memo } from 'react';

interface TradingViewWidgetProps {
    title? : string;
    scriptUrl : string;
    config : Record<string, unknown>;
    height? : number;
    className? : string;
}

const TradingViewWidget = ({ scriptUrl, config, height, className } : TradingViewWidgetProps) => {
  const containerRef = useTradingViewWidget(scriptUrl, config, height);


  return (
    <div className='w-full relative z-10'>
      <div className={cn("tradingview-widget-container", className)} ref={containerRef}>
        <div className="tradingview-widget-container__widget" style={{ height, width: "100%" }} />
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
