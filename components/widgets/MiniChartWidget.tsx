'use client';

import React, { useEffect, useRef, memo } from 'react';

const MiniChartWidget: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const containerRef = container.current;

    if (!containerRef || containerRef.hasChildNodes()) {
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "symbol": "COINBASE:BTCUSD",
      "chartOnly": false,
      "dateRange": "12M",
      "noTimeScale": false,
      "colorTheme": "dark",
      "isTransparent": true,
      "locale": "en",
      "width": "100%",
      "height": "100%"
    });

    containerRef.appendChild(script);

    return () => {
      if (containerRef) {
        while (containerRef.firstChild) {
          containerRef.removeChild(containerRef.firstChild);
        }
      }
    };
  }, []);

  return (
    <div 
      className="tradingview-widget-container" 
      ref={container} 
      style={{ height: "90%", width: "90%" }} 
    />
  );
};

export default memo(MiniChartWidget);