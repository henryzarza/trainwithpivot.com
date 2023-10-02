import Hero from './screens/Hero';
import Manifesto from './screens/Manifesto';
import Introducing from './screens/Introducing';
import Quotes from './screens/Quotes';
import RightMoves from './screens/RightMoves';
import Feedback from './screens/Feedback';
import Weights from './screens/Weights';
import Barbells from './screens/Barbells';
import ClassesCoaches from './screens/ClassesCoaches';
import Subscription from './screens/Subscription';

export const SECTIONS = [
  {
    id: 1,
    Section: Hero
  },
  {
    id: 2,
    Section: Manifesto
  },
  {
    id: 3,
    Section: Introducing
  },
  {
    id: 4,
    Section: Quotes,
    hide: process.env.REACT_APP_HIDE_QUOTES_SECTION === String(true)
  },
  {
    id: 5,
    Section: RightMoves
  },
  {
    id: 6,
    Section: Feedback
  },
  {
    id: 7,
    Section: Weights
  },
  {
    id: 8,
    Section: Barbells
  },
  {
    id: 9,
    Section: ClassesCoaches
  },
  {
    id: 10,
    Section: Subscription
  }
];
