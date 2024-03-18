import { useState } from "react";
import Button from "../Button";
function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  const onWrite = (event) => {
    setTodo(event.target.value);
  };
  const onSave = () => {
    setTodos((todos) => [todo, ...todos]);
    setTodo("");
  };
  // 항목 클릭 시 체크 상태를 토글하는 함수
  const toggleCheck = (index) => {
    setCheckedItems((prevCheckedItems) => {
      const newCheckedItems = [...prevCheckedItems];
      newCheckedItems[index] = !newCheckedItems[index];
      return newCheckedItems;
    });
  };
  console.log(checkedItems);
  return (
    <div>
      <input value={todo} onChange={onWrite} placeholder="write Todo" />
      <Button text="save" onClick={onSave} />
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{
              textDecoration: checkedItems[index] ? "line-through" : "none",
            }}
          >
            <input
              type="checkbox"
              checked={checkedItems[index]}
              onChange={() => toggleCheck(index)}
            />
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
