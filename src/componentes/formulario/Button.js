import React from 'react';

export const Button = ({ children }) => {
  return (
    <button
      className="btn btn-lightbg-success
         col-6 menu"
    >
      {children}
    </button>
  );
};
