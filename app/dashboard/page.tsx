import type React from 'react'
import TradingViewWidget from '@/components/widgets/TradingViewWidget'
import { 
  HEATMAP_WIDGET_CONFIG, 
  MARKET_DATA_WIDGET_CONFIG, 
  MARKET_OVERVIEW_WIDGET_CONFIG, 
  TOP_STORIES_WIDGET_CONFIG 
} from '@/lib/constants'

const Dashboard = () => {
  const scriptUrl = `https://s3.tradingview.com/external-embedding/embed-widget-`

  return (
    <div className='min-h-screen bg-black'>
      <div className='mx-auto max-w-[1920px] px-3 py-3 md:px-4 lg:px-6'>
        <div className='grid grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-4'>
          <div className='lg:col-span-1 rounded-lg border border-gray-800 bg-gradient-to-br from-gray-900/50 to-black p-3 backdrop-blur-sm transition-all hover:border-gray-700 md:p-4'>
            <TradingViewWidget
              title='Market Overview'
              scriptUrl={`${scriptUrl}market-overview.js`}
              config={MARKET_OVERVIEW_WIDGET_CONFIG}
              className='custom-chart'
              height={500}
            />
          </div>

          <div className='lg:col-span-2 rounded-lg border border-gray-800 bg-gradient-to-br from-gray-900/50 to-black p-3 backdrop-blur-sm transition-all hover:border-gray-700 md:p-4'>
            <TradingViewWidget
              title='Stock Heatmap'
              scriptUrl={`${scriptUrl}stock-heatmap.js`}
              config={HEATMAP_WIDGET_CONFIG}
              height={500}
            />
          </div>

          <div className='lg:col-span-1 rounded-lg border border-gray-800 bg-gradient-to-br from-gray-900/50 to-black p-3 backdrop-blur-sm transition-all hover:border-gray-700 md:p-4'>
            <TradingViewWidget
              title='Market News'
              scriptUrl={`${scriptUrl}timeline.js`}
              config={TOP_STORIES_WIDGET_CONFIG}
              className='custom-chart'
              height={480}
            />
          </div>

          <div className='lg:col-span-2 rounded-lg border border-gray-800 bg-gradient-to-br from-gray-900/50 to-black p-3 backdrop-blur-sm transition-all hover:border-gray-700 md:p-4'>
            <TradingViewWidget
              title='Market Quotes'
              scriptUrl={`${scriptUrl}market-quotes.js`}
              config={MARKET_DATA_WIDGET_CONFIG}
              height={480}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard