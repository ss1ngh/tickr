import Link from "next/link"
import FeatureCard from "../ui/FeatureCard"

const features = [
    {
        title: "AI-Powered Insights",
        description: "Get intelligent market analysis and predictions powered by advanced machine learning algorithms.",
        span: "md:col-span-2"
    },
    {
        title: "Unified Dashboard",
        description: "Monitor all your assets in one place with a clean, intuitive interface.",
        span: "md:col-span-1"
    },
    {
        title: "Customizable Watchlists",
        description: "Create personalized watchlists to track every stock, crypto, and asset on your radar.",
        span: "md:col-span-1"
    },
    {
        title: "Real-Time Alerts",
        description: "Never miss a critical price swing with instant, reliable alerts delivered directly to your device.",
        span: "md:col-span-2 md:row-span-1"
    },
    {
        title: "Advanced Interactive Charts",
        description: "Dive deep into market data with fluid, professional-grade charts. Analyze trends and identify patterns with a fast, responsive interface.",
        span: "md:col-span-3"
    }
]

const Features = () => {
  return (
    <section id="features" className="py-16 bg-black  ">
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className="flex justify-center mb-20">
                <Link href='#features'>
                    <div className="inline-flex items-center gap-2 border border-white/15 px-4 py-1.5 rounded-full">
                        <span className="w-2 h-2 bg-[#C8FF00] rounded-full animate-pulse"></span>
                        <span className="text-white/70 text-sm font-medium">Features</span>
                    </div>
                </Link> 
            </div>
            
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium text-center mt-8 max-w-4xl mx-auto leading-tight">
                Your <span className="text-[#C8FF00]">unfair advantage</span> in the market
            </h2>

            <p className="text-center text-white/50 mt-4 max-w-2xl mx-auto text-lg">
                Everything you need to stay ahead, all in one powerful platform
            </p>

            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
                {features.map((feature, index) => (
                    <div 
                        key={index}
                        className={`${feature.span} group`}
                    >
                        <FeatureCard 
                            title={feature.title}
                            description={feature.description}
                            index={index}
                        />
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Features