import React from "react";

const FlickrCit = ({ insect }) => {
  return (
    <p className="citation-wrapper">
      <strong>Photo Source: </strong>
      <a href={insect.photo}>{insect.photo}</a>
    </p>
  );
};

export default FlickrCit;