import { number, shape, string } from 'prop-types';

export const cartItemPropType = shape({
  id: number,
  name: string,
  price: number,
  description: string,
  picture: string
});
