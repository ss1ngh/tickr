'use client'

import React, { useEffect, useRef, memo } from 'react';

type Symbol = [string, string] | [string];

interface ChartWidgetProps {
  symbols?: Symbol[];
  colorTheme?: 'light' | 'dark';
  width?: string | number;
  height?: string | number;
}

const defaultSymbols: Symbol[] = [
  ["Apple", "NASDAQ:AAPL|3M"],
  ["Google", "NASDAQ:GOOGL|3M"],
  ["COINBASE:BTCUSD|12M"],
  ["NASDAQ:NVDA|12M"]
];

const ChartWidget: React.FC<ChartWidgetProps> = ({
  symbols = defaultSymbols,
  colorTheme = 'dark',
  width = "100%",
  height = "100%",
}) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Capture ref value to ensure the cleanup function uses the correct element.
    const containerRef = container.current;
    if (!containerRef) return;

    const widgetConfig = {
      "lineWidth": 2,
      "lineType": 0,
      "chartType": "area",
      "fontColor": "rgb(106, 109, 120)",
      "gridLineColor": "rgba(242, 242, 242, 0.06)",
      "backgroundColor": "rgba(15, 15, 15, 1)",
      "widgetFontColor": "#DBDBDB",
      "isTransparent": true,
      "locale": "en",
      "autosize": true,
      "symbols": symbols,
      "colorTheme": colorTheme,
    };

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify(widgetConfig);

    containerRef.appendChild(script);

    // Cleanup function to remove the widget when the component unmounts or re-renders.
    return () => {
      if (containerRef) {
        while (containerRef.firstChild) {
          containerRef.removeChild(containerRef.firstChild);
        }
      }
    };
  }, [symbols, colorTheme]); 

  return (
    <div
      ref={container}
      style={{
        width,
        height,
        transform: 'scale(0.9)',
        transformOrigin: 'top right', 
      }}
    />
  );
}

export default memo(ChartWidget);