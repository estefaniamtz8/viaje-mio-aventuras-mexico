
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Map } from 'lucide-react';

interface Destination {
  id: number;
  name: string;
  state: string;
  description: string;
  image: string;
  rating: number;
  price: string;
  highlights: string[];
}

const destinations: Destination[] = [
  {
    id: 1,
    name: "Cancún",
    state: "Quintana Roo",
    description: "Playas de arena blanca, aguas cristalinas y vida nocturna vibrante en el Caribe mexicano.",
    image: "🏖️",
    rating: 4.8,
    price: "Desde $8,000",
    highlights: ["Playas paradisíacas", "Vida nocturna", "Deportes acuáticos"]
  },
  {
    id: 2,
    name: "Ciudad de México",
    state: "CDMX",
    description: "La capital cultural de México con museos mundiales, gastronomía excepcional y historia milenaria.",
    image: "🏛️",
    rating: 4.7,
    price: "Desde $4,000",
    highlights: ["Museos", "Gastronomía", "Historia"]
  },
  {
    id: 3,
    name: "Oaxaca",
    state: "Oaxaca",
    description: "Cuna de la gastronomía mexicana, tradiciones ancestrales y artesanías únicas.",
    image: "🌮",
    rating: 4.9,
    price: "Desde $5,500",
    highlights: ["Gastronomía", "Artesanías", "Cultura"]
  },
  {
    id: 4,
    name: "San Miguel de Allende",
    state: "Guanajuato",
    description: "Pueblo mágico colonial con arquitectura española, arte y ambiente bohemio.",
    image: "🎨",
    rating: 4.6,
    price: "Desde $6,000",
    highlights: ["Arquitectura colonial", "Arte", "Ambiente bohemio"]
  },
  {
    id: 5,
    name: "Tulum",
    state: "Quintana Roo",
    description: "Ruinas mayas frente al mar, cenotes sagrados y playas eco-friendly.",
    image: "🌴",
    rating: 4.5,
    price: "Desde $7,500",
    highlights: ["Ruinas mayas", "Cenotes", "Eco-turismo"]
  },
  {
    id: 6,
    name: "Puerto Vallarta",
    state: "Jalisco",
    description: "Destino de playa en el Pacífico con malecón pintoresco y cultura jalisciense.",
    image: "🌅",
    rating: 4.4,
    price: "Desde $6,500",
    highlights: ["Malecón", "Playa del Pacífico", "Cultura jalisciense"]
  }
];

const DestinationsSection = () => {
  return (
    <section id="destinos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-gray-800 mb-4">
            Destinos más populares
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre los lugares más visitados y mejor valorados por nuestros viajeros
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <Card key={destination.id} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 flex items-center justify-center text-6xl">
                  {destination.image}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-bold">{destination.rating}</span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-gray-800">{destination.name}</h3>
                  <p className="text-sm text-gray-500">{destination.state}</p>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {destination.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {destination.highlights.map((highlight, index) => (
                    <span 
                      key={index}
                      className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-primary">{destination.price}</span>
                    <span className="text-sm text-gray-500 ml-1">por persona</span>
                  </div>
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    <Map className="w-4 h-4 mr-2" />
                    Ver más
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            Ver todos los destinos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
