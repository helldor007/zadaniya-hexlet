
class Book {
  static createdCount = 0;

  constructor(title, author) {
    this.title = title;
    this.author = author;
    Book.createdCount++;
  }

  static getCreatedCount() {
    return Book.createdCount;
  }
}

const book1 = new Book("Мастер и Маргарита", "Михаил Булгаков");
const book2 = new Book("Преступление и наказание", "Фёдор Достоевский");

console.log(Book.getCreatedCount()); // 2



class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  static createIntern(name) {
    return new Employee(name, 30000);
  }
}

const intern = Employee.createIntern("Анна");
console.log(intern); 


class MathUtils {
  static sum(numbers) {
    this.validate(numbers);
    return numbers.reduce((total, number) => total + number, 0);
  }

  static average(numbers) {
    this.validate(numbers);

    if (numbers.length === 0) {
      throw new Error("Нельзя найти среднее значение пустого массива");
    }

    return this.sum(numbers) / numbers.length;
  }

  static max(numbers) {
    this.validate(numbers);

    if (numbers.length === 0) {
      throw new Error("Нельзя найти максимум пустого массива");
    }

    return Math.max(...numbers);
  }

  static validate(numbers) {
    if (!Array.isArray(numbers) || !numbers.every(Number.isFinite)) {
      throw new Error("Нужно передать массив чисел");
    }
  }
}

console.log(MathUtils.sum([2, 4, 6])); // 12
console.log(MathUtils.average([2, 4, 6])); // 4
console.log(MathUtils.max([2, 4, 6])); // 6