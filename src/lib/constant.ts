import type { AnimeTitle } from "./type";

export const ANIMATION_CONFIG = {
  initial: {
    scaleY: 1.15,
  },
  hover: {
    scaleY: 1.3,
  },
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 10,
    mass: 0.8,
  },
} as const;

export const ANIME_TITLES: AnimeTitle[] = [
  { id: "jujustuKaisen", displayName: "Jujutsu Kaisen" },
  { id: "demonSlayer", displayName: "Demon Slayer" },
  { id: "attackOnTitan", displayName: "Attack on Titan" },
];
