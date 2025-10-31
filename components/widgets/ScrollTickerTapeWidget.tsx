'use client';

import React, { useEffect, useRef, memo } from 'react';

const ScrollTickerTapeWidget: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const containerRef = container.current;

    // Prevent script from re-injecting on every render
    if (!containerRef || containerRef.hasChildNodes()) {
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.type = 'text/javascript';
    script.async = true;
    
    script.innerHTML = JSON.stringify({
      "symbols": [
        { "proName": "FOREXCOM:SPXUSD", "title": "S&P 500 Index" },
        { "proName": "FX_IDC:EURUSD", "title": "EUR to USD" },
        { "proName": "BITSTAMP:BTCUSD", "title": "Bitcoin" },
        { "proName": "BITSTAMP:ETHUSD", "title": "Ethereum" },
        { "proName": "CRYPTOCAP:SOL", "title": "Solana" }
      ],
      "showSymbolLogo": true,
      "isTransparent": true,
      "displayMode": "compact",
      "colorTheme": "dark",
      "locale": "en",

      "height": 40,
      "width": "100%"
    });

    containerRef.appendChild(script);

    // 2. The cleanup function must use the saved 'containerRef'
    return () => {
      if (containerRef) {
        // Clear the contents of the container
        while (containerRef.firstChild) {
          containerRef.removeChild(containerRef.firstChild);
        }
      }
    };
  }, []);

  return (
    <div style={{ height: '40px' }}>
      <div 
        ref={container}
        style={{
          transform: 'scale(0.7)',
          transformOrigin: 'top'
        }}
      />
    </div>
  );
}

export default memo(ScrollTickerTapeWidget);