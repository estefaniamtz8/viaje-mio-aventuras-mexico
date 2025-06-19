
import { Card, CardContent } from '@/components/ui/card';
import { Star, Heart } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  destination: string;
  rating: number;
  comment: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "María González",
    location: "Monterrey, NL",
    destination: "Oaxaca",
    rating: 5,
    comment: "ViajeMío me ayudó a descubrir Oaxaca y fue una experiencia increíble. La comida, la cultura y la gente son maravillosas. ¡Totalmente recomendado!",
    avatar: "👩‍🦱"
  },
  {
    id: 2,
    name: "Carlos Hernández",
    location: "Guadalajara, JAL",
    destination: "Tulum",
    rating: 5,
    comment: "Las recomendaciones fueron perfectas para mi estilo de viaje. Tulum superó todas mis expectativas. Los cenotes son algo de otro mundo.",
    avatar: "👨‍💼"
  },
  {
    id: 3,
    name: "Ana Rodríguez",
    location: "Puebla, PUE",
    destination: "San Miguel de Allende",
    rating: 5,
    comment: "Como amante del arte, San Miguel de Allende fue perfecto. El cuestionario realmente entendió mis gustos y me llevó al lugar ideal.",
    avatar: "👩‍🎨"
  },
  {
    id: 4,
    name: "David López",
    location: "Tijuana, BC",
    destination: "Ciudad de México",
    rating: 4,
    comment: "Excelente plataforma. Me ayudó a planificar un fin de semana perfecto en CDMX. Los museos y la gastronomía fueron espectaculares.",
    avatar: "👨‍🍳"
  },
  {
    id: 5,
    name: "Sofía Martínez",
    location: "Mérida, YUC",
    destination: "Puerto Vallarta",
    rating: 5,
    comment: "El algoritmo de ViajeMío es increíble. Puerto Vallarta resultó ser exactamente lo que buscaba para mis vacaciones familiares.",
    avatar: "👩‍👧‍👦"
  },
  {
    id: 6,
    name: "Roberto Sánchez",
    location: "León, GTO",
    destination: "Cancún",
    rating: 5,
    comment: "Primera vez usando la plataforma y quedé fascinado. Cancún fue perfecto para mi luna de miel. ¡Gracias ViajeMío!",
    avatar: "👨‍❤️‍👩"
  }
];

const TestimonialsSection = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonios" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-gray-800 mb-4">
            Lo que dicen nuestros viajeros
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Miles de mexicanos ya han encontrado su destino perfecto con ViajeMío
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                  <Heart className="w-5 h-5 text-red-400" />
                </div>

                <div className="flex items-center mb-3">
                  {renderStars(testimonial.rating)}
                  <span className="ml-2 text-sm text-gray-600">
                    Viajó a {testimonial.destination}
                  </span>
                </div>

                <p className="text-gray-600 leading-relaxed text-sm italic">
                  "{testimonial.comment}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-3">
            <Star className="w-5 h-5 text-yellow-500 fill-current" />
            <span className="font-bold text-gray-800">4.8/5</span>
            <span className="text-gray-600">• +10,000 reseñas verificadas</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
