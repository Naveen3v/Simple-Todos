// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, key, todoDeleted} = props
  const {title, id} = todoDetails

  const deleteTodo = () => {
    todoDeleted(id)
  }

  return (
    <li className="listitem">
      <p className="para">{title}</p>
      <button type="button" className="btn" onClick={deleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
