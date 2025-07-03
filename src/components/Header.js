import CartProductsButton from "./CartProductsButton";
export default function Header({ handleOpenCart }) {
  return (
    <>
      <h1 className="logo scrolled">
        <div className="logo">
          <span className="en">🍩 Paris Bakery 🥐</span>
          <br></br>
          <span className="ar"> مخبــــــــز باريــــــــس</span>
        </div>
        <CartProductsButton handleOpenCart={handleOpenCart} />
      </h1>
    </>
  );
}
