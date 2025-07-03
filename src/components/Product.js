export default function Product({
  product,
  onSelection,
  selectedProduct,
  isSubmited,
}) {
  return (
    <li className="product ">
      {
        <>
          <img src={product.image} alt={product.name}></img>
          <div className="product-info">
            <h3>{product.name}</h3>
            <p>{product.type}</p>
            <p>{product.description}</p>
            <div className="buy">
              <span>{product.price}$</span>
              <button
                className={`btn ${isSubmited} && ${selectedProduct}? "selected" : ""`}
                onClick={() => onSelection(product)}
              >
                <a href="#buy">🛒 اضف الى عربة التسوق</a>
              </button>
            </div>
          </div>
        </>
      }
    </li>
  );
}
