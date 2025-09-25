import { Card, Button } from 'react-bootstrap';
import { useQuiz } from './context/QuizContext';

export function QuestionItem({ question }) {
    const { dispatch } = useQuiz();
    const handleValidate = (validation) => {
        dispatch({ type: 'VALIDATE_QUESTION', id: question.id, validation });
    };
    return (
        <Card>
            <Card.Body>
                <p>Réponse</p>
                <span>{question.answer}</span>
                <div className="mt-3">
                    <Button
                        variant="success"
                        className="me-2"
                        disabled={question.validation !== null}
                        onClick={() => handleValidate('juste')}
                    >
                        Juste
                    </Button>
                    <Button
                        variant="danger"
                        disabled={question.validation !== null}
                        onClick={() => handleValidate('faux')}
                    >
                        Faux
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}
