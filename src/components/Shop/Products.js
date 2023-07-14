import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    title: "Galactic Goggles",
    price: 199.99,
    id: 1,
    description: "Explore the universe with augmented reality goggles.",
  },
  {
    title: "Time Travel Watch",
    price: 499.99,
    id: 2,
    description: "Unlock the secrets of time with this revolutionary watch.",
  },
  {
    title: "Infinity Energy Drink",
    price: 4.99,
    id: 3,
    description: "Experience boundless energy with our cosmic drink.",
  },
  {
    title: "Dreamscape Bed Sheets",
    price: 79.99,
    id: 4,
    description: "Drift into fantastical dreams with our ethereal bed sheets.",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            id={product.id}
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
