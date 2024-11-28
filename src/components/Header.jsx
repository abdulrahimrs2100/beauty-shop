import React from "react";
import BrandLogo from "../assets/brand-logo.svg";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <div
        className="navbar w-nav"
        role="banner"
        style={{
          boxSizing: "border-box",
          background: "rgb(221, 221, 221)",
          position: "relative",
          zIndex: 1000,
          paddingTop: "20px",
          paddingBottom: "20px",
          backgroundColor: "transparent",
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
            className="w-layout-grid grid-nav"
            style={{
              boxSizing: "border-box",
              gap: "16px",
              display: "grid",
              gridAutoColumns: "1fr",
              alignItems: "center",
              gridTemplateColumns: "0.25fr 1fr 0.25fr",
              gridTemplateRows: "auto",
            }}
          >
            <a
              className="brand w-nav-brand w--current"
              aria-current="page"
              aria-label="home"
              href="/"
              style={{
                boxSizing: "border-box",
                backgroundColor: "transparent",
                transition: "color 300ms ease-in-out",
                textDecoration: "none",
                position: "relative",
                cssFloat: "left",
                color: "rgb(51, 51, 51)",
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
            </a>
            <nav
              id="w-node-_2c5d90ab-f8e3-2f9c-2f6e-1a753b238e41-3b238e3c"
              className="nav-menu w-nav-menu"
              role="navigation"
              style={{
                boxSizing: "border-box",
                display: "block",
                position: "relative",
                cssFloat: "right",
                justifyContent: "center",
                alignItems: "center",
                justifySelf: "center",
              }}
            >
              <a
                className="nav-link w-nav-link"
                href="/shop"
                style={{
                  boxSizing: "border-box",
                  backgroundColor: "transparent",
                  transition: "color 300ms ease-in-out",
                  textDecoration: "none",
                  padding: "20px",
                  position: "relative",
                  display: "inline-block",
                  verticalAlign: "top",
                  color: "rgb(34, 34, 34)",
                  textAlign: "left",
                  marginLeft: "auto",
                  marginRight: "auto",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "18px",
                  fontWeight: 400,
                  maxWidth: "100%",
                }}
              >
                Shop All
              </a>
              <a
                className="nav-link w-nav-link"
                href="/our-story"
                style={{
                  boxSizing: "border-box",
                  backgroundColor: "transparent",
                  transition: "color 300ms ease-in-out",
                  textDecoration: "none",
                  padding: "20px",
                  position: "relative",
                  display: "inline-block",
                  verticalAlign: "top",
                  color: "rgb(34, 34, 34)",
                  textAlign: "left",
                  marginLeft: "auto",
                  marginRight: "auto",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "18px",
                  fontWeight: 400,
                  maxWidth: "100%",
                }}
              >
                Our Story
              </a>
              <a
                className="nav-link w-nav-link"
                href="/blog"
                style={{
                  boxSizing: "border-box",
                  backgroundColor: "transparent",
                  transition: "color 300ms ease-in-out",
                  textDecoration: "none",
                  padding: "20px",
                  position: "relative",
                  display: "inline-block",
                  verticalAlign: "top",
                  color: "rgb(34, 34, 34)",
                  textAlign: "left",
                  marginLeft: "auto",
                  marginRight: "auto",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "18px",
                  fontWeight: 400,
                  maxWidth: "100%",
                }}
              >
                Blog
              </a>
              <div
                className="nav-link w-dropdown"
                style={{
                  boxSizing: "border-box",
                  display: "inline-block",
                  position: "relative",
                  textAlign: "left",
                  marginLeft: "auto",
                  marginRight: "auto",
                  zIndex: 900,
                  fontFamily: "Inter, sans-serif",
                  fontSize: "18px",
                  fontWeight: 400,
                  maxWidth: "100%",
                }}
              >
                <div
                  id="w-dropdown-toggle-0"
                  className="dropdown-toggle w-dropdown-toggle"
                  aria-controls="w-dropdown-list-0"
                  aria-expanded="false"
                  aria-haspopup="menu"
                  role="button"
                  tabIndex="0"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "none",
                    padding: "20px",
                    whiteSpace: "nowrap",
                    position: "relative",
                    verticalAlign: "top",
                    color: "rgb(34, 34, 34)",
                    textAlign: "left",
                    marginLeft: "auto",
                    marginRight: "auto",
                    userSelect: "none",
                    display: "inline-block",
                    cursor: "pointer",
                    paddingRight: "40px",
                    transition: "color 300ms ease-in-out",
                  }}
                >
                  <div
                    className="dropdown-icon w-icon-dropdown-toggle"
                    aria-hidden="true"
                    style={{
                      boxSizing: "border-box",
                      fontVariant: "normal",
                      speak: "none",
                      fontStyle: "normal",
                      fontWeight: "normal",
                      textTransform: "none",
                      lineHeight: 1,
                      WebkitFontSmoothing: "antialiased",
                      margin: "auto 20px auto auto",
                      position: "absolute",
                      top: "0px",
                      right: "0px",
                      bottom: "0px",
                      width: "1em",
                      height: "1em",
                      fontSize: "13px",
                      fontFamily: "webflow-icons",
                    }}
                  />
                  <div
                    style={{ boxSizing: "border-box" }}
                    onClick={handleClick}
                  >
                    About Us
                    <KeyboardArrowDownIcon style={{ verticalAlign:'middle'}} />
                  </div>
                </div>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  style={{
                    marginTop: "10px",
                  }}
                >
                  {["Back to Home", "FAQs", "Contact Us"].map((option) => (
                    <MenuItem
                      key={option}
                      onClick={handleClose}
                      style={{
                        boxSizing: "border-box",
                        backgroundColor: "transparent",
                        textDecoration: "none",
                        whiteSpace: "nowrap",
                        position: "relative",
                        verticalAlign: "top",
                        textAlign: "left",
                        marginLeft: "auto",
                        marginRight: "auto",
                        padding: "10px 20px",
                        display: "block",
                        transition: "color 300ms ease-in-out",
                        fontSize: "15px",
                        color: "rgb(104, 81, 63)",
                      }}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            </nav>
            <div
              id="w-node-_2c5d90ab-f8e3-2f9c-2f6e-1a753b238e48-3b238e3c"
              className="nav-button w-nav-button"
              aria-controls="w-nav-overlay-0"
              aria-expanded="false"
              aria-haspopup="menu"
              aria-label="menu"
              role="button"
              tabIndex="0"
              style={{
                boxSizing: "border-box",
                padding: "18px",
                position: "relative",
                cssFloat: "right",
                fontSize: "24px",
                display: "none",
                cursor: "pointer",
                WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                userSelect: "text",
              }}
            >
              <div
                className="icon w-icon-nav-menu"
                style={{
                  boxSizing: "border-box",
                  fontVariant: "normal",
                  speak: "none",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  textTransform: "none",
                  lineHeight: 1,
                  WebkitFontSmoothing: "antialiased",
                  fontFamily: "webflow-icons",
                }}
              />
            </div>
          </div>
        </div>
        <div
          id="w-nav-overlay-0"
          className="w-nav-overlay"
          style={{
            boxSizing: "border-box",
            overflow: "hidden",
            position: "absolute",
            display: "none",
            top: "100%",
            left: "0px",
            right: "0px",
            width: "100%",
          }}
        />
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
}
`,
        }}
      />
    </>
  );
}
