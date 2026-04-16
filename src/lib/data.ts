import geto from "/jjk/geto.jpg";
import nanami from "/jjk/nanamin.jpg";
import gojo from "/jjk/gojo.jpg";
import yuji from "/jjk/yuji.jpg";
import megumi from "/jjk/megumi.jpg";
import nobara from "/jjk/nobara.jpg";
import tanjiro from "/demon_slayer/1.avif";
import zenitsu from "/demon_slayer/2.jpg";
import nezuko from "/demon_slayer/4.jpg";
import inosuke from "/demon_slayer/3.jpg";
import armin from "/aot/armin.jpg";
import eren from "/aot/eren.jpg";
import mikasa from "/aot/mikasa.jpg";
import levi from "/aot/mi_amor.jpg";
import hange from "/aot/hange.jpg";
import commander from "/aot/commander.jpg";

export type animeCardEntry = {
  src: string;
  offsetX: number;
  offsetY: number;
  rotation: number;
};

import type { AnimeId } from "./type";

export const animeCardsData: Record<AnimeId, animeCardEntry[]> = {
  jujustuKaisen: [
    { src: geto, offsetX: -420, offsetY: 0, rotation: 5 },
    { src: nanami, offsetX: 0, offsetY: 0, rotation: 0 },
    { src: gojo, offsetX: 0, offsetY: 0, rotation: 0 },
    { src: yuji, offsetX: 420, offsetY: 0, rotation: -5 },
    { src: megumi, offsetX: 0, offsetY: 0, rotation: 0 },
    { src: nobara, offsetX: 0, offsetY: 0, rotation: 0 },
  ],
  demonSlayer: [
    { src: tanjiro, offsetX: 0, offsetY: 0, rotation: 0 },
    { src: zenitsu, offsetX: 0, offsetY: 0, rotation: 0 },
    { src: nezuko, offsetX: 0, offsetY: 0, rotation: 0 },
    { src: inosuke, offsetX: 0, offsetY: 0, rotation: 0 },
  ],
  attackOnTitan: [
    { src: armin, offsetX: 0, offsetY: -70, rotation: 0 },
    { src: eren, offsetX: 0, offsetY: 0, rotation: 0 },
    { src: mikasa, offsetX: 0, offsetY: 0, rotation: 0 },
    { src: levi, offsetX: 0, offsetY: 0, rotation: 0 },
    { src: hange, offsetX: 0, offsetY: 0, rotation: 0 },
    { src: commander, offsetX: 0, offsetY: 0, rotation: 0 },
  ],
};
