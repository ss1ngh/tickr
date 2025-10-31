import type React from 'react'
import TradingViewWidget from '@/components/widgets/TradingViewWidget'
import { 
  HEATMAP_WIDGET_CONFIG, 
  MARKET_DATA_WIDGET_CONFIG, 
  MARKET_OVERVIEW_WIDGET_CONFIG, 
  TOP_STORIES_WIDGET_CONFIG
} from '@/lib/constants'
import TickerTape from '@/components/sections/TickerTape'

const Dashboard = () => {
  const scriptUrl = `https://s3.tradingview.com/external-embedding/embed-widget-`

  return (
    <div className='min-h-screen bg-black'>
      <div>
        <TickerTape />
      </div>

      <div className='mx-auto max-w-[1920px] px-3 py-1 md:px-4 lg:px-6'>
        <div className="my-6 md:my-4 flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 border border-white/15 px-4 py-1 rounded-full">
            <span className="w-2 h-2 bg-[#C8FF00] rounded-full animate-pulse"></span>
            <span className="text-white/70 text-sm font-semibold">Live</span>
          </div>

          <div className="text-center">
            <p className="text-medium text-neutral-400">
              Your live feed of every critical market move.
            </p>
          </div>
        </div>


        <div className='grid grid-cols-1 gap-3 lg:grid-cols-4 lg:gap-4'>

          {/* Market Overview (Original) */}
          <div className='lg:col-span-1 rounded-lg border border-neutral-800 bg-gradient-to-br from-neutral-900/50 to-black p-3 backdrop-blur-sm transition-all hover:border-neutral-700 md:p-4'>
            <TradingViewWidget
              title='Market Overview'
              scriptUrl={`${scriptUrl}market-overview.js`}
              config={MARKET_OVERVIEW_WIDGET_CONFIG}
              className='custom-chart'
              height={400}
            />
          </div>

          {/* Stock Heatmap (Original, resized) */}
          <div className='lg:col-span-2 rounded-lg border border-neutral-800 bg-gradient-to-br from-neutral-900/50 to-black p-3 backdrop-blur-sm transition-all hover:border-neutral-700 md:p-4'>
            <TradingViewWidget
              title='Stock Heatmap'
              scriptUrl={`${scriptUrl}stock-heatmap.js`}
              config={HEATMAP_WIDGET_CONFIG}
              height={400}
            />
          </div>

          {/* Market News (Original) */}
          <div className='lg:col-span-1 rounded-lg border border-neutral-800 bg-gradient-to-br from-neutral-900/50 to-black p-3 backdrop-blur-sm transition-all hover:border-neutral-700 md:p-4'>
            <TradingViewWidget
              title='Market News'
              scriptUrl={`${scriptUrl}timeline.js`}
              config={TOP_STORIES_WIDGET_CONFIG}
              className='custom-chart'
              height={400}
            />
          </div>

          {/* Market Quotes (Original, resized) */}
          <div className='lg:col-span-4 rounded-lg border border-neutral-800 bg-gradient-to-br from-neutral-900/50 to-black p-3 backdrop-blur-sm transition-all hover:border-neutral-700 md:p-4'>
            <TradingViewWidget
              title='Market Quotes'
              scriptUrl={`${scriptUrl}market-quotes.js`}
              config={MARKET_DATA_WIDGET_CONFIG}
              height={400} 
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Dashboard

