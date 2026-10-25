// Группа 1


function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function isEven(num) {
  return num % 2 === 0;
}


const sumExpression = function (a, b) {
  return a + b;
};

const multiplyExpression = function (a, b) {
  return a * b;
};

const isEvenExpression = function (num) {
  return num % 2 === 0;
};


const sumArrow = (a, b) => a + b;
const multiplyArrow = (a, b) => a * b;
const isEvenArrow = (num) => num % 2 === 0;

const user = {
  name: "Аня",

  greet: function () {
    console.log(`Привет, я ${this.name}`);
  },

  greetArrow: () => {
    console.log(`Привет, я ${this.name}`);
  },
};

user.greet();
user.greetArrow();

const userForTimeout = {
  name: "Аня",

  greet: function () {
    console.log(`Привет, я ${this.name}`);
  },
};

setTimeout(userForTimeout.greet, 0);


setTimeout(userForTimeout.greet.bind(userForTimeout), 0);


setTimeout(() => userForTimeout.greet(), 0);


// Группа 2

const product = {
  name: "Наушники",
  price: 2500,
  quantity: 3,

  getTotalPrice() {
    return this.price * this.quantity;
  },
};

console.log(product.getTotalPrice());

const student = {
  name: "Иван",
  grades: {
    математика: 5,
    физика: 4,
    информатика: 5,
  },

  getAverageGrade() {
    const grades = Object.values(this.grades);
    const sum = grades.reduce((total, grade) => total + grade, 0);
    return sum / grades.length;
  },
};

const { name, grades } = student;

console.log(name);
console.log(grades);
console.log(student.getAverageGrade());

function mergeObjects(obj1, obj2) {
  const result = {};

  for (const key in obj1) {
    if (Object.prototype.hasOwnProperty.call(obj1, key)) {
      result[key] = obj1[key];
    }
  }

  for (const key in obj2) {
    if (Object.prototype.hasOwnProperty.call(obj2, key)) {
      result[key] = obj2[key];
    }
  }

  return result;
}

console.log(mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 }));


// Группа 3

const products = [
  { name: "Ноутбук", price: 75000, category: "electronics" },
  { name: "Смартфон", price: 50000, category: "electronics" },
  { name: "Наушники", price: 4500, category: "electronics" },
  { name: "Мышь", price: 1800, category: "electronics" },
  { name: "Клавиатура", price: 3200, category: "electronics" },
  { name: "Монитор", price: 22000, category: "electronics" },
  { name: "Хлеб", price: 80, category: "food" },
  { name: "Молоко", price: 110, category: "food" },
  { name: "Сыр", price: 950, category: "food" },
  { name: "Кофе", price: 1200, category: "food" },
  { name: "Чай", price: 600, category: "food" },
  { name: "Яблоки", price: 180, category: "food" },
  { name: "Куртка", price: 8500, category: "clothing" },
  { name: "Кроссовки", price: 7200, category: "clothing" },
  { name: "Футболка", price: 1500, category: "clothing" },
  { name: "Шапка", price: 900, category: "clothing" },
  { name: "Рюкзак", price: 2800, category: "accessories" },
  { name: "Часы", price: 6500, category: "accessories" },
];

const expensiveProductNames = products
  .filter((item) => item.price > 1000)
  .map((item) => item.name);

const totalPrice = products.reduce(
  (total, item) => total + item.price,
  0
);

const categoryCounts = products.reduce((counts, item) => {
  counts[item.category] = (counts[item.category] || 0) + 1;
  return counts;
}, {});

const sortedProducts = [...products].sort((a, b) => a.price - b.price);

const productsByCategory = sortedProducts.reduce((groups, item) => {
  if (!groups[item.category]) {
    groups[item.category] = [];
  }

  groups[item.category].push(item);
  return groups;
}, {});

console.log(expensiveProductNames);
console.log(totalPrice);
console.log(categoryCounts);
console.log(sortedProducts);
console.log(productsByCategory);


// Группа 4

const catalog = [
  { id: 1, name: "Война и мир", category: "книга", rating: 4.8, price: 1200 },
  { id: 2, name: "Преступление и наказание", category: "книга", rating: 4.7, price: 900 },
  { id: 3, name: "Мастер и Маргарита", category: "книга", rating: 4.9, price: 1100 },
  { id: 4, name: "1984", category: "книга", rating: 4.6, price: 800 },
  { id: 5, name: "Интерстеллар", category: "фильм", rating: 4.8, price: 500 },
  { id: 6, name: "Начало", category: "фильм", rating: 4.7, price: 450 },
  { id: 7, name: "Шахматы", category: "игра", rating: 4.5, price: 1500 },
  { id: 8, name: "Монополия", category: "игра", rating: 4.3, price: 2000 },
];

function addItem(item) {
  catalog.push(item);
  return item;
}

function removeItem(id) {
  const index = catalog.findIndex((item) => item.id === id);

  if (index === -1) {
    return false;
  }

  catalog.splice(index, 1);
  return true;
}

function updateItem(id, changes) {
  const item = findItem(id);

  if (!item) {
    return null;
  }

  for (const key in changes) {
    if (Object.prototype.hasOwnProperty.call(changes, key)) {
      item[key] = changes[key];
    }
  }

  return item;
}

function findItem(id) {
  return catalog.find((item) => item.id === id) || null;
}

function findByField(field, value) {
  return catalog.filter((item) => item[field] === value);
}

function getStats() {
  const count = catalog.length;
  const averagePrice = count
    ? catalog.reduce((sum, item) => sum + item.price, 0) / count
    : 0;
  const averageRating = count
    ? catalog.reduce((sum, item) => sum + item.rating, 0) / count
    : 0;

  return {
    count,
    averagePrice: Number(averagePrice.toFixed(2)),
    averageRating: Number(averageRating.toFixed(2)),
  };
}

function sortBy(field, order = "asc") {
  const direction = order === "desc" ? -1 : 1;

  return [...catalog].sort((a, b) => {
    if (a[field] < b[field]) return -1 * direction;
    if (a[field] > b[field]) return 1 * direction;
    return 0;
  });
}

console.log(addItem({
  id: 9,
  name: "Гарри Поттер",
  category: "книга",
  rating: 4.8,
  price: 1300,
}));

console.log(findItem(1));
console.log(findByField("category", "книга"));
console.log(updateItem(2, { price: 950 }));
console.log(getStats());
console.log(sortBy("price", "desc"));
console.log(removeItem(9));