import React from "react";

export default function ProductSlide() {
  return (
    <>
      <div
        className="container w-container"
        style={{
          boxSizing: "border-box",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "100%",
          paddingRight: "50px",
          paddingLeft: "50px",
          marginTop: "100px",
        }}
      >
        <div
          className="section-title centred"
          style={{
            boxSizing: "border-box",
            marginBottom: "50px",
            textAlign: "center",
          }}
        >
          <h3
            className="sub-title"
            style={{
              boxSizing: "border-box",
              marginTop: "0px",
              lineHeight: "1.4em",
              marginBottom: "-25px",
              justifyContent: "flex-end",
              fontFamily: "Tuesdaynight, sans-serif",
              color: "rgb(104, 81, 63)",
              fontSize: "80px",
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            Products
          </h3>
          <h2
            style={{
              boxSizing: "border-box",
              marginTop: "0px",
              marginBottom: "10px",
              fontFamily: "Melodrama, sans-serif",
              color: "rgb(0, 0, 0)",
              fontSize: "70px",
              lineHeight: "1.4em",
              fontWeight: 600,
            }}
          >
            Healthy skin, wildly you
          </h2>
        </div>
        <div className="w-dyn-list" style={{ boxSizing: "border-box" }}>
          <div
            className="collection-list-product w-dyn-items"
            role="list"
            style={{
              boxSizing: "border-box",
              gap: "15px",
              display: "grid",
              gridAutoColumns: "1fr",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
              gridTemplateRows: "auto",
            }}
          >
            {[
              {
                productName: "Hydrating Moisturizer",
                category: "Moisturizer",
                price: 45,
                imageUrl:
                  "https://img.freepik.com/premium-photo/ecofriendly-amber-glass-soap-dispencer-with-pump-bottle-filled-with-dishsoap-body-wash-dark-ma_169478-982.jpg",
              },
              {
                productName: "Exfoliating Face Scrub",
                category: "Exfoliant",
                price: 32,
                imageUrl:
                  "https://st3.depositphotos.com/3935421/33220/i/450/depositphotos_332202448-stock-photo-beauty-treatment-medical-skincare-cosmetic.jpg",
              },
              {
                productName: "Brightening Serum",
                category: "Serum",
                price: 60,
                imageUrl:
                  "https://st5.depositphotos.com/88929406/74297/i/450/depositphotos_742978924-stock-photo-cream-mockup-bottle-white-background.jpg",
              },
              {
                productName: "Nourishing Face Mask",
                category: "Mask",
                price: 28,
                imageUrl:
                  "https://st5.depositphotos.com/88929406/74297/i/450/depositphotos_742978820-stock-photo-cream-mockup-bottle-white-background.jpg",
              },
              {
                productName: "Anti-Aging Eye Cream",
                category: "Eye Care",
                price: 50,
                imageUrl:
                  "https://st.depositphotos.com/2521309/3253/i/450/depositphotos_32537553-stock-photo-no-icon-cosmetic-bottle-isolated.jpg",
              },
              {
                productName: "Purifying Toner",
                category: "Toner",
                price: 25,
                imageUrl:
                  "https://thumbs.dreamstime.com/b/oil-serum-vitamin-e-glass-bottle-skin-care-beauty-product-anti-age-face-moisturizer-concept-natural-organic-cosmetic-178408505.jpg",
              },
              {
                productName: "Soothing After-Sun Lotion",
                category: "Body Care",
                price: 40,
                imageUrl:
                  "https://st4.depositphotos.com/16122460/28168/i/450/depositphotos_281686862-stock-photo-composition-with-bottle-of-natural.jpg",
              },
              {
                productName: "Vitamin C Face Cream",
                category: "Moisturizer",
                price: 55,
                imageUrl:
                  "https://thumbs.dreamstime.com/b/face-cream-glass-jar-white-gold-background-skin-care-concept-backdrop-beauty-cosmetic-products-face-cream-319755210.jpg",
              },

            ].map((product, index) => (
              <div
                className="w-dyn-item"
                role="listitem"
                style={{ boxSizing: "border-box" }}
                key={index}
              >
                <div
                  id="w-node-_674e2ca9-c380-8930-54ac-dd9f18edfae6-f3c5644d"
                  className="product-item"
                  style={{
                    boxSizing: "border-box",
                    overflow: "hidden",
                    padding: "10px",
                    borderRadius: "10px",
                    textDecoration: "none",
                    display: "flex",
                    height: "100%",
                    marginLeft: "-1px",
                    flexDirection: "column",
                    backgroundColor: "rgb(231, 222, 216)",
                    gridArea: "span 1 / span 1 / span 1 / span 1",
                  }}
                >
                  <a
                    className="product-image-wrap w-inline-block"
                    href="/product/anti-acne-face-wash"
                    style={{
                      boxSizing: "border-box",
                      backgroundColor: "transparent",
                      transition: "color 300ms ease-in-out",
                      textDecoration: "none",
                      color: "rgb(104, 81, 63)",
                      maxWidth: "100%",
                      display: "inline-block",
                      overflow: "hidden",
                      borderRadius: "10px",
                      position: "relative",
                    }}
                  >
                    <img
                      className="product-image"
                      src={product.imageUrl}
                      style={{
                        boxSizing: "border-box",
                        border: "0px",
                        verticalAlign: "middle",
                        display: "inline-block",
                        width: '420px',
                        height: '420px',
                        objectFit: 'cover'
                      }}
                    />
                  </a>
                  <div
                    className="product-info"
                    style={{
                      boxSizing: "border-box",
                      padding: "20px 15px 15px",
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      className="product-meta"
                      style={{
                        boxSizing: "border-box",
                        position: "relative",
                        display: "flex",
                        marginBottom: "6px",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div
                        className="w-dyn-list"
                        style={{ boxSizing: "border-box" }}
                      >
                        <div
                          className="w-dyn-items"
                          role="list"
                          style={{ boxSizing: "border-box" }}
                        >
                          <div
                            className="w-dyn-item"
                            role="listitem"
                            style={{ boxSizing: "border-box" }}
                          >
                            <a
                              className="category-link w-inline-block"
                              href="/category/cleanser"
                              style={{
                                boxSizing: "border-box",
                                backgroundColor: "transparent",
                                transition: "color 300ms ease-in-out",
                                maxWidth: "100%",
                                display: "inline-block",
                                textDecoration: "none",
                                color: "rgb(0, 0, 0)",
                                textTransform: "uppercase",
                              }}
                            >
                              <div style={{ boxSizing: "border-box" }}>
                                {product.category}
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                      <h6
                        className="product-price"
                        style={{
                          boxSizing: "border-box",
                          marginTop: "0px",
                          color: "rgb(0, 0, 0)",
                          lineHeight: "1.3em",
                          fontWeight: 600,
                          marginBottom: "0px",
                          fontFamily: "Inter, sans-serif",
                          fontSize: "15px",
                        }}
                      >
                        $ {product.price} USD
                      </h6>
                    </div>
                    <a
                      className="product-link w-inline-block"
                      href="/product/anti-acne-face-wash"
                      style={{
                        boxSizing: "border-box",
                        backgroundColor: "transparent",
                        transition: "color 300ms ease-in-out",
                        color: "rgb(104, 81, 63)",
                        maxWidth: "100%",
                        display: "inline-block",
                        textDecoration: "none",
                      }}
                    >
                      <h6
                        className="product-name"
                        style={{
                          boxSizing: "border-box",
                          marginTop: "0px",
                          color: "rgb(0, 0, 0)",
                          fontSize: "20px",
                          lineHeight: "1.3em",
                          marginBottom: "0px",
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 400,
                        }}
                      >
                        {product.productName}
                      </h6>
                    </a>
                  </div>
                  <div
                    className="product-button"
                    style={{ boxSizing: "border-box", marginTop: "auto" }}
                  >
                    <a
                      className="button-outline-rounded product-button w-button"
                      href="/product/anti-acne-face-wash"
                      style={{
                        boxSizing: "border-box",
                        border: "0px",
                        textDecoration: "none",
                        lineHeight: "inherit",
                        cursor: "pointer",
                        marginTop: "auto",
                        padding: "12px 20px",
                        borderStyle: "solid",
                        borderWidth: "1px",
                        borderColor: "rgb(218, 206, 198)",
                        borderRadius: "5px",
                        transition: "300ms ease-in-out",
                        backgroundColor: "rgb(241, 235, 231)",
                        color: "rgb(104, 81, 63)",
                        zIndex: 1,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
html {
  box-sizing: border-box;
  font-family: sans-serif;
  text-size-adjust: 100%;
  height: 100%;
}

body {
  box-sizing: border-box;
  margin: 0px;
  min-height: 100%;
  background-color: rgb(241, 235, 231);
  font-family: Inter, sans-serif;
  color: rgb(0, 0, 0);
  font-size: 14px;
  line-height: 1.4em;
  cursor: default;
}
`,
        }}
      />
    </>
  );
}
