import Button from "../ui/Button"
import MiniChartWidget from "@/components/widgets/MiniChartWidget"
import ScrollTickerTapeWidget from "@/components/widgets/ScrollTickerTapeWidget"
import HeatMapWidget from "@/components/widgets/HeatMapWidget"
import ChartWidget from "@/components/widgets/ChartWidget"
const Hero = () => {
  return (
    <section className="py-2 md:py-20 lg:py-22 xl:24 overflow-x-clip bg-black">
        <div className="max-w-4xl mx-auto sm:hidden">
          <ScrollTickerTapeWidget/>
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="absolute h-50 top-45 hidden xl:block">
            <MiniChartWidget/>
          </div>
          {/* <div className="absolute w-[500px] h-[300px] -right-15 top-50 hidden xl:block">
            <HeatMapWidget/>
          </div> */}
          <div className="absolute w-[600px] h-[200px] -right-60 top-35 hidden xl:block">
            <ChartWidget/>
          </div>
    
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-center mt-10 lg:mt-4 max-w-3xl md:max-w-xl lg:max-w-5xl mx-auto leading-tight">
            All market movements, in one view.
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