import React from 'react';

const CustomAlert = ({ title, message }) => {
  return (
    <div className="alert alert-info alert-dismissible fade show mt-2 ml-xl-4 mr-xl-4 text-center order-list-alert" role="alert">
      <strong>{title}</strong> {message}
      <button className="close" type="button" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default CustomAlert;
