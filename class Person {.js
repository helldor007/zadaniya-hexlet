class Person {
  #age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get age() {
    return this.#age;
  }

  set age(value) {
    if (!Number.isInteger(value) || value < 0) {
      throw new Error("Возраст должен быть целым неотрицательным числом");
    }

    this.#age = value;
  }
}

const person = new Person("Анна", 25);
console.log(person.age);

person.age = 26;
console.log(person.age);



class BankAccount {
  constructor(owner, balance = 0) {
    if (typeof balance !== "number" || balance < 0) {
      throw new Error("Начальный баланс должен быть неотрицательным числом");
    }

    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    if (typeof amount !== "number" || amount <= 0) {
      throw new Error("Сумма пополнения должна быть положительным числом");
    }

    this.balance += amount;
    return this.balance;
  }

  withdraw(amount) {
    if (typeof amount !== "number" || amount <= 0) {
      throw new Error("Сумма снятия должна быть положительным числом");
    }

    if (amount > this.balance) {
      throw new Error("На счёте недостаточно средств");
    }

    this.balance -= amount;
    return this.balance;
  }
}

const account = new BankAccount("Анна", 1000);
account.deposit(500);
account.withdraw(200);
console.log(account.balance); // 1300




class Password {
  #hash;

  constructor(password) {
    if (typeof password !== "string" || password.length === 0) {
      throw new Error("Пароль не должен быть пустым");
    }

    this.#hash = this.#hashPassword(password);
  }

  #hashPassword(value) {
    return value.split("").reverse().join("");
  }

  checkPassword(input) {
    if (typeof input !== "string") {
      return false;
    }

    return this.#hash === this.#hashPassword(input);
  }
}

const password = new Password("secret123");

console.log(password.checkPassword("secret123")); // true
console.log(password.checkPassword("wrong")); // false
console.log(password.hash); // undefined