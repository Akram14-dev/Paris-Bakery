export default function CartProductsButton({ handleOpenCart }) {
  return (
    <div className="cartProductsButton">
      <button className="btn" onClick={handleOpenCart}>
        {" "}
        <a href="#cart">🛒 السلة</a>
      </button>{" "}
    </div>
  );
}
