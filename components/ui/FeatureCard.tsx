export default function FeatureCard(props : {
    title : string;
    description : string;
    index?: number;
    children? : React.ReactNode;
}) {
    const {title, description, children, index = 0} = props;
    
    return(
        <div className="relative bg-neutral-900/50 border border-white/10 p-6 md:p-8 rounded-3xl h-full overflow-hidden group hover:border-[#C8FF00]/30 transition-all duration-300">
            
            <div className="absolute inset-0 bg-gradient-to-br from-[#C8FF00]/0 via-[#C8FF00]/0 to-[#C8FF00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C8FF00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
                
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#C8FF00]/10 border border-[#C8FF00]/20 mb-6">
                    <span className="text-[#C8FF00] font-bold text-lg">{String(index + 1).padStart(2, '0')}</span>
                </div>
                
                {children && (
                    <div className="aspect-video mb-6 rounded-2xl overflow-hidden bg-neutral-800/50 border border-white/5">
                        {children}
                    </div>
                )}
                
                <div>
                    <h3 className="text-2xl md:text-3xl font-medium text-white group-hover:text-[#C8FF00] transition-colors duration-300">
                        {title}
                    </h3>
                    <p className="text-white/50 mt-3 text-base md:text-lg leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#C8FF00]/5 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
    );
}