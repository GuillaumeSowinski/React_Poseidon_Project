import { Form } from "react-bootstrap";
import './styles/filterCategory.scss';
import { useQuiz } from './context/QuizContext';

export function FilterQuiz() {
  const { state, dispatch } = useQuiz();
  return (
    <Form.Select
      value={state.selectedCategory}
      onChange={event => dispatch({ type: 'SET_CATEGORY', category: event.target.value })}
    >
      <option>Toutes</option>
      <option>Math</option>
      <option>Histoire</option>
      <option>Science</option>
    </Form.Select>
  );
}