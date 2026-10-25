
function Product(id, name, category, rating, price) {
  if (!id) {
    throw new Error("У товара должен быть id");
  }

  if (!name) {
    throw new Error("У товара должно быть название");
  }

  if (!category) {
    throw new Error("У товара должна быть категория");
  }

  if (typeof rating !== "number" || rating < 0 || rating > 5) {
    throw new Error("Рейтинг должен быть числом от 0 до 5");
  }

  if (typeof price !== "number" || price < 0) {
    throw new Error("Цена должна быть неотрицательным числом");
  }

  this.id = id;
  this.name = name;
  this.category = category;
  this.rating = rating;
  this.price = price;
}


Product.prototype.getInfo = function () {
  return `${this.name} — ${this.price} ₽, рейтинг: ${this.rating}`;
};

Product.prototype.clone = function () {
  return new Product(
    this.id,
    this.name,
    this.category,
    this.rating,
    this.price
  );
};


const catalog = [
  new Product(1, "Ноутбук", "электроника", 4.8, 75000),
  new Product(2, "Смартфон", "электроника", 4.7, 50000),
  new Product(3, "Наушники", "электроника", 4.5, 4500),
  new Product(4, "Клавиатура", "электроника", 4.4, 3200),
  new Product(5, "Кофе", "продукты", 4.6, 1200),
  new Product(6, "Чай", "продукты", 4.3, 600),
  new Product(7, "Куртка", "одежда", 4.5, 8500),
  new Product(8, "Рюкзак", "аксессуары", 4.2, 2800),
];

const copiedProduct = catalog[0].clone();

console.log(catalog[0]);
console.log(copiedProduct);
console.log(copiedProduct instanceof Product); 
console.log(copiedProduct !== catalog[0]); 

console.log(catalog[0].getInfo());


