import ProductList from "./ProductList";
import ContentHeader from "./ContentHeader";
import products from "../App";
import { useState } from "react";
export default function Menu({
  onBuy,
  openCart,
  handleIsOpen,
  isOpen,
  boughtItems,
  handleOpenCart,
  number,
  handleSetNumber,
  setNumber,
  setBoughtItem,
  onRemove,
}) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  function handleSelection(product) {
    setSelectedProduct(product);
    handleIsOpen();
    setNumber("");
  }
  function handleBack() {
    handleIsOpen();
  }

  return (
    <div className="menu">
      <ContentHeader />
      {
        <ProductList
          products={products}
          isOpen={isOpen}
          onBlur={handleIsOpen}
          onSelection={handleSelection}
          handleBack={handleBack}
          selectedProduct={selectedProduct}
          onBuy={onBuy}
          openCart={openCart}
          boughtItems={boughtItems}
          handleOpenCart={handleOpenCart}
          number={number}
          handleSetNumber={handleSetNumber}
          setNumber={setNumber}
          setBoughtItem={setBoughtItem}
          onRemove={onRemove}
        />
      }
    </div>
  );
}
