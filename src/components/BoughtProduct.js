export default function BoughtProduct({ product, boughtItem, onRemove }) {
  return (
    <div>
      <li className="bought-product" id="cart">
        <div className="info">
          <img alt={product.name} src={product.image}></img>
          <h3>{product.name}</h3>
          <p>{product.type}</p>
          <strong>{`x${product.quantity}    ${product.price}$`}</strong>
          <button className="btn" onClick={() => onRemove(boughtItem.id)}>
            ازالة 🗑️{" "}
          </button>
        </div>
      </li>
    </div>
  );
}
