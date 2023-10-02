import { number, shape, string } from 'prop-types';

export const addressPropType = shape({
  city: string,
  name: string,
  state: string,
  streetName: string,
  streetNumber: number,
  zipCode: string
});
