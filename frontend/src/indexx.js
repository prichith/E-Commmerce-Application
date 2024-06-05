const idsPhotoAmazon = [
  "A1QTZDMGkqL",
  "71YRyWb0rCL",
  "81hWbfwDvkL",
  "81L9SKDriUL",
  "81m8Q6CL73L",
  "71-RnxAnScL",
];

export default function fakeDataItems() {
  const sizes = { thumbnail: 150, product: 550, zoom: 850 };

  return idsPhotoAmazon.map((id, i) => {
    const o = {};
    for (let size in sizes) {
      o[size] = {
        url: `https://images-na.ssl-images-amazon.com/images/I/${id}._SX${sizes[size]}_.jpg`,
        alt: `foto ${i + 1} - ${sizes[size]}px`,
        format: size,
      };
    }
    return o;
  });
}

