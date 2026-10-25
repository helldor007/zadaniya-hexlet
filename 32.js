class Product {
  constructor(name, price, stock) {
    if (!name || typeof name !== "string") {
      throw new Error("Укажите название товара");
    }
    if (typeof price !== "number" || price < 0) {
      throw new Error("Цена должна быть неотрицательным числом");
    }
    if (!Number.isInteger(stock) || stock < 0) {
      throw new Error("Количество на складе должно быть целым неотрицательным числом");
    }

    this.name = name;
    this.price = price;
    this.stock = stock;
  }
}

class User {
  #password;

  constructor(name, email, password) {
    if (!name || !email || !password) {
      throw new Error("Укажите имя, email и пароль");
    }

    this.name = name;
    this.email = email;
    this.#password = password;
  }

  checkPassword(password) {
    return this.#password === password;
  }
}

class PremiumUser extends User {
  constructor(name, email, password, discountRate = 0.1) {
    super(name, email, password);

    if (discountRate < 0 || discountRate > 1) {
      throw new Error("Скидка должна быть от 0 до 1");
    }

    this.discountRate = discountRate;
  }
}

class DiscountCalculator {
  static apply(total, user) {
    const discountRate =
      user instanceof PremiumUser ? user.discountRate : 0;

    return total * (1 - discountRate);
  }
}

class Order {
  static orderCount = 0;

  constructor(items, status, total) {
    this.items = items;
    this.status = status;
    this.total = total;
    this.id = ++Order.orderCount;
  }

  static getOrderCount() {
    return Order.orderCount;
  }
}

class Cart {
  constructor(user) {
    if (!(user instanceof User)) {
      throw new Error("Для корзины нужен пользователь");
    }

    this.user = user;
    this.items = [];
  }

  addProduct(product, quantity = 1) {
    if (!(product instanceof Product)) {
      throw new Error("Можно добавить только экземпляр Product");
    }
    if (!Number.isInteger(quantity) || quantity <= 0) {
      throw new Error("Количество должно быть положительным целым числом");
    }

    const cartItem = this.items.find((item) => item.product === product);
    const currentQuantity = cartItem ? cartItem.quantity : 0;

    if (currentQuantity + quantity > product.stock) {
      throw new Error(`Недостаточно товара «${product.name}» на складе`);
    }

    if (cartItem) {
      cartItem.quantity += quantity;
    } else {
      this.items.push({ product, quantity });
    }
  }

  removeProduct(product, quantity) {
    const index = this.items.findIndex((item) => item.product === product);

    if (index === -1) {
      return false;
    }

    if (quantity === undefined || quantity >= this.items[index].quantity) {
      this.items.splice(index, 1);
      return true;
    }

    if (!Number.isInteger(quantity) || quantity <= 0) {
      throw new Error("Количество для удаления должно быть положительным целым числом");
    }

    this.items[index].quantity -= quantity;
    return true;
  }

  getTotal() {
    const subtotal = this.items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );

    return DiscountCalculator.apply(subtotal, this.user);
  }

  checkout() {
    if (this.items.length === 0) {
      throw new Error("Корзина пуста");
    }

    for (const item of this.items) {
      if (item.quantity > item.product.stock) {
        throw new Error(`Недостаточно товара «${item.product.name}» на складе`);
      }
    }

    const orderItems = this.items.map(({ product, quantity }) => ({
      name: product.name,
      price: product.price,
      quantity,
    }));

    for (const item of this.items) {
      item.product.stock -= item.quantity;
    }

    const order = new Order(orderItems, "создан", this.getTotal());
    this.items = [];

    return order;
  }
}


// Пример использования

const user = new PremiumUser(
  "Анна",
  "anna@example.com",
  "password123",
  0.15
);

const laptop = new Product("Ноутбук", 80000, 5);
const mouse = new Product("Мышь", 2000, 10);

const cart = new Cart(user);
cart.addProduct(laptop, 1);
cart.addProduct(mouse, 2);

console.log("Итого со скидкой:", cart.getTotal());

const order = cart.checkout();

console.log("Заказ:", order);
console.log("Всего создано заказов:", Order.getOrderCount());
console.log("Остаток ноутбуков:", laptop.stock);