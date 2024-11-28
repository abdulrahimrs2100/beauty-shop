import React from "react";
import Carousel from "react-multi-carousel";
import "./styles.scss";
import { Button } from "@mui/material";

export default function Hero() {
  return (
    <>
      <div className="hero-section" style={{ boxSizing: "border-box" }}>
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
            className="hero-wrap"
            style={{
              boxSizing: "border-box",
              borderRadius: "10px",
              position: "relative",
            }}
          >
            <div
              className="hero-image-wrap"
              style={{
                boxSizing: "border-box",
                overflow: "hidden",
                borderRadius: "10px",
                position: "relative",
                maxWidth: "70%",
                marginLeft: "auto",
                justifyContent: "flex-end",
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
                filter: "blur(0px)",
                opacity: 1,
              }}
            >
              <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="carousel-container"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                autoPlay
                showDots
                sliderClass=""
                slidesToSlide={1}
                swipeable
                responsive={{
                  desktop: {
                    breakpoint: {
                      max: 3000,
                      min: 1024,
                    },
                    items: 1,
                  },
                  mobile: {
                    breakpoint: {
                      max: 464,
                      min: 0,
                    },
                    items: 1,
                  },
                  tablet: {
                    breakpoint: {
                      max: 1024,
                      min: 464,
                    },
                    items: 1,
                  },
                }}
              >
                <img
                  src="https://media.istockphoto.com/id/1289220585/photo/woman-applying-moisturiser-on-face-during-morning-routine.jpg?s=2048x2048&w=is&k=20&c=TxqENnEeAApAKUxyBmyUGkN9AyUn7_TZ0G2v35XM9_8="
                  style={{
                    display: "block",
                    height: "100%",
                    margin: "auto",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
                <img
                  src="https://media.istockphoto.com/id/1535891417/photo/cosmetics-skin-care-concept-photo-of-close-up-woman-perfect-face-with-hydrated-skin.jpg?s=2048x2048&w=is&k=20&c=xKTV_lpf943XCNJhHC8Ywifob7WRQZcBZ3InqdV29YY="
                  style={{
                    display: "block",
                    height: "100%",
                    margin: "auto",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
                <img
                  src="https://media.istockphoto.com/id/1357956420/photo/cute-lady-using-cosmetic-product-in-studio.jpg?s=2048x2048&w=is&k=20&c=5wxKFEVdpPucF7_jqHLRORKIfYAnMshgp3N8Ni6vTbg="
                  style={{
                    display: "block",
                    height: "100%",
                    margin: "auto",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </Carousel>
            </div>
            <div
              className="hero-content-wrap"
              style={{
                boxSizing: "border-box",
                inset: "0%",
                position: "absolute",
                display: "flex",
                paddingTop: "150px",
                paddingLeft: "50px",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <div
                className="hero-content"
                style={{ boxSizing: "border-box", position: "relative" }}
              >
                <h1
                  className="hero-title"
                  style={{
                    boxSizing: "border-box",
                    margin: "0.67em 0px",
                    marginTop: "0px",
                    fontFamily: "Melodrama, sans-serif",
                    color: "rgb(0, 0, 0)",
                    lineHeight: "1.4em",
                    fontWeight: 600,
                    marginBottom: "30px",
                    fontSize: "90px",
                  }}
                >
                  Discover The
                  <br style={{ boxSizing: "border-box" }} />
                  Beauty Within
                </h1>
                <h2
                  className="hero-sub-title"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    marginBottom: "10px",
                    lineHeight: "1.4em",
                    inset: "auto -20% -51% auto",
                    position: "absolute",
                    justifyContent: "flex-end",
                    fontFamily: "Tuesdaynight, sans-serif",
                    color: "rgb(104, 81, 63)",
                    fontSize: "130px",
                    fontWeight: 400,
                    textAlign: "right",
                  }}
                >
                  You
                </h2>
              </div>
              <Button
                variant="contained"
                style={{
                  boxSizing: "border-box",
                  border: "0px",
                  textDecoration: "none",
                  display: "inline-block",
                  lineHeight: "inherit",
                  cursor: "pointer",
                  padding: "12px 20px",
                  borderStyle: "solid",
                  borderWidth: "1px",
                  borderColor: "rgb(218, 206, 198)",
                  borderRadius: "50%",
                  transition: "300ms ease-in-out",
                  backgroundColor: "rgb(241, 235, 231)",
                  color: "rgb(104, 81, 63)",
                  textTransform: 'none',
                  fontWeight: '500'
                }}
              >
                View collection
              </Button>
            </div>
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
}
`,
        }}
      />
    </>
  );
}
