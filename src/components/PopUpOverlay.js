import { useState } from "react";
export default function PopUpOverlay({
  handleBack,
  selectedProduct,
  onBuy,
  number,
  handleSetNumber,
  setNumber,
  handleIsSubmited,
}) {
  const [alertNum, setAlertNum] = useState(false);
  function handleAlertNum() {
    setAlertNum(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!number || number < 0) return;
    onBuy(selectedProduct);
    setNumber((selectedProduct.quantity = number));
    handleIsSubmited();
    handleAlertNum();
  }

  return (
    <div className="popup-overlay">
      <div className="popup" id="buy">
        <div className="container">
          <img alt={selectedProduct.name} src={selectedProduct.image}></img>{" "}
          <div className="product-description">
            <h3>{selectedProduct.name}</h3>
            <p>{selectedProduct.type}</p>
            <p>{selectedProduct.description}</p>
            <div className="product-buy">
              <strong>{selectedProduct.price}$</strong>
              <form onSubmit={handleSubmit}>
                <input
                  value={number}
                  type="number"
                  placeholder="ادخل العدد الذى تريده"
                  onChange={handleSetNumber}
                  id="input"
                ></input>
                <label style={{ margin: "0px 20px" }} htmlFor="input">
                  العدد
                </label>

                <button className="buy btn " onClick={handleAlertNum}>
                  🤑 شراء
                </button>
                {alertNum && (
                  <p
                    style={{
                      margin: "10px 0px",
                      fontSize: "20px",
                      transition: "0.3s",
                    }}
                  >
                    !قيمة غير صحيحة
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
        <div className="close">
          <button className=" btn" onClick={handleBack}>
            ⬇️ العودة للتسوق
          </button>
        </div>
      </div>
    </div>
  );
}
