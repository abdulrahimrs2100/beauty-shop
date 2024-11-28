import React from "react";
import BrandLogo from "../assets/brand-logo.svg";

export default function Footer() {
  return (
    <>
      <footer
        id="footer"
        className="footer"
        style={{
          boxSizing: "border-box",
          display: "block",
          paddingTop: "0px",
          paddingBottom: "40px",
          alignItems: "flex-start",
          marginTop: '100px'
        }}
      >
        <div
          className="container w-container"
          style={{
            boxSizing: "border-box",
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "100%",
            paddingRight: "50px",
            paddingLeft: "50px",
          }}
        >
          <div
            className="w-layout-grid grid-footer"
            style={{
              boxSizing: "border-box",
              display: "grid",
              gridAutoColumns: "1fr",
              padding: "50px",
              borderRadius: "10px",
              gridTemplateColumns: "0.75fr 1fr 1fr 1fr",
              gridTemplateRows: "auto",
              backgroundColor: "rgb(231, 222, 216)",
              gap: "100px",
            }}
          >
            <div
              id="w-node-ceaffa54-90f1-7e43-9564-38581466f8a6-1466f8a3"
              className="footer-item"
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                gridArea: "span 1 / span 1 / span 1 / span 1",
                justifyContent: 'center'
              }}
            >
              <div
                className="footer-logo"
                style={{
                  boxSizing: "border-box",
                  marginBottom: "20px",
                  alignItems: "center",
                }}
              >
                <img
                  src={BrandLogo}
                  style={{
                    boxSizing: "border-box",
                    border: "0px",
                    verticalAlign: "middle",
                    display: "inline-block",
                    maxWidth: "100%",
                  }}
                />
              </div>
              <p
                style={{
                  boxSizing: "border-box",
                  marginTop: "0px",
                  marginBottom: "10px",
                  textAlign: 'center'
                }}
              >
                The wise man therefore always holds in these matters to this
                principle
              </p>
            </div>
            <div
              id="w-node-ceaffa54-90f1-7e43-9564-38581466f8b5-1466f8a3"
              className="footer-item"
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                gridArea: "span 1 / span 1 / span 1 / span 1",
              }}
            >
              <h5
                className="footer-title"
                style={{
                  boxSizing: "border-box",
                  marginTop: "0px",
                  fontFamily: "Melodrama, sans-serif",
                  color: "rgb(0, 0, 0)",
                  fontSize: "28px",
                  lineHeight: "1.4em",
                  fontWeight: 600,
                  marginBottom: "30px",
                }}
              >
                Pages
              </h5>
              <div
                className="grid-footer-menu"
                style={{
                  boxSizing: "border-box",
                  gap: "16px",
                  borderRadius: "10px",
                  display: "grid",
                  gridAutoColumns: "1fr",
                  gridTemplateColumns: "0.75fr 1fr",
                  gridTemplateRows: "auto",
                  backgroundColor: "rgb(231, 222, 216)",
                }}
              >
                <ul
                  className="w-list-unstyled"
                  role="list"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    marginBottom: "10px",
                    listStyle: "none",
                    paddingLeft: "0px",
                  }}
                >
                  <li style={{ boxSizing: "border-box", marginBottom: "10px" }}>
                    <a
                      className="footer-link w--current"
                      aria-current="page"
                      href="/"
                      style={{
                        boxSizing: "border-box",
                        backgroundColor: "transparent",
                        transition: "color 300ms ease-in-out",
                        textDecoration: "none",
                        color: "rgb(0, 0, 0)",
                      }}
                    >
                      Home
                    </a>
                  </li>
                  <li style={{ boxSizing: "border-box", marginBottom: "10px" }}>
                    <a
                      className="footer-link"
                      href="/home-2"
                      style={{
                        boxSizing: "border-box",
                        backgroundColor: "transparent",
                        transition: "color 300ms ease-in-out",
                        textDecoration: "none",
                        color: "rgb(0, 0, 0)",
                      }}
                    >
                      Home 2
                    </a>
                  </li>
                  <li style={{ boxSizing: "border-box", marginBottom: "10px" }}>
                    <a
                      className="footer-link"
                      href="/shop"
                      style={{
                        boxSizing: "border-box",
                        backgroundColor: "transparent",
                        transition: "color 300ms ease-in-out",
                        textDecoration: "none",
                        color: "rgb(0, 0, 0)",
                      }}
                    >
                      Shop All
                    </a>
                  </li>
                  <li style={{ boxSizing: "border-box", marginBottom: "10px" }}>
                    <a
                      className="footer-link"
                      href="/our-story"
                      style={{
                        boxSizing: "border-box",
                        backgroundColor: "transparent",
                        transition: "color 300ms ease-in-out",
                        textDecoration: "none",
                        color: "rgb(0, 0, 0)",
                      }}
                    >
                      Our Story
                    </a>
                  </li>
                  <li style={{ boxSizing: "border-box", marginBottom: "10px" }}>
                    <a
                      className="footer-link"
                      href="/blog"
                      style={{
                        boxSizing: "border-box",
                        backgroundColor: "transparent",
                        transition: "color 300ms ease-in-out",
                        textDecoration: "none",
                        color: "rgb(0, 0, 0)",
                      }}
                    >
                      Blog
                    </a>
                  </li>
                  <li style={{ boxSizing: "border-box", marginBottom: "10px" }}>
                    <a
                      className="footer-link"
                      href="/faq"
                      style={{
                        boxSizing: "border-box",
                        backgroundColor: "transparent",
                        transition: "color 300ms ease-in-out",
                        textDecoration: "none",
                        color: "rgb(0, 0, 0)",
                      }}
                    >
                      FAQs
                    </a>
                  </li>
                </ul>
                <ul
                  className="w-list-unstyled"
                  role="list"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    marginBottom: "10px",
                    listStyle: "none",
                    paddingLeft: "0px",
                  }}
                >
                  <li style={{ boxSizing: "border-box", marginBottom: "10px" }}>
                    <a
                      className="footer-link"
                      href="/contact-us"
                      style={{
                        boxSizing: "border-box",
                        backgroundColor: "transparent",
                        transition: "color 300ms ease-in-out",
                        textDecoration: "none",
                        color: "rgb(0, 0, 0)",
                      }}
                    >
                      Contact Us
                    </a>
                  </li>
                  <li style={{ boxSizing: "border-box", marginBottom: "10px" }}>
                    <a
                      className="footer-link"
                      href="/utility-pages/instructions"
                      style={{
                        boxSizing: "border-box",
                        backgroundColor: "transparent",
                        transition: "color 300ms ease-in-out",
                        textDecoration: "none",
                        color: "rgb(0, 0, 0)",
                      }}
                    >
                      Instructions
                    </a>
                  </li>
                  <li style={{ boxSizing: "border-box", marginBottom: "10px" }}>
                    <a
                      className="footer-link"
                      href="/utility-pages/style-guide"
                      style={{
                        boxSizing: "border-box",
                        backgroundColor: "transparent",
                        transition: "color 300ms ease-in-out",
                        textDecoration: "none",
                        color: "rgb(0, 0, 0)",
                      }}
                    >
                      Style Guide
                    </a>
                  </li>
                  <li style={{ boxSizing: "border-box", marginBottom: "10px" }}>
                    <a
                      className="footer-link"
                      href="/utility-pages/licenses"
                      style={{
                        boxSizing: "border-box",
                        backgroundColor: "transparent",
                        transition: "color 300ms ease-in-out",
                        textDecoration: "none",
                        color: "rgb(0, 0, 0)",
                      }}
                    >
                      Licenses
                    </a>
                  </li>
                  <li style={{ boxSizing: "border-box", marginBottom: "10px" }}>
                    <a
                      className="footer-link"
                      href="/utility-pages/changelog"
                      style={{
                        boxSizing: "border-box",
                        backgroundColor: "transparent",
                        transition: "color 300ms ease-in-out",
                        textDecoration: "none",
                        color: "rgb(0, 0, 0)",
                      }}
                    >
                      Changelog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              id="w-node-ceaffa54-90f1-7e43-9564-38581466f8cb-1466f8a3"
              className="footer-item"
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                gridArea: "span 1 / span 1 / span 1 / span 1",
              }}
            >
              <h5
                className="footer-title"
                style={{
                  boxSizing: "border-box",
                  marginTop: "0px",
                  fontFamily: "Melodrama, sans-serif",
                  color: "rgb(0, 0, 0)",
                  fontSize: "28px",
                  lineHeight: "1.4em",
                  fontWeight: 600,
                  marginBottom: "30px",
                }}
              >
                Contact us
              </h5>
              <div
                className="footer-email"
                style={{ boxSizing: "border-box", marginBottom: "40px" }}
              >
                <p
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    marginBottom: "10px",
                  }}
                >
                  Have questions or suggestions?
                </p>
                <a
                  href="mailto:example@domain.com"
                  style={{
                    boxSizing: "border-box",
                    backgroundColor: "transparent",
                    transition: "color 300ms ease-in-out",
                    textDecoration: "none",
                    color: "rgb(104, 81, 63)",
                  }}
                >
                  example@domain.com
                </a>
              </div>
              <div style={{ boxSizing: "border-box" }}>
                <p
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    marginBottom: "10px",
                  }}
                >
                  Need assistance? Give us a call.
                </p>
                <a
                  href="tel:+015982694756"
                  style={{
                    boxSizing: "border-box",
                    backgroundColor: "transparent",
                    transition: "color 300ms ease-in-out",
                    textDecoration: "none",
                    color: "rgb(104, 81, 63)",
                  }}
                >
                  +01 123 456 879
                </a>
              </div>
            </div>
            <div
              id="w-node-ceaffa54-90f1-7e43-9564-38581466f8d8-1466f8a3"
              className="footer-item"
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                gridArea: "span 1 / span 1 / span 1 / span 1",
              }}
            >
              <h5
                className="footer-title"
                style={{
                  boxSizing: "border-box",
                  marginTop: "0px",
                  fontFamily: "Melodrama, sans-serif",
                  color: "rgb(0, 0, 0)",
                  fontSize: "28px",
                  lineHeight: "1.4em",
                  fontWeight: 600,
                  marginBottom: "30px",
                }}
              >
                We’re here for you
              </h5>
              <p
                style={{
                  boxSizing: "border-box",
                  marginTop: "0px",
                  marginBottom: "10px",
                }}
              >
                Monday - Thursday: 9:30 - 18:00
              </p>
              <p
                style={{
                  boxSizing: "border-box",
                  marginTop: "0px",
                  marginBottom: "10px",
                }}
              >
                Friday: 9:30 - 15:00
              </p>
              <div
                className="footer-social"
                style={{
                  boxSizing: "border-box",
                  display: "flex",
                  marginTop: "60px",
                  alignItems: "flex-start",
                }}
              >
                <a
                  className="footer-social-link w-inline-block"
                  href="https://facebook.com/"
                  target="_blank"
                  style={{
                    boxSizing: "border-box",
                    backgroundColor: "transparent",
                    transition: "color 300ms ease-in-out",
                    textDecoration: "none",
                    color: "rgb(104, 81, 63)",
                    maxWidth: "100%",
                    display: "inline-block",
                    marginRight: "40px",
                  }}
                >
                  <img
                    className="footer-social-icon"
                    width={18}
                    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                    style={{
                      boxSizing: "border-box",
                      border: "0px",
                      verticalAlign: "middle",
                      display: "inline-block",
                      maxWidth: "100%",
                      height: "18px",
                    }}
                  />
                </a>
                <a
                  className="footer-social-link w-inline-block"
                  href="https://www.instagram.com/"
                  target="_blank"
                  style={{
                    boxSizing: "border-box",
                    backgroundColor: "transparent",
                    transition: "color 300ms ease-in-out",
                    textDecoration: "none",
                    color: "rgb(104, 81, 63)",
                    maxWidth: "100%",
                    display: "inline-block",
                    marginRight: "40px",
                  }}
                >
                  <img
                    className="footer-social-icon"
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                    style={{
                      boxSizing: "border-box",
                      border: "0px",
                      verticalAlign: "middle",
                      display: "inline-block",
                      maxWidth: "100%",
                      height: "18px",
                    }}
                  />
                </a>
                <a
                  className="footer-social-link w-inline-block"
                  href="https://in.pinterest.com/"
                  style={{
                    boxSizing: "border-box",
                    backgroundColor: "transparent",
                    transition: "color 300ms ease-in-out",
                    textDecoration: "none",
                    color: "rgb(104, 81, 63)",
                    maxWidth: "100%",
                    display: "inline-block",
                    marginRight: "40px",
                  }}
                >
                  <img
                    className="footer-social-icon"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"
                    style={{
                      boxSizing: "border-box",
                      border: "0px",
                      verticalAlign: "middle",
                      display: "inline-block",
                      maxWidth: "100%",
                      height: "18px",
                    }}
                  />
                </a>
                <a
                  className="footer-social-link w-inline-block"
                  href="https://twitter.com/"
                  style={{
                    boxSizing: "border-box",
                    backgroundColor: "transparent",
                    transition: "color 300ms ease-in-out",
                    textDecoration: "none",
                    color: "rgb(104, 81, 63)",
                    maxWidth: "100%",
                    display: "inline-block",
                    marginRight: "40px",
                  }}
                >
                  <img
                    className="footer-social-icon"
                    src="https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg"
                    style={{
                      boxSizing: "border-box",
                      border: "0px",
                      verticalAlign: "middle",
                      display: "inline-block",
                      maxWidth: "100%",
                      height: "18px",
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
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
