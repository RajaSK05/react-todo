import "./todoListItem.css"
import tickCheckbox from "../../../assets/tick-checkbox.svg"
import { useState } from "react"

const TodoListItem = (props) => {
  const { title, priority } = props.item
  const [isChecked, setChecked] = useState(false)

  return (
    <div className={`list-item-card ${priority}`}>
      {isChecked
        ? <img src={tickCheckbox} onClick={() => setChecked(false)} />
        : <div className="empty-checkbox" onClick={() => setChecked(true)} />
      }
      <span className={`list-item-title ${isChecked && 'strike'}`}>{title}</span>
    </div>
  );
}

export default TodoListItem;