
class Car {
  constructor(brand, model, year, color) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  start() {
    console.log(`${this.brand} ${this.model} заведён`);
  }

  stop() {
    console.log(`${this.brand} ${this.model} остановлен`);
  }

  getInfo() {
    return `${this.year} ${this.color} ${this.brand} ${this.model}`;
  }
}

const car = new Car("Toyota", "Camry", 2022, "чёрный");
car.start();
console.log(car.getInfo());
car.stop();




class Vehicle {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }

  getInfo() {
    return `${this.year} ${this.brand}`;
  }

  move() {
    console.log(`${this.brand} движется`);
  }
}

class Car {
  constructor(brand, year, model) {
    this.brand = brand;
    this.year = year;
    this.model = model;
  }

  getInfo() {
    return `${this.year} ${this.brand} ${this.model}`;
  }

  start() {
    console.log(`${this.brand} ${this.model} заведён`);
  }
}

class SportsCar {
  constructor(brand, year, model, maxSpeed) {
    this.brand = brand;
    this.year = year;
    this.model = model;
    this.maxSpeed = maxSpeed;
  }

  getInfo() {
    return `${this.year} ${this.brand} ${this.model}, максимальная скорость: ${this.maxSpeed} км/ч`;
  }

  race() {
    console.log(`${this.brand} ${this.model} участвует в гонке`);
  }
}

const vehicle = new Vehicle("Volvo", 2020);
const familyCar = new Car("Toyota", 2022, "Camry");
const sportsCar = new SportsCar("Porsche", 2024, "911", 320);

console.log(vehicle.getInfo());
vehicle.move();

console.log(familyCar.getInfo());
familyCar.start();

console.log(sportsCar.getInfo());
sportsCar.race();




class TodoList {
  constructor() {
    this.tasks = [];
    this.nextId = 1;
  }

  addTask(title) {
    if (!title || !title.trim()) {
      throw new Error("Название задачи не может быть пустым");
    }

    const task = {
      id: this.nextId++,
      title: title.trim(),
      completed: false,
    };

    this.tasks.push(task);
    return task;
  }

  removeTask(id) {
    const index = this.tasks.findIndex((task) => task.id === id);

    if (index === -1) {
      return false;
    }

    this.tasks.splice(index, 1);
    return true;
  }

  completeTask(id) {
    const task = this.tasks.find((item) => item.id === id);

    if (!task) {
      return false;
    }

    task.completed = true;
    return true;
  }

  getActiveTasks() {
    return this.tasks.filter((task) => !task.completed);
  }

  getCompletedTasks() {
    return this.tasks.filter((task) => task.completed);
  }
}

const todoList = new TodoList();

todoList.addTask("Сделать домашнее задание");
todoList.addTask("Загрузить код на GitHub");
todoList.addTask("Отправить ссылку преподавателю");

todoList.completeTask(1);

console.log("Активные задачи:", todoList.getActiveTasks());
console.log("Выполненные задачи:", todoList.getCompletedTasks());

todoList.removeTask(2);
console.log("После удаления:", todoList.getActiveTasks());