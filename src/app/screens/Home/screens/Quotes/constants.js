import img1 from './assets/img1.svg';
import img2 from './assets/img2.png';
import img3 from './assets/img3.png';
import img4 from './assets/img4.png';
import img5 from './assets/img5.png';

export const SLIDER_CONFIG = {
  showArrows: false,
  showStatus: false,
  showThumbs: false,
  infiniteLoop: true,
  autoPlay: true,
  interval: 10000
};

// TODO define this text and images with the customer
export const SLIDER_CONTENT = [
  {
    id: 1,
    image: img1,
    logoAlt: 'The New York Times',
    text:
      '“Excepteur sint occaecat cupidatat non et proident, sunt in voluptate null velit esse cillum dolore.”'
  },
  {
    id: 2,
    image: img3,
    logoAlt: 'Google',
    text: '“Odit suscipit velit sunt ipsum harum nemo, eaque excepturi deleniti!”'
  },
  {
    id: 3,
    image: img2,
    logoAlt: 'Nike',
    text: '“Lorem ipsum dolor sit amet consectetur adipisicing elit.”'
  },
  {
    id: 4,
    image: img4,
    logoAlt: 'Puma',
    text:
      '“Excepteur sint occaecat cupidatat non et proident, sunt in voluptate null velit esse cillum dolore.”'
  },
  {
    id: 5,
    image: img5,
    logoAlt: 'Reebok',
    text: '“Inventore aperiam nam architecto officiis accusantium dolore pariatur.”'
  }
];
