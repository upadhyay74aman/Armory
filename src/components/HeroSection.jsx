// src/components/HeroSection.jsx

export default function HeroSection() {
  return (
    <header className="relative pt-32 pb-20 px-6 overflow-hidden flex flex-col items-center justify-center min-h-[80vh]">
      {/* ASSET INTEGRATION: If you have a background grid SVG or node map in your asset package, 
        place it in the public folder and call it here with an <img> tag using absolute positioning.
      */}
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Semantic h2 for pre-header SEO */}
        <h2 className="text-mystic-mint font-mono tracking-[0.2em] uppercase text-sm md:text-base mb-6 animate-[fadeIn_0.5s_ease-out]">
          System Protocol Initialized
        </h2>
        
        {/* Semantic h1 for primary indexing */}
        <h1 className="text-arctic-powder font-sans text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-8">
          Automate Data with <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-forsythia to-deep-saffron">
            Zero Latency Intelligence.
          </span>
        </h1>
        
        <p className="text-mystic-mint font-sans text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Deploy cryptographically secured data lakes and predictive scaling clusters in milliseconds. Built for high-velocity engineering teams.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 font-mono">
          <button className="w-full sm:w-auto px-8 py-4 bg-forsythia text-oceanic-noir font-bold rounded-lg hover:bg-deep-saffron transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(255,200,1,0.3)]">
            Start Free Trial
          </button>
          
          <button className="w-full sm:w-auto px-8 py-4 bg-transparent text-arctic-powder border border-mystic-mint/30 hover:border-forsythia rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
            <span>View Documentation</span>
            {/* Insert arrow SVG from asset pack here */}
            <span aria-hidden="true">→</span> 
          </button>
        </div>
      </div>
    </header>
  );
}