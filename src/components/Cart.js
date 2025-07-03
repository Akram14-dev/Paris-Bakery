import BoughtProduct from "./BoughtProduct";
export default function Cart({
  boughtItems,
  handleOpenCart,
  number,
  handleSetNumber,
  handleSetState,
  setBoughtItem,
  onRemove,
}) {
  return (
    <div className="popup-overlay bought">
      <div className="popup bought">
        {boughtItems.length !== 0 ? (
          <ul>
            {boughtItems.map((boughtItem) => (
              <BoughtProduct
                boughtItems={boughtItems}
                boughtItem={boughtItem}
                key={boughtItem.id}
                product={boughtItem}
                number={number}
                handleSetNumber={handleSetNumber}
                handleSetState={handleSetState}
                setBoughtItem={setBoughtItem}
                onRemove={onRemove}
              />
            ))}
          </ul>
        ) : (
          <p
            style={{ textAlign: "center", fontSize: "30px", marginTop: "20px" }}
          >
            {" "}
            🥺 لا يوجد عناصر فى السلة
          </p>
        )}
        <div className="close">
          <button className=" btn" onClick={handleOpenCart}>
            ⬇️ العودة للتسوق
          </button>
        </div>
      </div>
    </div>
  );
}
