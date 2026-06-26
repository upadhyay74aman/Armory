import { useState, createContext, useContext, memo } from 'react';
import { pricingMatrix, computePrice } from '../config/pricingMatrix';

// --- Context: only PriceDisplay subscribes to this ---
const PricingContext = createContext();

const tierFeatures = {
  basic: [
    '2 Neural Pipelines',
    '10 GB Quantum Storage',
    'Community Support',
    'Basic Analytics',
    'Single Region Deploy',
  ],
  pro: [
    '25 Neural Pipelines',
    '500 GB Quantum Storage',
    'Priority Support (24/7)',
    'Advanced Analytics & Logs',
    'Multi-Region Deploy',
    'Custom Integrations',
    'Team Collaboration',
  ],
  enterprise: [
    'Unlimited Pipelines',
    '5 TB Quantum Storage',
    'Dedicated Account Manager',
    'Real-Time Telemetry',
    'Global Edge Network',
    'SSO & Compliance (SOC2)',
    'Custom SLA & Contracts',
  ],
};

const tiers = [
  { key: 'basic', title: 'Basic', btnText: 'Initialize', isFeatured: false },
  { key: 'pro', title: 'Professional', btnText: 'Deploy Cluster', isFeatured: true },
  { key: 'enterprise', title: 'Enterprise', btnText: 'Request Auth', isFeatured: false },
];

export default function PricingSection() {
  const [currency, setCurrency] = useState('USD');
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <PricingContext.Provider value={{ currency, isAnnual }}>
      <section className="bg-oceanic-noir py-24 px-6 font-sans relative overflow-hidden">
        {/* Subtle radial glow behind the section */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(255,200,1,0.04) 0%, transparent 70%)' }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-mystic-mint font-mono text-sm tracking-widest uppercase mb-3">
              Pricing
            </p>
            <h2 className="text-forsythia font-mono text-3xl md:text-4xl font-bold mb-4">
              Optimized Compute Tiers
            </h2>
            <p className="text-mystic-mint/70 max-w-lg mx-auto leading-relaxed">
              Select your pipeline configuration without layout thrashing. 
              Scale seamlessly as your workload evolves.
            </p>
          </div>

          {/* Controls — these live in the parent and SHOULD re-render on state change */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-16">
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="bg-nocturnal-expedition text-arctic-powder border border-mystic-mint/20 rounded-lg px-4 py-2.5 font-mono text-sm outline-none focus:border-forsythia transition-colors duration-200 cursor-pointer appearance-none pr-8"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23D9E8E2' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 12px center',
              }}
            >
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="INR">INR (₹)</option>
            </select>

            {/* Custom Toggle Switch */}
            <div className="flex items-center gap-3">
              <span className={`font-mono text-sm transition-colors duration-300 ${!isAnnual ? 'text-arctic-powder' : 'text-mystic-mint/40'}`}>
                Monthly
              </span>
              <button
                role="switch"
                aria-checked={isAnnual}
                onClick={() => setIsAnnual(!isAnnual)}
                className={`
                  relative w-14 h-7 rounded-full transition-colors duration-300 ease-out
                  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forsythia
                  ${isAnnual ? 'bg-forsythia' : 'bg-mystic-mint/20'}
                `}
              >
                <span
                  className={`
                    absolute top-0.5 left-0.5 w-6 h-6 rounded-full transition-all duration-300 ease-out shadow-md
                    ${isAnnual 
                      ? 'translate-x-7 bg-oceanic-noir' 
                      : 'translate-x-0 bg-mystic-mint/60'
                    }
                  `}
                />
              </button>
              <span className={`font-mono text-sm transition-colors duration-300 ${isAnnual ? 'text-arctic-powder' : 'text-mystic-mint/40'}`}>
                Annual
              </span>
              {isAnnual && (
                <span className="text-xs font-mono font-bold bg-forsythia/15 text-forsythia px-2.5 py-1 rounded-full border border-forsythia/30 animate-pulse">
                  Save 20%
                </span>
              )}
            </div>
          </div>

          {/* Pricing Cards — memo'd, only PriceDisplay inside re-renders on toggle */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {tiers.map((tier) => (
              <TierCard
                key={tier.key}
                tierKey={tier.key}
                title={tier.title}
                btnText={tier.btnText}
                isFeatured={tier.isFeatured}
                features={tierFeatures[tier.key]}
              />
            ))}
          </div>
        </div>
      </section>
    </PricingContext.Provider>
  );
}

