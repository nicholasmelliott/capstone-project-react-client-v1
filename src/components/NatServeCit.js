import React from "react";

const NatServeCit = ({ insect }) => {
  return (
    <p className="citation-wrapper">
      <strong>Info Source: </strong>
      <a href={`https://explorer.natureserve.org${insect.url}`}>
        https://explorer.natureserve.org{insect.url}
      </a>
    </p>
  );
};

export default NatServeCit;
