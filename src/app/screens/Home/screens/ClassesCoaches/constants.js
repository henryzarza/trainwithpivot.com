import melissa from './assets/Melissa-Boyd.jpg';
import bryan from './assets/Bryan-Fobbs.jpg';
import trish from './assets/Trish-Poulose.jpg';

// TODO change this with the real data
export const CLASSES = [
  {
    id: 1,
    image: melissa,
    trainer: 'Melissa Boyd',
    title: '30m Shoulder Burnout',
    schedule: 'Sunday 1/5/20 - 2:00 PM',
    category: 'Classes',
    chip: 'Recent Classes',
    text:
      'From 10– to 30– minute intervals, jump into a live class or grab one on-demand. Pivot Coaches construct a full body workout by chaining specific exercises together in circuits.'
  },
  {
    id: 2,
    image: bryan,
    trainer: 'Bryan Fobbs',
    title: 'Week 1: 45m Full Body Strength',
    schedule: 'Wednesday 2/12/20 - 6:00 PM',
    category: 'Programs',
    chip: 'Sculpt & shred',
    text:
      'Schedule your workouts into your week with programs. Programs consist of 10 to 30 classes, lead by one Pivot coach, that you take in sequential order to reap the most body progress.'
  },
  {
    id: 3,
    image: trish,
    trainer: 'Trish Poulose',
    title: '15m Tabata HIT',
    schedule: 'Friday 3/6/20 - 7:30 AM',
    category: 'Collections',
    chip: 'Quick intervals',
    text:
      'Fresh inspiration, fun challenges. Collections is a grab bag that never disappoints. Take on the challenge of your peers’ hardest reviewed classes or go back and beat what used to be your PB.'
  }
];

export const PERCENT_TRIGGER_CARD = 0.15;

export const PERCENT_TRIGGER_CARD_COACH = 0.1;

export const OPACITY_PERCENT = 0.01;

export const SCALE_OPACITY_TITLE = 4;

export const QTY_COACHES_TO_SHOW = 4;
