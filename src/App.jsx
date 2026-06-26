import HeroSection from './components/HeroSection';
import SocialProof from './components/SocialProof';
import FeaturesBento from './components/FeaturesBento';
import PricingSection from './components/PricingSection';
import NeuralBackground from './components/NeuralBackground'; // Add this import

export default function App() {
  return (
    // Added 'relative' so the background stays contained
    <main className="relative min-h-screen bg-oceanic-noir selection:bg-forsythia selection:text-oceanic-noir">
      <NeuralBackground /> 
      <HeroSection />
      <SocialProof />
      <FeaturesBento />
      <PricingSection />
    </main>
  );
}