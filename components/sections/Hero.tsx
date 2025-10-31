import Button from "../ui/Button"
import MiniChartWidget from "@/components/widgets/MiniChartWidget"
import ScrollTickerTapeWidget from "@/components/widgets/ScrollTickerTapeWidget"
import HeatMapWidget from "@/components/widgets/HeatMapWidget"
import ChartWidget from "@/components/widgets/ChartWidget"
import TickerTape from "./TickerTape"
const Hero = () => {
  return (
    <section className="py-4 md:py-8 lg:py-34 xl:36 overflow-x-clip bg-black">
        <div className="max-w-3xl mx-auto mb-4 lg:hidden">
          <TickerTape/>
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="absolute h-45 top-35 left-15 hidden xl:block">
            <MiniChartWidget/>
          </div>
          {/* <div className="absolute w-[500px] h-[300px] -right-15 top-50 hidden xl:block">
            <HeatMapWidget/>
          </div> */}
          <div className="absolute w-[300px] h-[100px] right-15 top-20 hidden xl:block">
            <ChartWidget/>
          </div>
    
          <h1 className="text-5xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-center mt-2 max-w-3xl md:max-w-xl lg:max-w-5xl mx-auto leading-tight">
            All 
            <span className="text-[#C8FF00]"> market movements</span>, in one view.
          </h1>
          
          <p className="text-center text-base sm:text-lg md:text-xl text-white/50 mt-6 md:mt-8 max-w-2xl mx-auto px-4">
            Create personalized watchlists, get instant price alerts, track your portfolio in real-time, and unlock the insights that give you an edge.
          </p>
          
          <form className="flex items-center border border-white/15 rounded-full p-2 mt-6 md:mt-8 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent px-4 py-2 outline-none text-white placeholder:text-white/40 flex-1 min-w-0" 
              />

              <Button 
                type="submit" 
                variant="primary" 
                className="whitespace-nowrap shrink-0"
                size="sm"
              >
                  Sign Up
              </Button>
          </form>
        </div>
    </section>
  )
}

export default Hero