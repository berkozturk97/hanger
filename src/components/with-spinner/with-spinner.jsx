import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./with-spinner-style.jsx";

const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherprops }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherprops} />
    );
  }
  return Spinner;
};

export default WithSpinner;
