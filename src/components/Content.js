import Landing from "./Landing";
import Menu from "./Menu";
export default function Content({
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
  return (
    <div className="content">
      <Landing />
      <Menu
        onBuy={onBuy}
        openCart={openCart}
        handleIsOpen={handleIsOpen}
        isOpen={isOpen}
        boughtItems={boughtItems}
        handleOpenCart={handleOpenCart}
        number={number}
        handleSetNumber={handleSetNumber}
        setNumber={setNumber}
        setBoughtItem={setBoughtItem}
        onRemove={onRemove}
      />
    </div>
  );
}
