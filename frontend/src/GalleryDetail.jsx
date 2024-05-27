import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import PinchZoomPan from "react-responsive-pinch-zoom-pan";
import "slick-carousel/slick/slick.css";
import "./components/productsPage/productHover.css";

const GalleryDetail = ({ galleries, thumbsPerView }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 500);
    window.onresize = () => setIsMobile(window.innerWidth <= 500);
  }, []);

  return (
    <div className="container productPage">
      <div className="productMain">
        <div className="pdp-slider">
          {isMobile ? (
            <GalleryMobile galleries={galleries} />
          ) : (
            <GalleryDesktop
              galleries={galleries}
              thumbsPerView={thumbsPerView}
            />
          )}
        </div>
        <div className="productPurchase">
          <h4>Redmi 10 Pro</h4>
          <p>Xiomi</p>
          <span className="price">$15,000</span>
          <p className="specificationHead">Description :</p>
          <p>
            Keep your brain engaged with gaming, work or entertainment
            throughout and relish visual treats with the Redmi Note 10 Pro Max
            smartphone. It comes with a 16.9 cm (6.67) FHD+ AMOLED display with
            a fast refresh rate of 120 Hz, so that you can take pleasure in
            seamless gaming and realistic graphics. Also, this phone is equipped
            with an efficient Qualcomm 732G Snapdragon processor that offers
            stellar performance while gaming, streaming videos and watching
            movies. Moreover, thanks to the powerful 5020 mAh battery, this
            phone keeps you engaged to your favourite activities without any
            interruptions.
          </p>
          <p className="specificationHead">Specifications :</p>
          <div className="specifications">
            <div className="key">
              <p>Model Name</p>
              <p>color</p>
            </div>
            <div className="value">
              <p>: Note 10 Pro Max</p>
              <p>: Dark Night</p>
            </div>
          </div>
          <button className="productAddToCart">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

const GalleryDesktop = ({ galleries, thumbsPerView }) => {
  const refSlider = useRef();
  const [currentItem, setCurrentItem] = useState(0);

  const sliderProps = {
    vertical: true,
    accessibility: false,
    slidesToShow: thumbsPerView,
    centerMode: false,
    swipe: false,
    infinite: false,
  };

  const onHoverThumbnail = (position) => {
    setCurrentItem(position);
  };

  const thumbs = galleries.map((item, k) => (
    <Thumbnail
      key={k}
      active={k === currentItem}
      onHover={() => onHoverThumbnail(k)}
      path={item.thumbnail.url}
    />
  ));

  return (
    <>
      <div className="pdp-slider__thumbs" ref={refSlider}>
        {thumbs.length > thumbsPerView ? (
          <Slider {...sliderProps}>{thumbs}</Slider>
        ) : (
          thumbs
        )}
      </div>
      <ZoomPreview
        image={galleries[currentItem].product.url}
        zoom={galleries[currentItem].zoom.url}
      />
    </>
  );
};

const GalleryMobile = ({ galleries }) => {
  const [modal, setModal] = useState({ visible: false, data: "" });
  const [showIconPreview, setShowIconPreview] = useState(true);
  let isSwipe = false;

  const sliderProps = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const onMouseUp = (gallery) => {
    if (!isSwipe) {
      setModal({ visible: !modal.visible, data: gallery.zoom.url });
    }
  };

  const onMouseDown = () => {
    isSwipe = false;
  };

  const onMouseMove = () => {
    isSwipe = true;
  };

  useEffect(() => {
    document.body.style.overflow = modal.visible ? "hidden" : "auto";
  }, [modal]);

  useEffect(() => {
    setTimeout(() => setShowIconPreview(false), 2000);
  }, []);

  return (
    <>
      <Slider className="pdp-slider__mobile" {...sliderProps}>
        {galleries.map((gallery, k) => (
          <div className="mobile-gallery" key={k}>
            <img src={gallery.product.url} alt={gallery.product.alt} />
            <div
              className="preview"
              onMouseDown={onMouseDown}
              onTouchStart={onMouseDown}
              onMouseMove={onMouseMove}
              onTouchMove={onMouseMove}
              onMouseUp={() => onMouseUp(gallery)}
              onTouchEnd={() => onMouseUp(gallery)}
            >
              {showIconPreview && <button>Preview</button>}
            </div>
          </div>
        ))}
      </Slider>
      {modal.visible && (
        <ModalPreview
          image={modal.data}
          closeModal={() => setModal({ visible: !modal.visible, data: "" })}
        />
      )}
    </>
  );
};

const ModalPreview = ({ closeModal, image }) => {
  useEffect(() => {
    console.log("react component mount modal");
  }, []);

  return ReactDOM.createPortal(
    <div className="pdp-modal-preview">
      <button
        className="pdp-modal-preview__close"
        onClick={() => closeModal && closeModal()}
      >
        Cerrar
      </button>
      <div className="pdp-modal-preview__content">
        <PinchZoomPan zoomButtons={false} doubleTapBehavior="zoom" maxScale={1}>
          <img src={image} style={{ width: 400 }} alt="" />
        </PinchZoomPan>
      </div>
    </div>,
    document.body
  );
};

const Thumbnail = ({ path, onHover, active }) => {
  return (
    <div
      onMouseEnter={() => onHover && onHover()}
      className={`pdp-slider__thumb ${
        active ? "pdp-slider__thumb--active" : ""
      }`}
    >
      <img src={path} alt="" />
    </div>
  );
};

const ZoomPreview = ({ image, zoom }) => {
  const onMouseMove = (e) => {
    const target = e.currentTarget;
    const x = (e.nativeEvent.offsetX / target.offsetWidth) * 100;
    const y = (e.nativeEvent.offsetY / target.offsetHeight) * 100;
    target.style.backgroundPosition = x + "% " + y + "%";
  };

  const onMouseEnter = (e) => {
    const target = e.currentTarget;
    const zoom = target.getAttribute("data-zoom");
    const $img = target.querySelector("img");

    if ($img) {
      $img.nextSibling.style.display = "block";
    }

    if (zoom) {
      const temp = new Image();
      temp.src = zoom;
      temp.onload = () => {
        target.style.backgroundImage = `url(${zoom})`;
        if ($img) {
          $img.style.opacity = "0";
          $img.nextSibling.style.display = "none";
        }
      };
    }
  };

  const onMouseLeave = (e) => {
    const target = e.currentTarget;
    const $img = target.querySelector("img");
    target.removeAttribute("style");
    if ($img) {
      $img.style.opacity = "1";
      $img.nextSibling.style.display = "none";
    }
  };

  return (
    <div
      className="pdp-slider__galleries zoom"
      data-zoom={zoom}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img alt="" src={image} />
      <div className="zoom__loading" />
    </div>
  );
};

export default GalleryDetail;
