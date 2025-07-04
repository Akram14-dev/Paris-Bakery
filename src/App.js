import { useState } from "react";

const products = [
  {
    id: Math.floor(Math.random() * 10000),
    name: "كرواسون ",
    type: "مخبوزات/",
    image: "/products/item1.jpeg",
    description: "معجن فرنسي هش غني بالزبدة، ذهبي وطري",
    price: "10",
    quantity: 0,
  },
  {
    id: Math.floor(Math.random() * 10000),
    type: "مخبوزات/",
    name: "باتيه ",
    image: "/products/item2.jpeg",
    description: "محشو بالجبن أو الشيكولاتة او الزيتون, هش وطري يُقدَّم ساخنًا",
    price: "8",
    quantity: 0,
  },
  {
    id: Math.floor(Math.random() * 10000),
    type: "مخبوزات/",
    name: "سينابون ",
    image: "/products/item3.jpeg",
    description: " لفافة قرفة هشة، طرية ومحلاة، تُقدَّم دافئة مع صوص السكر",
    price: "15",
    quantity: 0,
  },
  {
    id: Math.floor(Math.random() * 10000),
    type: "مخبوزات/",
    name: "دونتس ",
    image: "/products/item4.jpeg",
    description: "عجينة مقلية دائرية، هشة ومحلاة، تُغطى بالشوكولاتة أو السكر",
    price: "12",
    quantity: 0,
  },
  {
    id: Math.floor(Math.random() * 100),
    type: "مخبوزات/",
    name: "دنش ",
    image: "/products/item5.jpeg",
    description: "معجن مورق طري، محشو عادةً بالكاسترد أو الفواكه",
    price: "10",
    quantity: 0,
  },
  {
    id: Math.floor(Math.random() * 100),
    type: "مخبوزات/",
    name: "بُغاشة ",
    image: "/products/item6.jpeg",
    description: "معجن مقلي مقرمش ومحلى، يشبه الفطيرة الصغيرة",
    price: "10",
    quantity: 0,
  },
];

export default function App() {
  const [number, setNumber] = useState();

  function handleSetNumber(e) {
    setNumber(Number(e.target.value));
    e.preventDefault();
  }
  const [isOpen, setIsOpen] = useState(false);
  function handleIsOpen() {
    setIsOpen((isOpen) => !isOpen);
  }

  const [boughtItems, setBoughtItem] = useState([]);
  function handleBoughtProduct(product) {
    setBoughtItem((boughtItems) => [...boughtItems, product]);
    handleIsOpen();
  }

  const [openCart, setOpenCart] = useState(false);
  function handleOpenCart() {
    setOpenCart((openCart) => !openCart);
    handleIsOpen(!isOpen);
  }
  function handleRemove(id) {
    setBoughtItem((boughtItems) =>
      boughtItems.filter((boughtItem) => boughtItem.id !== id)
    );
  }

  return (
    <div className="page">
      <div className="container">
        <Header handleOpenCart={handleOpenCart} />
        <Content
          onBuy={handleBoughtProduct}
          openCart={openCart}
          handleIsOpen={handleIsOpen}
          isOpen={isOpen}
          boughtItems={boughtItems}
          handleOpenCart={handleOpenCart}
          number={number}
          handleSetNumber={handleSetNumber}
          setNumber={setNumber}
          setBoughtItem={setBoughtItem}
          onRemove={handleRemove}
        />
      </div>
      <footer>
        <span className="akram">
          <strong>
            {`@Akram14. Coded With Love :) <3`}
            <br></br>
          </strong>
          From Jonas Schmedtmann Course
        </span>{" "}
      </footer>
    </div>
  );
}

