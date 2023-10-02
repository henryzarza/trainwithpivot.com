import React from 'react';

import { addressPropType } from '~propTypes/address';

function AddressData({ city, className, firstName, lastName, line1, line2, state, title, postalCode }) {
  return (
    <div className={`column ${className}`}>
      <span className="small-subtitle m-bottom-2">{title}</span>
      <span className="base-text">{`${firstName} ${lastName}`}</span>
      <span className="base-text">{`${line1} ${line2 || ''}`}</span>
      <span className="base-text">{`${city}, ${state} ${postalCode}`}</span>
    </div>
  );
}

AddressData.defaultProps = {
  className: ''
};

AddressData.propTypes = addressPropType;

export default AddressData;
