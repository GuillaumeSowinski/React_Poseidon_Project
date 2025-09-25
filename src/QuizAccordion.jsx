import { Accordion } from 'react-bootstrap';
import { QuestionItem } from './QuestionItem';
import { useQuiz } from './context/QuizContext';
import './styles/quizzAccordion.scss';

export function QuizAccordion() {
    const { state } = useQuiz();
    const filteredQuestions = state.selectedCategory === 'Toutes'
        ? state.questions
        : state.questions.filter(question => question.category === state.selectedCategory);

    return (
        <Accordion>
            {filteredQuestions.map((question, index) => (
                <Accordion.Item eventKey={index} key={question.id}>
                    <Accordion.Header>
                        <div className='validation'>
                            <span>{question.question}</span>
                            {question.validation && (
                                <span style={{ color: question.validation === 'juste' ? '#198754' : '#dc3545', }}>
                                    {question.validation === 'juste' ? 'Juste' : 'Faux'}
                                </span>
                            )}
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <QuestionItem question={question} />
                    </Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    );
}
