import Accordion from 'react-bootstrap/Accordion';
import { Button } from 'react-bootstrap';
import './styles/questions.scss'

export function Questions({ answer, question }) {
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>{question}</Accordion.Header>
                <Accordion.Body>
                    {answer}
                    <div className="mt-2">
                        <Button variant="success" className="me-2">Juste</Button>
                        <Button variant="danger">Faux</Button>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}