
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Map } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: { value: string; label: string; emoji: string }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "¿Qué tipo de clima prefieres?",
    options: [
      { value: "tropical", label: "Tropical y cálido", emoji: "🌴" },
      { value: "templado", label: "Templado y fresco", emoji: "🌸" },
      { value: "seco", label: "Seco y árido", emoji: "🌵" },
      { value: "frio", label: "Frío y montañoso", emoji: "🏔️" }
    ]
  },
  {
    id: 2,
    question: "¿Qué actividades te interesan más?",
    options: [
      { value: "playa", label: "Playa y deportes acuáticos", emoji: "🏖️" },
      { value: "cultura", label: "Cultura e historia", emoji: "🏛️" },
      { value: "naturaleza", label: "Naturaleza y aventura", emoji: "🌲" },
      { value: "gastronomia", label: "Gastronomía local", emoji: "🌮" }
    ]
  },
  {
    id: 3,
    question: "¿Cuál es tu presupuesto aproximado?",
    options: [
      { value: "bajo", label: "Económico (< $5,000)", emoji: "💰" },
      { value: "medio", label: "Moderado ($5,000 - $15,000)", emoji: "💳" },
      { value: "alto", label: "Confortable ($15,000 - $30,000)", emoji: "💎" },
      { value: "premium", label: "Premium (> $30,000)", emoji: "👑" }
    ]
  }
];

const QuizSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (value: string) => {
    setAnswers(prev => ({ ...prev, [questions[currentQuestion].id]: value }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const getRecommendation = () => {
    const climate = answers[1];
    const activity = answers[2];
    
    if (climate === "tropical" && activity === "playa") {
      return {
        destination: "Riviera Maya, Quintana Roo",
        description: "Playas paradisíacas, cenotes cristalinos y la cultura maya te esperan en este destino tropical.",
        image: "🏖️🌴"
      };
    } else if (activity === "cultura") {
      return {
        destination: "San Miguel de Allende, Guanajuato",
        description: "Ciudad colonial llena de arte, historia y arquitectura espectacular. Patrimonio de la Humanidad.",
        image: "🏛️🎨"
      };
    } else if (climate === "templado" && activity === "naturaleza") {
      return {
        destination: "Valle de Bravo, Estado de México",
        description: "Pueblo mágico rodeado de bosques, lago y actividades al aire libre. Perfecto para desconectar.",
        image: "🌲🏞️"
      };
    } else {
      return {
        destination: "Oaxaca de Juárez, Oaxaca",
        description: "Cuna de la gastronomía mexicana, rica cultura indígena y hermosa arquitectura colonial.",
        image: "🌮🎭"
      };
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
  };

  if (showResult) {
    const recommendation = getRecommendation();
    return (
      <section id="cuestionario" className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center shadow-2xl">
            <CardHeader>
              <CardTitle className="text-3xl font-playfair text-gradient mb-4">
                ¡Tu destino perfecto es!
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-6xl mb-4">{recommendation.image}</div>
              <h3 className="text-2xl font-bold text-gray-800">{recommendation.destination}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{recommendation.description}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button className="bg-primary hover:bg-primary/90" size="lg">
                  <Map className="w-5 h-5 mr-2" />
                  Ver más detalles
                </Button>
                <Button variant="outline" size="lg" onClick={resetQuiz}>
                  Hacer quiz nuevamente
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="cuestionario" className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-playfair font-bold text-gray-800 mb-4">
            Encuentra tu destino perfecto
          </h2>
          <p className="text-xl text-gray-600">
            Responde estas preguntas y te recomendaremos el lugar ideal para ti
          </p>
        </div>

        <Card className="max-w-2xl mx-auto shadow-2xl">
          <CardHeader>
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-500">
                Pregunta {currentQuestion + 1} de {questions.length}
              </span>
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-gray-800">
              {questions[currentQuestion].question}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.value)}
                  className={`p-4 rounded-xl border-2 text-left transition-all duration-200 hover:shadow-md ${
                    answers[questions[currentQuestion].id] === option.value
                      ? 'border-primary bg-primary/5 shadow-md'
                      : 'border-gray-200 hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{option.emoji}</span>
                    <span className="font-medium text-gray-800">{option.label}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex justify-between pt-6">
              <Button 
                variant="outline" 
                onClick={prevQuestion}
                disabled={currentQuestion === 0}
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Anterior
              </Button>
              
              <Button 
                onClick={nextQuestion}
                disabled={!answers[questions[currentQuestion].id]}
                className="bg-primary hover:bg-primary/90"
              >
                {currentQuestion === questions.length - 1 ? 'Ver recomendación' : 'Siguiente'}
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default QuizSection;
