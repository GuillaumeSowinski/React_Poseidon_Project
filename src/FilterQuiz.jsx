import { Form } from "react-bootstrap"
import './styles/filterCategory.scss'

export function FilterQuiz({ selectedCategory, setSelectedCategory }) {
  return (
    <Form.Select
      value={selectedCategory}
      onChange={event => setSelectedCategory(event.target.value)}
    >
      <option>Toutes</option>
      <option>Math</option>
      <option>Histoire</option>
      <option>Science</option>
    </Form.Select>
  );
}