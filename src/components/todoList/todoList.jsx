import TodoListItem from "./todoListItem/todoListItem";

const TodoList = () => {
  const LIST = [{
    title: 'List 1',
    priority: 'high'
  }, {
    title: 'List 2',
    priority: 'high'
  }, {
    title: 'List 3',
    priority: 'medium'
  }, {
    title: 'List 4',
    priority: 'low'
  }]

  return (
    <>
      {LIST.map((item) => <TodoListItem item={item} />)}
    </>
  );
}

export default TodoList;