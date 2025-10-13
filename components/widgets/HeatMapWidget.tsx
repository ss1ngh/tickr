'use client'

import React, { useEffect, useRef, memo } from 'react';

interface HeatmapWidgetProps {
  dataSource?: 'SPX500' | 'NASDAQ100' | 'WORLD';
  colorTheme?: 'light' | 'dark';
  width?: string | number;
  height?: string | number;
}

const HeatmapWidget: React.FC<HeatmapWidgetProps> = ({
  dataSource = 'SPX500',
  colorTheme = 'dark',
  width = "100%",
  height = "100%",
}) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const containerRef = container.current;
    if (!containerRef) return;

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js";
    script.type = "text/javascript";
    script.async = true;

    script.innerHTML = JSON.stringify({
      "dataSource": dataSource,
      "blockSize": "market_cap_basic",
      "blockColor": "change",
      "grouping": "sector",
      "locale": "en",
      "symbolUrl": "",
      "colorTheme": colorTheme,
      "exchanges": [],
      "hasTopBar": false,
      "isDataSetEnabled": false,
      "isZoomEnabled": true,
      "hasSymbolTooltip": true,
      "isMonoSize": false,
      "width": "100%",
      "height": "100%"
    });

    containerRef.appendChild(script);

    // Cleanup function to remove the widget when the component unmounts or re-renders.
    return () => {
      if (containerRef) {
        while (containerRef.firstChild) {
          containerRef.removeChild(containerRef.firstChild);
        }
      }
    };
  }, [dataSource, colorTheme]);

  return (
    <div ref={container} style={{ width, height }} />
  );
}

export default memo(HeatmapWidget);