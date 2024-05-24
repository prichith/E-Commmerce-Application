import React from "react";
import './slider.css';

// const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const colors = [
  "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/b2fa49c3e888ba33.jpg?q=20",
  "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/1f25201ced5d720d.jpg?q=20",
  "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/f21c8c88a0bb63e0.png?q=20",
];
const delay = 2500;

export default function SlideShow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slider">
      <div className="container">
        <div className="slideshow">
          <div
            className="slideshowSlider"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {colors.map((backgroundColor, index) => (
              <div className="slide" key={index} style={{ backgroundColor }}>
                <img src={backgroundColor} />
              </div>
            ))}
          </div>

          <div className="slideshowDots">
            {colors.map((_, idx) => (
              <div
                key={idx}
                className={`slideshowDot${index === idx ? " active" : ""}`}
                onClick={() => {
                  setIndex(idx);
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
