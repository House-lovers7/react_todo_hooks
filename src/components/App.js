import React, { useRef } from "react"
import { useTodo } from "./hooks/useTodo"
import { TodoTitle } from "../components/TodoTitle"
import { TodoAdd } from "../componentsTodoAdd"
import { TodoList } from "../componentsTodoList"

function App() {
  const {
    todoList,
    addTodoListItem,
    toggleTodoListItemStatus,
    deleteTodoListItem
  } = useTodo()

  const inputEl = useRef(null)

  const handleAddTodoListItem = () => {
    if (inputEl.current.value === "") return
    addTodoListItem(inputEl.current.value)
    inputEl.current.value = ""
  }

  console.log("TODOリスト:", todoList)
  const inCompletedList = todoList.filter((todo) => {
    return !todo.done
  })

  const completedList = todoList.filter((todo) => {
    return todo.done
  })

  return (
    <>
      <TodoTitle title="TODO進捗管理" as="h1" />
      <TodoAdd
        inputEl={inputEl}
        handleAddTodoListItem={handleAddTodoListItem}
      />

      <TodoTitle title="未完了TODOリスト" as="h2" />
      <TodoList
        todoList={inCompletedList}
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
      />
      <TodoTitle title="完了TODOリスト" as="h2" />
      <TodoList
        todoList={completedList}
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
      />
    </>
  )
}

export default App
