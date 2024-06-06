import React from 'react';
import { useSelector } from 'react-redux';

export default function FakeDataItems() {
  const { productImages } = useSelector((state) => state.products);
  const sizes = { thumbnail: 150, product: 550, zoom: 850 };

  return productImages.map((fileName, i) => {
    const o = {};
    for (let size in sizes) {
      o[size] = {
        url: `http://localhost:3002/images/products/${fileName}`,
        alt: `foto ${i + 1} - ${sizes[size]}px`,
        format: size,
      };
    }
    return o;
  });
}

