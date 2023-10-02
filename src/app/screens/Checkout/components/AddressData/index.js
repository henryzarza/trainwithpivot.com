import React from 'react';

import { addressPropType } from '~propTypes/address';

function AddressData({ city, className, name, state, streetName, streetNumber, title, zipCode }) {
  return (
    <div className={`column ${className}`}>
      <span className="small-subtitle m-bottom-2">{title}</span>
      <span className="base-text">{name}</span>
      <span className="base-text">{`${streetNumber} ${streetName}`}</span>
      <span className="base-text">{`${city}, ${state} ${zipCode}`}</span>
    </div>
  );
}

AddressData.defaultProps = {
  className: ''
};

AddressData.propTypes = addressPropType;

export default AddressData;
