import { useBentoState } from '../hooks/useBentoState';
import { NeuralIcon, QuantumIcon, AutoScaleIcon } from './Icons';

const features = [
  { 
    id: 0, 
    title: 'Neural Pipeline', 
    desc: 'Accelerate data transformations with zero-latency edge compute clusters and intelligent caching.',
    Icon: NeuralIcon
  },
  { 
    id: 1, 
    title: 'Quantum Storage', 
    desc: 'Immutable, cryptographically secured data lakes mapped dynamically across distributed networks.',
    Icon: QuantumIcon
  },
  { 
    id: 2, 
    title: 'Auto-Scaling', 
    desc: 'Predictive resource allocation driven by real-time traffic analysis and bottleneck prevention.',
    Icon: AutoScaleIcon
  },
];

function getGridColumns(activeIndex) {
  // When nothing is active, all columns are equal
  if (activeIndex === null || activeIndex === undefined) {
    return '1fr 1fr 1fr';
  }
  // Active column gets 2.2fr, others get 0.9fr — smooth animatable values
  return features
    .map((_, i) => (i === activeIndex ? '2.2fr' : '0.9fr'))
    .join(' ');
}

export default function FeaturesBento() {
  const { activeIndex, setActiveIndex, isMobile } = useBentoState(768);

  return (
    <section className="bg-oceanic-noir py-24 px-6 font-sans text-arctic-powder min-h-[600px]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-mystic-mint font-mono text-sm tracking-widest uppercase mb-2">
          Architecture
        </h2>
        <h3 className="text-forsythia font-mono text-3xl md:text-4xl font-bold mb-12">
          Bento Grid Layout Reflow
        </h3>
        
        {isMobile ? (
          // --- MOBILE ACCORDION VIEW ---
          <div className="flex flex-col gap-4">
            {features.map((feat) => (
              <div 
                key={feat.id} 
                className="bg-nocturnal-expedition border border-mystic-mint/20 rounded-xl overflow-hidden transition-all duration-300 ease-in-out"
              >
                <button 
                  onClick={() => setActiveIndex(activeIndex === feat.id ? null : feat.id)}
                  className="w-full text-left p-6 font-mono font-bold text-lg hover:text-forsythia transition-colors duration-200 ease-out flex justify-between items-center"
                >
                  <div className="flex items-center gap-3">
                    <feat.Icon className={`w-6 h-6 transition-colors duration-300 ${activeIndex === feat.id ? 'text-forsythia' : 'text-mystic-mint'}`} />
                    {feat.title}
                  </div>
                  <span className={`transform transition-transform duration-200 ease-out ${activeIndex === feat.id ? 'rotate-180 text-forsythia' : ''}`}>
                    ▼
                  </span>
                </button>
                
                <div 
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${activeIndex === feat.id ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                >
                  <div className="overflow-hidden">
                    <p className="p-6 pt-0 text-mystic-mint font-sans leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // --- DESKTOP BENTO VIEW ---
          <div 
            className="grid gap-6 h-96"
            style={{
              gridTemplateColumns: getGridColumns(activeIndex),
              transition: 'grid-template-columns 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
            onMouseLeave={() => setActiveIndex(null)}
          >
            {features.map((feat) => {
              const isActive = activeIndex === feat.id;
              
              return (
                <div 
                  key={feat.id}
                  onMouseEnter={() => setActiveIndex(feat.id)}
                  aria-label={feat.title}
                  className={`
                    relative p-8 rounded-2xl border cursor-pointer overflow-hidden flex flex-col justify-between
                    transition-[background-color,border-color,box-shadow] duration-500 ease-out
                    ${isActive 
                      ? 'bg-nocturnal-expedition border-forsythia shadow-[0_0_30px_rgba(255,200,1,0.15)]' 
                      : 'bg-oceanic-noir border-mystic-mint/20 hover:border-mystic-mint/50'
                    }
                  `}
                >
                  {/* Icon */}
                  <div className="mb-auto">
                    <feat.Icon 
                      className={`w-10 h-10 mb-4 transition-all duration-500 ease-out ${
                        isActive ? 'text-forsythia scale-110' : 'text-mystic-mint/50 scale-100'
                      }`} 
                    />
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h4 
                      className="font-mono font-bold transition-all duration-500 ease-out"
                      style={{
                        fontSize: isActive ? '1.875rem' : '1.25rem',
                        color: isActive ? 'var(--color-forsythia)' : 'var(--color-arctic-powder)',
                      }}
                    >
                      {feat.title}
                    </h4>
                    
                    <div 
                      className="overflow-hidden transition-all duration-500 ease-out"
                      style={{
                        maxHeight: isActive ? '10rem' : '0',
                        opacity: isActive ? 1 : 0,
                        marginTop: isActive ? '1rem' : '0',
                      }}
                    >
                      <p className="text-mystic-mint font-sans text-lg max-w-md">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}