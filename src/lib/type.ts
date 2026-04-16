export interface StackableItem {
  id: number | string;
  [key: string]: unknown;
}

//display anime on hover types
export type MousePosition = {
  x: number;
  y: number;
};

export type AnimeId = "demonSlayer" | "attackOnTitan" | "jujustuKaisen";

export type AnimeTitle = {
  id: AnimeId;
  displayName: string;
};
