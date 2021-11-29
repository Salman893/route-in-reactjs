import { Link } from "react-router-dom";

const Products = (props) => {
  return (
    <section>
      <h1>The Products Page</h1>
      <nav>
          <ul>
              <li><Link to="/products/p1">Book</Link></li>
              <li><Link to="/products/p2">Pen</Link></li>
              <li><Link to="/products/p3">Bag</Link></li>
          </ul>
      </nav>
    </section>
  );
};

export default Products;
