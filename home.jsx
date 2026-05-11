import React, { useState } from "react";

export default function Home() {
  const [page, setPage] = useState("home");

  const [cartCount, setCartCount] = useState(0);

  const [selectedPayment, setSelectedPayment] =
    useState("");

  const [selectedUPI, setSelectedUPI] =
    useState("");

  // PRODUCTS

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Smart Watch",
      price: 4999,
      qty: 0,
      category: "Electronics",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
    },

    {
      id: 2,
      name: "Wireless Headphones",
      price: 2999,
      qty: 0,
      category: "Electronics",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    },

    {
      id: 3,
      name: "Sneakers",
      price: 6999,
      qty: 0,
      category: "Fashion",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    },

    {
      id: 4,
      name: "Backpack",
      price: 1999,
      qty: 0,
      category: "Accessories",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600",
    },

    {
      id: 5,
      name: "Gaming Laptop",
      price: 74999,
      qty: 0,
      category: "Gaming",
      image:
        "https://m.media-amazon.com/images/I/41Qo2ArvgwL._SY300_SX300_QL70_FMwebp_.jpg",
    },

    {
      id: 6,
      name: "iPhone 17",
      price: 89999,
      qty: 0,
      category: "Mobiles",
      image:
        "https://m.media-amazon.com/images/I/41U0q5RNNSL._SY300_SX300_QL70_FMwebp_.jpg",
    },

    {
      id: 7,
      name: "DSLR Camera",
      price: 55999,
      qty: 0,
      category: "Camera",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600",
    },

    {
      id: 8,
      name: "Office Chair",
      price: 8499,
      qty: 0,
      category: "Furniture",
      image:
        "https://m.media-amazon.com/images/I/410ot-+TuqL._SY300_SX300_QL70_FMwebp_.jpg",
    },
  ]);

  // INCREASE

  const increaseQty = (id) => {
    const updatedProducts = products.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          qty: item.qty + 1,
        };
      }

      return item;
    });

    setProducts(updatedProducts);

    setCartCount((prev) => prev + 1);
  };

  // DECREASE

  const decreaseQty = (id) => {
    const product = products.find(
      (item) => item.id === id
    );

    if (product.qty === 0) return;

    const updatedProducts = products.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          qty: item.qty - 1,
        };
      }

      return item;
    });

    setProducts(updatedProducts);

    setCartCount((prev) => prev - 1);
  };

  // CART

  const openCart = () => {
    if (cartCount === 0) {
      alert("🛒 Cart Is Empty");
    } else {
      alert(`🛍 Total Items In Cart: ${cartCount}`);
    }
  };

  // CHECKOUT

  const checkout = () => {
    if (cartCount === 0) {
      alert("⚠ Add Products First");
    } else {
      setPage("checkout");
    }
  };

  // PAYMENT

  const goToPayment = () => {
    setPage("payment");
  };

  // PLACE ORDER

  const placeOrder = () => {
    if (selectedPayment === "") {
      alert("⚠ Select Payment Method");
      return;
    }

    if (
      selectedPayment === "UPI" &&
      selectedUPI === ""
    ) {
      alert("⚠ Select UPI App");
      return;
    }

    setPage("success");
  };

  // SUCCESS PAGE

  if (page === "success") {
    return (
      <div style={styles.successPage}>
        <div style={styles.successCard}>
          <h1>✅ Order Placed Successfully</h1>

          <p>
            Thank You For Shopping With Us ❤️
          </p>

          <button
            style={styles.mainBtn}
            onClick={() => setPage("home")}
          >
            Back To Home
          </button>
        </div>
      </div>
    );
  }

  // PAYMENT PAGE

  if (page === "payment") {
    return (
      <div style={styles.paymentPage}>
        <div style={styles.paymentCard}>
          <h1 style={styles.paymentTitle}>
            Payment Page
          </h1>

          {/* PAYMENT OPTIONS */}

          <div style={styles.paymentGrid}>
            <button
              style={styles.payOption}
              onClick={() =>
                setSelectedPayment("UPI")
              }
            >
              📱 UPI
            </button>

            <button
              style={styles.payOption}
              onClick={() =>
                setSelectedPayment("COD")
              }
            >
              💵 COD
            </button>

            <button
              style={styles.payOption}
              onClick={() =>
                setSelectedPayment("CARD")
              }
            >
              💳 CARD
            </button>

            <button
              style={styles.payOption}
              onClick={() =>
                setSelectedPayment("BANK")
              }
            >
              🏦 BANKING
            </button>
          </div>

          {/* UPI OPTIONS */}

          {selectedPayment === "UPI" && (
            <div style={styles.upiSection}>
              <h3 style={styles.subHeading}>
                Select UPI App
              </h3>

              <div style={styles.upiApps}>
                <button
                  style={styles.upiBtn}
                  onClick={() =>
                    setSelectedUPI("Google Pay")
                  }
                >
                  💙 Google Pay
                </button>

                <button
                  style={styles.upiBtn}
                  onClick={() =>
                    setSelectedUPI("PhonePe")
                  }
                >
                  💜 PhonePe
                </button>

                <button
                  style={styles.upiBtn}
                  onClick={() =>
                    setSelectedUPI("Paytm")
                  }
                >
                  💙 Paytm
                </button>

                <button
                  style={styles.upiBtn}
                  onClick={() =>
                    setSelectedUPI("Navi")
                  }
                >
                  💚 Navi
                </button>
              </div>

              <h3 style={{ marginTop: "20px" }}>
                Selected App: {selectedUPI}
              </h3>

              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=MNStore"
                alt="qr"
                style={styles.qr}
              />
            </div>
          )}

          {/* CARD */}

          {selectedPayment === "CARD" && (
            <div style={styles.cardSection}>
              <h3 style={styles.subHeading}>
                Enter Card Details
              </h3>

              <input
                type="text"
                maxLength="4"
                placeholder="Last 4 Digits Of Card"
                style={styles.input}
              />

              <input
                type="password"
                maxLength="3"
                placeholder="3 Digit CVV"
                style={styles.input}
              />
            </div>
          )}

          {/* COD */}

          {selectedPayment === "COD" && (
            <div style={styles.codBox}>
              <h3>
                💵 Cash On Delivery Selected
              </h3>
            </div>
          )}

          {/* PLACE ORDER */}

          <button
            style={styles.mainBtn}
            onClick={placeOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    );
  }

  // CHECKOUT PAGE

  if (page === "checkout") {
    return (
      <div style={styles.checkoutPage}>
        <div style={styles.checkoutCard}>
          <h1>Checkout Page</h1>

          <h2>
            🛒 Total Products: {cartCount}
          </h2>

          <button
            style={styles.mainBtn}
            onClick={goToPayment}
          >
            Proceed To Payment
          </button>

          <button
            style={styles.secondaryBtn}
            onClick={() => setPage("home")}
          >
            Back
          </button>
        </div>
      </div>
    );
  }

  // HOME PAGE

  return (
    <div style={styles.page}>
      {/* NAVBAR */}

      <nav style={styles.navbar}>
        <h1 style={styles.logo}>MN Store</h1>

        <div style={styles.navLinks}>
          <button
            style={styles.navBtn}
            onClick={() => setPage("home")}
          >
            Home
          </button>

          <button
            style={styles.navBtn}
            onClick={() =>
              window.scrollTo({
                top: 700,
                behavior: "smooth",
              })
            }
          >
            Products
          </button>

          <button
            style={styles.cartBtn}
            onClick={openCart}
          >
            🛒 Cart ({cartCount})
          </button>

          <button
            style={styles.checkoutBtn}
            onClick={checkout}
          >
            Checkout
          </button>
        </div>
      </nav>

      {/* HERO */}

      <section style={styles.hero}>
        <div style={styles.left}>
          <span style={styles.badge}>
            ✨ New Collection 2026
          </span>

          <h1 style={styles.heading}>
            Premium Ecommerce Store
          </h1>

          <p style={styles.text}>
            Attractive modern ecommerce website with
            responsive design, cart system and payment
            gateway.
          </p>

          <div style={styles.heroBtns}>
            <button
              style={styles.mainBtn}
              onClick={checkout}
            >
              Shop Now
            </button>

            <button
              style={styles.secondaryBtn}
              onClick={() =>
                alert("🔥 Latest Products")
              }
            >
              Explore
            </button>
          </div>
        </div>

        <div style={styles.right}>
          <img
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200"
            alt="shopping"
            style={styles.heroImg}
          />
        </div>
      </section>

      {/* PRODUCTS */}

      <section style={styles.productSection}>
        <h2 style={styles.productTitle}>
          Featured Products
        </h2>

        <div style={styles.productGrid}>
          {products.map((item) => (
            <div key={item.id} style={styles.card}>
              <img
                src={item.image}
                alt={item.name}
                style={styles.cardImg}
              />

              <h3>{item.name}</h3>

              <p style={styles.category}>
                {item.category}
              </p>

              <p style={styles.price}>
                Rs {item.price}
              </p>

              {/* QUANTITY */}

              <div style={styles.qtyContainer}>
                <button
                  style={styles.qtyBtn}
                  onClick={() =>
                    decreaseQty(item.id)
                  }
                >
                  −
                </button>

                <span style={styles.qtyText}>
                  {item.qty}
                </span>

                <button
                  style={styles.qtyBtn}
                  onClick={() =>
                    increaseQty(item.id)
                  }
                >
                  +
                </button>
              </div>

              {/* ADD TO CART */}

              <button
                style={styles.buyBtn}
                onClick={() =>
                  increaseQty(item.id)
                }
              >
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// STYLES

const styles = {
  page: {
    fontFamily: "Arial",
    background: "#F5F7FF",
    minHeight: "100vh",
  },

  navbar: {
    background: "#fff",
    padding: "20px 5%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "20px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },

  logo: {
    color: "#6C63FF",
    fontSize: "35px",
    fontWeight: "bold",
  },

  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    flexWrap: "wrap",
  },

  navBtn: {
    background: "transparent",
    border: "none",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    color: "#333",
  },

  cartBtn: {
    background: "#6C63FF",
    color: "#fff",
    border: "none",
    padding: "14px 24px",
    borderRadius: "12px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  checkoutBtn: {
    background:
      "linear-gradient(135deg,#FF6B6B,#FF8E53)",
    color: "#fff",
    border: "none",
    padding: "14px 24px",
    borderRadius: "12px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "50px",
    padding: "80px 5%",
  },

  left: {
    flex: 1,
    minWidth: "300px",
  },

  badge: {
    background: "#E9E7FF",
    color: "#6C63FF",
    padding: "12px 18px",
    borderRadius: "30px",
    fontWeight: "bold",
  },

  heading: {
    fontSize: "clamp(40px,7vw,70px)",
    lineHeight: "1.1",
    marginTop: "25px",
  },

  text: {
    marginTop: "20px",
    color: "#666",
    lineHeight: "1.8",
    fontSize: "18px",
  },

  heroBtns: {
    display: "flex",
    gap: "20px",
    marginTop: "35px",
    flexWrap: "wrap",
  },

  mainBtn: {
    background:
      "linear-gradient(135deg,#6C63FF,#8B85FF)",
    color: "#fff",
    border: "none",
    padding: "18px 35px",
    borderRadius: "14px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  secondaryBtn: {
    background: "#fff",
    border: "2px solid #ddd",
    padding: "18px 35px",
    borderRadius: "14px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  right: {
    flex: 1,
  },

  heroImg: {
    width: "100%",
    borderRadius: "30px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
  },

  productSection: {
    padding: "80px 5%",
  },

  productTitle: {
    textAlign: "center",
    fontSize: "48px",
    marginBottom: "50px",
  },

  productGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(280px,1fr))",
    gap: "30px",
  },

  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "28px",
    textAlign: "center",
    boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
    transition: "0.4s",
  },

  cardImg: {
    width: "100%",
    height: "260px",
    objectFit: "cover",
    borderRadius: "18px",
  },

  category: {
    color: "#777",
    fontSize: "14px",
    marginBottom: "10px",
    letterSpacing: "1px",
  },

  price: {
    color: "#6C63FF",
    fontWeight: "bold",
    fontSize: "28px",
  },

  qtyContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    alignItems: "center",
    marginTop: "20px",
  },

  qtyBtn: {
    width: "45px",
    height: "45px",
    borderRadius: "12px",
    border: "none",
    background: "#6C63FF",
    color: "#fff",
    fontSize: "24px",
    cursor: "pointer",
  },

  qtyText: {
    fontSize: "24px",
    fontWeight: "bold",
  },

  buyBtn: {
    marginTop: "25px",
    width: "100%",
    padding: "16px",
    borderRadius: "12px",
    border: "none",
    background:
      "linear-gradient(135deg,#6C63FF,#8B85FF)",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
  },

  checkoutPage: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "linear-gradient(135deg,#6C63FF,#8B85FF)",
  },

  checkoutCard: {
    background: "#fff",
    padding: "50px",
    borderRadius: "25px",
    textAlign: "center",
  },

  paymentPage: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#F5F7FF",
    padding: "20px",
  },

  paymentCard: {
    background: "#fff",
    padding: "40px",
    borderRadius: "25px",
    width: "100%",
    maxWidth: "600px",
    textAlign: "center",
  },

  paymentTitle: {
    marginBottom: "30px",
  },

  paymentGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(140px,1fr))",
    gap: "15px",
  },

  payOption: {
    padding: "16px",
    borderRadius: "12px",
    border: "2px solid #6C63FF",
    background: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
  },

  upiSection: {
    marginTop: "30px",
  },

  upiApps: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(140px,1fr))",
    gap: "15px",
    marginTop: "20px",
  },

  upiBtn: {
    padding: "16px",
    borderRadius: "12px",
    border: "2px solid #6C63FF",
    background: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
  },

  qr: {
    width: "220px",
    marginTop: "25px",
  },

  cardSection: {
    marginTop: "30px",
  },

  subHeading: {
    marginBottom: "20px",
  },

  input: {
    width: "100%",
    padding: "16px",
    marginBottom: "18px",
    borderRadius: "12px",
    border: "2px solid #ddd",
    fontSize: "16px",
  },

  codBox: {
    marginTop: "30px",
    padding: "20px",
    background: "#F5F7FF",
    borderRadius: "14px",
  },

  successPage: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "linear-gradient(135deg,#6C63FF,#8B85FF)",
  },

  successCard: {
    background: "#fff",
    padding: "50px",
    borderRadius: "25px",
    textAlign: "center",
  },
};
