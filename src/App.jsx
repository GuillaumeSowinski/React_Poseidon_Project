import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Questions } from "./Questions"
import { FilterQuiz } from './FilterQuiz';
import { Container } from 'react-bootstrap';

function App() {
  const questions = [
    {
      id: 1,
      category: "Math",
      question: "Combien font 2+2 ?",
      answer: "4",
      validation: null,
    },
    {
      id: 2,
      category: "Science",
      question: "Quelle est la formule de l'eau ?",
      answer: "H2O",
      validation: null,
    },
    {
      id: 3,
      category: "Histoire",
      question: "Qui a découvert l'Amérique ?",
      answer: "Christophe Colomb",
      validation: null,
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState('Toutes');

  const filteredQuestions = selectedCategory === 'Toutes' ? questions : questions.filter(question => question.category === selectedCategory);

  return (
    <>

      <header>
        <Container>
          <h1>Quiz Interactif</h1>
        </Container>
      </header>
      <main>
        <Container>
          <FilterQuiz selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
          {filteredQuestions.map((question) => (
            <Questions
              key={question.id}
              question={question.question}
              answer={question.answer}
              validation={question.validation}
            />
          ))}
        </Container>
      </main >
    </>
  );
}

export default App
