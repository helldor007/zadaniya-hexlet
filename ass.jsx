import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Изучить React", done: false },
    { id: 2, title: "Сделать задание", done: true },
  ]);
  const [title, setTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedTitle = title.trim();
    if (!trimmedTitle) return;

    const newTask = {
      id: crypto.randomUUID(),
      title: trimmedTitle,
      done: false,
    };

    setTasks((currentTasks) => [...currentTasks, newTask]);
    setTitle("");
  }

  function toggleTask(id) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  function deleteTask(id) {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== id)
    );
  }

  return (
    <main>
      <h1>Список задач</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Введите задачу"
        />
        <button type="submit">Добавить</button>
      </form>

      {tasks.length === 0 ? (
        <p>Список пуст</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <label>
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => toggleTask(task.id)}
                />
                <span
                  style={{
                    textDecoration: task.done ? "line-through" : "none",
                  }}
                >
                  {task.title}
                </span>
              </label>

              <button type="button" onClick={() => deleteTask(task.id)}>
                Удалить
              </button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}