
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import QuizSection from '@/components/QuizSection';
import DestinationsSection from '@/components/DestinationsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <QuizSection />
      <DestinationsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
