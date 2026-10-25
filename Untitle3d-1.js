

class Shape {
  getArea() {
    throw new Error("Метод getArea() нужно переопределить");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }

  getArea() {
    return (this.base * this.height) / 2;
  }
}

const shapes = [
  new Circle(5),
  new Rectangle(4, 6),
  new Triangle(3, 8),
];

const totalArea = shapes.reduce((sum, shape) => sum + shape.getArea(), 0);
console.log("Суммарная площадь фигур:", totalArea);



class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  calculateBonus() {
    throw new Error("Метод calculateBonus() нужно переопределить");
  }
}

class Developer extends Employee {
  calculateBonus() {
    return this.salary * 0.15;
  }
}

class Designer extends Employee {
  calculateBonus() {
    return this.salary * 0.1;
  }
}

class Manager extends Employee {
  calculateBonus() {
    return this.salary * 0.2;
  }
}

const employees = [
  new Developer("Анна", 100000),
  new Designer("Иван", 80000),
  new Manager("Мария", 120000),
];

const totalBonuses = employees.reduce(
  (sum, employee) => sum + employee.calculateBonus(),
  0
);

console.log("Общая сумма бонусов:", totalBonuses);



class NotificationSender {
  send(message) {
    throw new Error("Метод send() нужно переопределить");
  }
}

class EmailSender extends NotificationSender {
  send(message) {
    console.log(`Email: ${message}`);
  }
}

class SmsSender extends NotificationSender {
  send(message) {
    console.log(`SMS: ${message}`);
  }
}

class PushSender extends NotificationSender {
  send(message) {
    console.log(`Push-уведомление: ${message}`);
  }
}

function notifyAll(senders, message) {
  senders.forEach((sender) => sender.send(message));
}

const senders = [
  new EmailSender(),
  new SmsSender(),
  new PushSender(),
];

notifyAll(senders, "Ваш заказ готов к выдаче");