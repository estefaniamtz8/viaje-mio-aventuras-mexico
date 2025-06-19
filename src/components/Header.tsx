
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, Home, User, Heart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-mexico-gradient rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">VM</span>
            </div>
            <h1 className="text-2xl font-playfair font-bold text-gradient">ViajeMío</h1>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="#inicio" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Inicio
            </a>
            <a href="#destinos" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Destinos
            </a>
            <a href="#cuestionario" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Encuentra tu viaje
            </a>
            <a href="#testimonios" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Testimonios
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" size="sm">
              <User className="w-4 h-4 mr-2" />
              Iniciar Sesión
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Registrarse
            </Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            <nav className="flex flex-col space-y-3">
              <a href="#inicio" className="text-gray-700 hover:text-primary transition-colors">
                Inicio
              </a>
              <a href="#destinos" className="text-gray-700 hover:text-primary transition-colors">
                Destinos
              </a>
              <a href="#cuestionario" className="text-gray-700 hover:text-primary transition-colors">
                Encuentra tu viaje
              </a>
              <a href="#testimonios" className="text-gray-700 hover:text-primary transition-colors">
                Testimonios
              </a>
              <div className="flex flex-col space-y-2 pt-3">
                <Button variant="outline" size="sm">
                  Iniciar Sesión
                </Button>
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  Registrarse
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
