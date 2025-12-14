import Cart from "./pages/cart/Cart";
import Products from "./pages/products/Products";

import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="landing">
        <Products />
        <Cart />
      </div>
    </div>
  );
}

export default App;
