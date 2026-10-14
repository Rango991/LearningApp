export interface ShopItem {
  id: string;
  title: string;
  emoji: string;
  price: number;
  description: string;
  kind: 'freeze' | 'accessory';
}

export const MAX_FREEZES = 2;

export const shopItems: ShopItem[] = [
  { id: 'freeze', title: 'Streak freeze', emoji: '🧊', price: 40, kind: 'freeze', description: 'Keeps your streak safe if you miss a day. You can hold 2.' },
  { id: 'party-hat', title: 'Party hat', emoji: '🥳', price: 60, kind: 'accessory', description: 'Every day is a party.' },
  { id: 'shades', title: 'Cool shades', emoji: '😎', price: 80, kind: 'accessory', description: 'Too cool for school (but still loves school).' },
  { id: 'bow', title: 'Bow', emoji: '🎀', price: 80, kind: 'accessory', description: 'A very fancy bow.' },
  { id: 'headphones', title: 'Headphones', emoji: '🎧', price: 120, kind: 'accessory', description: 'Revision playlist on.' },
  { id: 'wizard', title: 'Wizard hat', emoji: '🧙', price: 200, kind: 'accessory', description: 'Science is basically magic.' },
  { id: 'crown', title: 'Crown', emoji: '👑', price: 300, kind: 'accessory', description: 'For the queen of revision.' },
];
