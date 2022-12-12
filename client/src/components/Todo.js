// 1. 함수형 컴포넌트
// 2. input(checkbox) 와 label을 렌더링하는 컴포넌트!
// 3. App (부모 컴포넌트)에서 Todo (자식 컴포넌트) 1개를 렌더링
// import "./Todo.css";
const Todo = ({ todo }) => {
  return (
    <div className={todo.title}>
      <input
        type="checkbox"
        name={todo.title}
        id={todo.title}
        value={todo.title}
        defaultChecked={todo.done}
      />
      <label htmlFor={todo.title}>{todo.title}</label>
    </div>
  );
};
export default Todo;
