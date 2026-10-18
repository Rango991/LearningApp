export interface ShopItem {
  id: string;
  title: string;
  emoji: string;
  price: number;
  description: string;
  kind: 'freeze' | 'accessory' | 'skin';
}

export const MAX_FREEZES = 2;

export const shopItems: ShopItem[] = [
  { id: 'freeze', title: 'Streak freeze', emoji: '🧊', price: 40, kind: 'freeze', description: 'Keeps your streak safe if you miss a day. You can hold 2.' },
  { id: 'party-hat', title: 'Party hat', emoji: '🥳', price: 60, kind: 'accessory', description: 'Every day is a party.' },
  { id: 'shades', title: 'Cool shades', emoji: '😎', price: 80, kind: 'accessory', description: 'Too cool for school (but still loves school).' },
  { id: 'bow', title: 'Bow', emoji: '🎀', price: 80, kind: 'accessory', description: 'A very fancy bow.' },
  { id: 'headphones', title: 'Headphones', emoji: '🎧', price: 120, kind: 'accessory', description: 'Revision playlist on.' },
  { id: 'goggles', title: 'Lab goggles', emoji: '🥽', price: 150, kind: 'accessory', description: 'Safety first in the science lab.' },
  { id: 'wizard', title: 'Wizard hat', emoji: '🧙', price: 200, kind: 'accessory', description: 'Science is basically magic.' },
  { id: 'flower-crown', title: 'Flower crown', emoji: '🌸', price: 250, kind: 'accessory', description: 'Fresh from the photosynthesis lesson.' },
  { id: 'crown', title: 'Crown', emoji: '👑', price: 300, kind: 'accessory', description: 'For the queen of revision.' },
  { id: 'pirate', title: 'Pirate hat', emoji: '🏴‍☠️', price: 350, kind: 'accessory', description: 'Treasure = knowledge. Arrr.' },
  { id: 'grad-cap', title: 'Graduation cap', emoji: '🎓', price: 450, kind: 'accessory', description: 'Practising for the big day.' },
  { id: 'astronaut', title: 'Space helmet', emoji: '👩‍🚀', price: 650, kind: 'accessory', description: 'Ready for the Space physics unit.' },
  { id: 'halo', title: 'Golden halo', emoji: '😇', price: 900, kind: 'accessory', description: 'An angel at revision.' },
  { id: 'skin-blue', title: 'Ocean Mito', emoji: '🌊', price: 500, kind: 'skin', description: 'Turns Mito a cool ocean blue.' },
  { id: 'skin-green', title: 'Leafy Mito', emoji: '🌿', price: 700, kind: 'skin', description: 'Mito goes green, like a chloroplast.' },
  { id: 'skin-gold', title: 'Golden Mito', emoji: '🌟', price: 1500, kind: 'skin', description: 'The rarest Mito of all. Shiny!' },
];

/** Mito's body colours for each skin. */
export const SKINS: Record<string, { body: string; edge: string; belly: string }> = {
  default: { body: '#ff9f6b', edge: '#e8743b', belly: '#ffb98f' },
  'skin-blue': { body: '#6cc3ff', edge: '#2f8fd8', belly: '#a6dcff' },
  'skin-green': { body: '#7fd67a', edge: '#3fa53a', belly: '#b5ecb0' },
  'skin-gold': { body: '#ffd447', edge: '#d9a400', belly: '#ffe58a' },
};

/** Emoji a parent can pick for a real-world reward. */
export const REWARD_EMOJI = ['🎬', '🍕', '🍦', '🎮', '🛍️', '📚', '🎨', '🏊', '🎳', '🌙', '🍫', '🎟️'];
