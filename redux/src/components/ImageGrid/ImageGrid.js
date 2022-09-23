import React, { Fragment, useState } from "react";

function ImageGrid() {
  const images = ["img1", "img2"];

  const [imageList, setImageList] = useState([]);

  console.log("imageList", imageList);

  // ---- Event Handlers ----
  const loadImages = () => {
    setImageList(images);
  };

  // ---- Helpers ----
  const imageListFormatted =
    Array.isArray(imageList) &&
    imageList.length > 0 &&
    imageList.map((image) => {
      return (
        <Fragment key={image}>
          <p>{image}</p>
        </Fragment>
      );
    });

  return (
    <Fragment>
      <div>ImageGrid</div>
      <button onClick={loadImages}>Fetch Images</button>
      {imageListFormatted}
    </Fragment>
  );
}

export default ImageGrid;
