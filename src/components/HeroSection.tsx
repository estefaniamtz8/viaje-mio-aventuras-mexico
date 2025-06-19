
import { Button } from '@/components/ui/button';
import { Map, Star, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-mexico-gradient opacity-10"></div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-orange-50 to-green-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-playfair font-bold mb-6 leading-tight">
              Descubre tu próximo
              <span className="text-gradient block">destino mexicano</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Responde nuestro cuestionario personalizado y encuentra el lugar perfecto para tu siguiente aventura en México.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg"
                onClick={() => document.getElementById('cuestionario')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Map className="w-5 h-5 mr-2" />
                Encuentra tu destino
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-4 text-lg"
                onClick={() => document.getElementById('destinos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver destinos
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-500 mr-2" />
                <span>4.9/5 puntuación</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 text-blue-500 mr-2" />
                <span>+10,000 viajeros</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="space-y-4">
                <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl shadow-2xl flex items-center justify-center text-white font-bold text-lg animate-float">
                  🏖️ Cancún
                </div>
                <div className="h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl shadow-2xl flex items-center justify-center text-white font-bold">
                  🏛️ CDMX
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl shadow-2xl flex items-center justify-center text-white font-bold">
                  🌵 Oaxaca
                </div>
                <div className="h-48 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-2xl flex items-center justify-center text-white font-bold text-lg animate-float" style={{ animationDelay: '1.5s' }}>
                  🏺 Guanajuato
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
