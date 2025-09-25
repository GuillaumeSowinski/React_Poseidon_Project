import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/questions.scss';
import { Container } from 'react-bootstrap';
import { QuizProvider } from './context/QuizContext';
import { FilterQuiz } from './component/FilterQuiz';
import { QuizAccordion } from './component/QuizAccordion';

function App() {
  return (
    <QuizProvider>
      <header>
        <Container>
          <h1>Quiz Interactif</h1>
        </Container>
      </header>
      <main>
        <Container>
          <p className='mb-1'>Filtrer par catégorie</p>
          <FilterQuiz />
          <QuizAccordion />
        </Container>
      </main>
    </QuizProvider>
  );
}

export default App