// ---------------------------------------------------------------
// PriceDisplay — the ONLY context consumer. This is the isolated
// re-render boundary: when currency/isAnnual change, only this
// component and its subtree re-render, not the card around it.
// ---------------------------------------------------------------
const PriceDisplay = ({ tierKey, isFeatured }) => {
  const { currency, isAnnual } = useContext(PricingContext);
  const symbol = pricingMatrix.currencies[currency].symbol;
  const price = computePrice(tierKey, currency, isAnnual);

  return (
    <div className="mb-8">
      <div className="flex items-baseline gap-1">
        <span className={`text-2xl font-mono ${isFeatured ? 'text-forsythia' : 'text-mystic-mint'}`}>{symbol}</span>
        <span className="text-5xl font-mono font-bold text-arctic-powder tabular-nums transition-all duration-300">
          {price}
        </span>
      </div>
      <p className="text-mystic-mint/50 font-mono text-sm mt-1">
        per month{isAnnual ? ', billed annually' : ''}
      </p>
    </div>
  );
};

// ---------------------------------------------------------------
// TierCard — memo'd on static props. Title, features, button text,
// and isFeatured never change between renders, so React.memo skips
// re-rendering the entire card subtree (feature list, CTA, border
// effects) when the user toggles currency or billing cycle.
// ---------------------------------------------------------------
const TierCard = memo(({ tierKey, title, btnText, isFeatured, features }) => (
  <div
    className={`
      relative rounded-2xl p-[1px] transition-all duration-500 ease-out group
      ${isFeatured
        ? 'md:-mt-4 md:mb-4'
        : 'hover:-translate-y-1'
      }
    `}
    style={{
      background: isFeatured
        ? 'linear-gradient(135deg, var(--color-forsythia), var(--color-deep-saffron), var(--color-forsythia))'
        : 'linear-gradient(135deg, rgba(217,232,226,0.15), rgba(217,232,226,0.05))',
    }}
  >
    {/* "Most Popular" badge */}
    {isFeatured && (
      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
        <span className="bg-forsythia text-oceanic-noir font-mono text-xs font-bold px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap">
          Most Popular
        </span>
      </div>
    )}

    {/* Card inner */}
    <div
      className={`
        bg-nocturnal-expedition rounded-2xl p-8 h-full flex flex-col
        transition-shadow duration-500 ease-out
        ${isFeatured
          ? 'shadow-[0_0_40px_rgba(255,200,1,0.1)]'
          : 'group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]'
        }
      `}
    >
      {/* Tier name */}
      <h3 className={`font-mono font-bold text-lg mb-6 ${isFeatured ? 'text-forsythia' : 'text-arctic-powder'}`}>
        {title}
      </h3>

      {/* Price — only this re-renders on toggle */}
      <PriceDisplay tierKey={tierKey} isFeatured={isFeatured} />

      {/* Divider */}
      <div className={`h-px mb-6 ${isFeatured ? 'bg-forsythia/20' : 'bg-mystic-mint/10'}`} />

      {/* Features list */}
      <ul className="flex-1 space-y-3 mb-8">
        {features.map((feat, i) => (
          <li key={i} className="flex items-start gap-3 text-sm">
            <svg
              className={`w-4 h-4 mt-0.5 flex-shrink-0 ${isFeatured ? 'text-forsythia' : 'text-mystic-mint/60'}`}
              viewBox="0 0 16 16"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" />
            </svg>
            <span className="text-mystic-mint/80 leading-snug">{feat}</span>
          </li>
        ))}
      </ul>

      {/* CTA button */}
      <button
        className={`
          w-full py-3.5 rounded-xl font-mono font-bold text-sm tracking-wide
          transition-all duration-300 ease-out cursor-pointer
          ${isFeatured
            ? 'bg-forsythia text-oceanic-noir hover:bg-deep-saffron hover:shadow-[0_0_20px_rgba(255,200,1,0.3)] active:scale-[0.98]'
            : 'border border-mystic-mint/20 text-arctic-powder hover:border-mystic-mint/50 hover:bg-mystic-mint/5 active:scale-[0.98]'
          }
        `}
      >
        {btnText}
      </button>
    </div>
  </div>
));