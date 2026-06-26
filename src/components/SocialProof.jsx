export default function SocialProof() {
  return (
    <section className="bg-oceanic-noir py-20 border-y border-mystic-mint/10">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Semantic Description List for Stats */}
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-center">
          <div className="flex flex-col">
            <dt className="order-2 text-mystic-mint text-sm uppercase tracking-wider font-sans mt-2">Uptime SLA</dt>
            <dd className="order-1 text-4xl md:text-5xl font-mono font-bold text-forsythia m-0">99.99%</dd>
          </div>
          <div className="flex flex-col">
            <dt className="order-2 text-mystic-mint text-sm uppercase tracking-wider font-sans mt-2">Avg Latency</dt>
            <dd className="order-1 text-4xl md:text-5xl font-mono font-bold text-arctic-powder m-0">0.4ms</dd>
          </div>
          <div className="flex flex-col">
            <dt className="order-2 text-mystic-mint text-sm uppercase tracking-wider font-sans mt-2">Queries / Sec</dt>
            <dd className="order-1 text-4xl md:text-5xl font-mono font-bold text-forsythia m-0">50M+</dd>
          </div>
          <div className="flex flex-col">
            <dt className="order-2 text-mystic-mint text-sm uppercase tracking-wider font-sans mt-2">Type II Certified</dt>
            <dd className="order-1 text-4xl md:text-5xl font-mono font-bold text-arctic-powder m-0">SOC 2</dd>
          </div>
        </dl>

        {/* Semantic Figure and Blockquote for Testimonial */}
        <figure className="max-w-4xl mx-auto bg-nocturnal-expedition border border-mystic-mint/20 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden m-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-oceanic-noir via-deep-saffron to-oceanic-noir"></div>
          
          <blockquote className="mb-8">
            <p className="text-xl md:text-3xl font-sans text-arctic-powder leading-relaxed m-0">
              "The zero-latency edge compute clusters completely transformed our pipeline. We scaled our data lakes globally in under 48 hours without a single dropped packet."
            </p>
          </blockquote>
          
          <figcaption className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-mystic-mint/20 rounded-full flex items-center justify-center font-mono font-bold text-forsythia" aria-hidden="true">
              CT
            </div>
            <div className="text-left">
              <cite className="not-italic block text-arctic-powder font-bold font-sans">Cameron T.</cite>
              <span className="text-mystic-mint text-sm font-mono block">Lead Architect, Synthetix</span>
            </div>
          </figcaption>
        </figure>

      </div>
    </section>
  );
}