import React from "react";

const FlickrCit = ({ insect }) => {
  return (
    <p style={{ fontSize: 8 + "px" }}>
      <strong>Photo Source: </strong>
      <a href={insect.photo}>{insect.photo}</a>
    </p>
  );
};

export default FlickrCit;