function Header({ handleOpenCart }) {
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

function CartProductsButton({ handleOpenCart }) {
  return (
    <div className="cartProductsButton">
      <button className="btn" onClick={handleOpenCart}>
        {" "}
        <a href="#cart">🛒 السلة</a>
      </button>{" "}
    </div>
  );
}

function Content({
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

function ContentHeader({ openCart }) {
  return (
    <div className="content-header">
      <p>{openCart ? "سلة المشتريات 🛍️ " : "📃قائمة المخبوزات"}</p>
    </div>
  );
}

function Landing() {
  return (
    <div className="landing">
      <p style={{ marginBottom: "0", marginTop: "50px" }}>
        اهلا فى مخبز <span style={{ color: "#146591" }}>باريــــس</span> ,
        مخبوزاتك الطازة فى مكان واحــد
      </p>
      <p style={{ fontSize: "22px", marginTop: "0" }}>
        😋 تشكيلة فريدة من افضل المخبوزات
      </p>
    </div>
  );
}

function Menu({
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
      <ContentHeader openCart={openCart} />
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

function ProductList({
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
          openCart={openCart}
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

function Product({ product, onSelection, selectedProduct, isSubmited }) {
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
              <span>{product.price}£</span>
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

function Cart({
  boughtItems,
  handleOpenCart,
  number,
  handleSetNumber,
  handleSetState,
  setBoughtItem,
  onRemove,
  openCart,
}) {
  return (
    <div className="popup-overlay bought">
      <div className="popup bought" style={{ marginTop: "20px" }}>
        <ContentHeader openCart={openCart}></ContentHeader>
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
            style={{
              textAlign: "center",
              fontSize: "30px",
              marginTop: "20px",
            }}
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

const WhatsAppButton = ({ phoneNumber, message }) => {
  const handleClick = () => {
    // Remove spaces and special characters from phone number
    const cleanedNumber = phoneNumber.replace(/\D/g, "");

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // Create the WhatsApp URL
    const url = `https://wa.me/${cleanedNumber}?text=${encodedMessage}`;

    // Open the URL in a new tab
    window.open(url, "_blank");
  };
  return (
    <button className="btn done" onClick={handleClick}>
      تاكيد؟ ✅{" "}
    </button>
  );
};

function PopUpOverlay({
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
    setAlertNum((alertNum) => !alertNum);
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
              <strong>{selectedProduct.price}£</strong>
              <form onSubmit={handleSubmit}>
                <label style={{ margin: "0px 20px" }} htmlFor="input">
                  العدد
                </label>
                <input
                  value={number}
                  type="number"
                  placeholder="ادخل العدد الذى تريده"
                  onChange={handleSetNumber}
                  id="input"
                ></input>

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
                    😠!قيمة غير صحيحة
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

function BoughtProduct({ product, boughtItem, onRemove }) {
  const messageContent = `لو سمحت عاوز اطلب عدد ${boughtItem.quantity} من ال${boughtItem.name}`;
  return (
    <div className="prod">
      <li className="bought-product" id="cart">
        <div className="info">
          <img alt={product.name} src={product.image}></img>
          <h3>{product.name}</h3>
          <p>{product.type}</p>
          <strong>{`x${product.quantity}    ${product.price}£`}</strong>
        </div>
        {product && (
          <div className="buttons">
            <button
              className="btn remove"
              onClick={() => onRemove(boughtItem.id)}
            >
              ازالة 🗑️{" "}
            </button>
            <WhatsAppButton
              phoneNumber="+201013541138"
              message={messageContent}
            />
          </div>
        )}
      </li>
    </div>
  );
}

// const existingItem = boughtItems.find(
//       (boughtItem) => boughtItem.id === product.id
//     );
//     if (existingItem) {
//       // If exists, increase quantity
//       return boughtItems.map((boughtItem) =>
//         boughtItem.id === product.id
//           ? { ...boughtItem, quantity: boughtItem.quantity + 1 }
//           : boughtItem
//       );
//     } else {
//       setBoughtItem((boughtItems) => [...boughtItems, product]);
//       handleIsOpen();
//     }
