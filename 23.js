

class Employee {
  constructor(name, salary) {
    if (!name || typeof name !== "string") {
      throw new Error("Укажите имя сотрудника");
    }

    if (typeof salary !== "number" || salary < 0) {
      throw new Error("Зарплата должна быть неотрицательным числом");
    }

    this.name = name;
    this.salary = salary;
  }

  getInfo() {
    return `${this.name}, зарплата: ${this.salary} ₽`;
  }
}

class Manager extends Employee {
  constructor(name, salary, teamSize) {
    super(name, salary);

    if (!Number.isInteger(teamSize) || teamSize < 0) {
      throw new Error("Количество сотрудников в команде должно быть целым неотрицательным числом");
    }

    this.teamSize = teamSize;
  }

  getInfo() {
    return `${super.getInfo()}, размер команды: ${this.teamSize}`;
  }
}

const employee = new Employee("Анна", 80000);
const manager = new Manager("Иван", 120000, 8);

console.log(employee.getInfo());
console.log(manager.getInfo());




class Shape {
  getArea() {
    throw new Error("Метод getArea() нужно переопределить");
  }

  getPerimeter() {
    throw new Error("Метод getPerimeter() нужно переопределить");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();

    if (typeof radius !== "number" || radius <= 0) {
      throw new Error("Радиус должен быть положительным числом");
    }

    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }

  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();

    if (
      typeof width !== "number" || width <= 0 ||
      typeof height !== "number" || height <= 0
    ) {
      throw new Error("Ширина и высота должны быть положительными числами");
    }

    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

class Triangle extends Shape {
  constructor(sideA, sideB, sideC) {
    super();

    if (
      typeof sideA !== "number" || sideA <= 0 ||
      typeof sideB !== "number" || sideB <= 0 ||
      typeof sideC !== "number" || sideC <= 0
    ) {
      throw new Error("Стороны треугольника должны быть положительными числами");
    }

    if (
      sideA + sideB <= sideC ||
      sideA + sideC <= sideB ||
      sideB + sideC <= sideA
    ) {
      throw new Error("С такими сторонами треугольник не существует");
    }

    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  getArea() {
    const halfPerimeter = this.getPerimeter() / 2;

    
    return Math.sqrt(
      halfPerimeter *
      (halfPerimeter - this.sideA) *
      (halfPerimeter - this.sideB) *
      (halfPerimeter - this.sideC)
    );
  }

  getPerimeter() {
    return this.sideA + this.sideB + this.sideC;
  }
}

const shapes = [
  new Circle(5),
  new Rectangle(4, 6),
  new Triangle(3, 4, 5),
];

shapes.forEach((shape) => {
  console.log(`Площадь: ${shape.getArea().toFixed(2)}`);
  console.log(`Периметр: ${shape.getPerimeter().toFixed(2)}`);
});