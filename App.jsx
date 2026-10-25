import { useState } from "react";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Керамическая ваза",
    category: "Декор",
    price: 2490,
    image: "🏺",
    color: "peach",
    description: "Минималистичный акцент для уютного интерьера.",
  },
  {
    id: 2,
    name: "Плед «Облако»",
    category: "Текстиль",
    price: 3890,
    image: "🧶",
    color: "sage",
    description: "Мягкий хлопковый плед для спокойных вечеров.",
  },
  {
    id: 3,
    name: "Настольная лампа",
    category: "Освещение",
    price: 5290,
    image: "💡",
    color: "yellow",
    description: "Тёплый свет и лаконичный дизайн для дома.",
  },
  {
    id: 4,
    name: "Чашка ручной работы",
    category: "Посуда",
    price: 1590,
    image: "☕",
    color: "lavender",
    description: "Каждая чашка имеет свой неповторимый рисунок.",
  },
];

const services = [
  {
    number: "01",
    title: "Бережная доставка",
    description: "Привезём заказ домой и аккуратно упакуем хрупкие вещи.",
  },
  {
    number: "02",
    title: "Помощь с выбором",
    description: "Подскажем, как сочетать предметы и подобрать подарок.",
  },
  {
    number: "03",
    title: "Подарочная упаковка",
    description: "Подготовим заказ к празднику и добавим открытку.",
  },
];

function formatPrice(price) {
  return new Intl.NumberFormat("ru-RU").format(price) + " ₽";
}

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  function addToCart() {
    setCartCount((count) => count + 1);
  }

  return (
    <div className="store">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Тихий дом — на главную">
          <span className="brand-mark">тд</span>
          <span>тихий дом</span>
        </a>

        <nav className="main-nav" aria-label="Главная навигация">
          <a href="#catalog">Каталог</a>
          <a href="#services">Услуги</a>
          <a href="#about">О нас</a>
        </nav>

        <a className="cart-link" href="#catalog" aria-label={`Корзина, товаров: ${cartCount}`}>
          Корзина <span className="cart-count">{cartCount}</span>
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Вещи для вашего пространства</p>
            <h1>Дом начинается<br />с маленьких деталей</h1>
            <p className="hero-description">
              Предметы, которые помогают замедлиться, выдохнуть и почувствовать себя дома.
            </p>
            <a className="primary-link" href="#catalog">Выбрать вещи <span>↘</span></a>
          </div>
          <div className="hero-art" aria-label="Иллюстрация уютного интерьера" role="img">
            <div className="sun"></div>
            <div className="art-shelf"></div>
            <div className="art-vase">✿</div>
            <div className="art-plant">♧</div>
            <div className="art-caption">пространство<br />для себя</div>
          </div>
          <div className="hero-note">Коллекция<br />осень / зима 2026</div>
        </section>

        <section className="catalog-section section-wrap" id="catalog">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Отобрали с заботой</p>
              <h2>Любимые вещи</h2>
            </div>
            <a className="text-link" href="#catalog">Весь каталог <span>→</span></a>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.id}>
                <div className={`product-image ${product.color}`} aria-hidden="true">
                  <span>{product.image}</span>
                  <button
                    className="favorite-button"
                    type="button"
                    aria-label={`Добавить в избранное: ${product.name}`}
                    onClick={(event) => event.currentTarget.classList.toggle("is-favorite")}
                  >
                    ♡
                  </button>
                </div>
                <div className="product-meta">
                  <span>{product.category}</span>
                  <span>{formatPrice(product.price)}</span>
                </div>
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <button className="add-button" type="button" onClick={addToCart}>
                  В корзину <span>+</span>
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="section-wrap">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Чуть больше, чем покупка</p>
                <h2>Забота в каждой детали</h2>
              </div>
              <p className="section-intro">Помогаем выбрать, доставить и красиво подарить.</p>
            </div>

            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <span className="service-number">{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="service-arrow" aria-hidden="true">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section section-wrap" id="about">
          <p className="eyebrow">Наша идея</p>
          <p className="about-quote">
            «Хорошие вещи не требуют повода. Они просто делают обычный день немного теплее».
          </p>
          <a className="text-link" href="mailto:hello@quiet-home.example">Написать нам <span>→</span></a>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">тд</span>
          <span>тихий дом</span>
        </a>
        <span>Предметы для уютной жизни</span>
        <div className="footer-links">
          <a href="#catalog">Каталог</a>
          <a href="#services">Доставка и услуги</a>
          <a href="mailto:hello@quiet-home.example">Контакты</a>
        </div>
        <span className="copyright">© 2026 Тихий дом</span>
      </footer>
    </div>
  );
}
