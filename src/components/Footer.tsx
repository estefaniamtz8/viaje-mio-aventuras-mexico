
import { Heart, Map } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-mexico-gradient rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">VM</span>
              </div>
              <h3 className="text-2xl font-playfair font-bold">ViajeMío</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Tu compañero de viajes inteligente que te conecta con los destinos más increíbles de México. 
              Descubre lugares únicos basados en tus preferencias personales.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <span>Hecho con</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>en México</span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Destinos populares</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-primary transition-colors">Cancún</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Ciudad de México</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Oaxaca</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Tulum</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Puerto Vallarta</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Compañía</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-primary transition-colors">Acerca de</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog de viajes</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contacto</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Términos y condiciones</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Política de privacidad</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              © 2024 ViajeMío. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Síguenos:</span>
              <div className="flex space-x-3">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
