import React from "react";

function UserCard({ name, age }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Возраст: {age}</p>
    </div>
  );
}

function Card({ children }) {
  return <div className="card">{children}</div>;
}

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

export default function App() {
  const users = [
    { id: 1, name: "Анна", age: 22 },
    { id: 2, name: "Иван", age: 28 },
    { id: 3, name: "Мария", age: 19 },
  ];

  function showAlert() {
    alert("Нажата первая кнопка");
  }

  function writeToConsole() {
    console.log("Нажата вторая кнопка");
  }

  return (
    <main>
      <h1>Карточки пользователей</h1>

      <div className="users">
        {users.map((user) => (
          <Card key={user.id}>
            <UserCard name={user.name} age={user.age} />
          </Card>
        ))}
      </div>

      <div className="buttons">
        <Button onClick={showAlert}>Показать сообщение</Button>
        <Button onClick={writeToConsole}>Записать в консоль</Button>
      </div>
    </main>
  );
}