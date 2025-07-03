import products from "./App";
import { useState } from "react";
import Product from "./Product";
import Cart from "./Cart";
import PopUpOverlay from "./PopUpOverlay";
export default function ProductList({
  products,
  isOpen,
  onSelection,
  handleBack,
  selectedProduct,
  onBuy,
  openCart,
  boughtItems,
  handleOpenCart,
  number,
  handleSetNumber,
  setNumber,
  setBoughtItem,
  onRemove,
}) {
  const [isSubmited, setIsSubmited] = useState(false);
  function handleIsSubmited() {
    setIsSubmited((isSubmited) => true);
  }

  return (
    <ul className={`product-list ${isOpen ? "blurred" : ""}`}>
      {products.map((product) => (
        <Product
          product={product}
          key={product.id}
          onSelection={onSelection}
          selectedProduct={selectedProduct}
          isSubmited={isSubmited}
        />
      ))}
      {openCart ? (
        <Cart
          boughtItems={boughtItems}
          handleOpenCart={handleOpenCart}
          number={number}
          handleSetNumber={handleSetNumber}
          selectedProduct={selectedProduct}
          setBoughtItem={setBoughtItem}
          onRemove={onRemove}
        />
      ) : (
        isOpen && (
          <PopUpOverlay
            onSelection={onSelection}
            handleBack={handleBack}
            selectedProduct={selectedProduct}
            isOpen={isOpen}
            onBuy={onBuy}
            number={number}
            handleSetNumber={handleSetNumber}
            setNumber={setNumber}
            handleIsSubmited={handleIsSubmited}
          />
        )
      )}
    </ul>
  );
}
