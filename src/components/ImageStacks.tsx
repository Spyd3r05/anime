import CardStack from "../components/CardStack";
import type { StackableItem } from "../lib/type";

interface ImageStack extends StackableItem {
  img: string;
}

const ImageStacks = () => {
  const demonSlayer: ImageStack[] = [
    { id: 1, img: "/demon_slayer/1.avif" },
    { id: 2, img: "/demon_slayer/2.jpg" },
    { id: 3, img: "/demon_slayer/3.jpg" },
    { id: 4, img: "/demon_slayer/4.jpg" },
  ];

  const aot: ImageStack[] = [
    { id: 1, img: "/aot/armin.jpg" },
    { id: 2, img: "/aot/commander.jpg" },
    { id: 3, img: "/aot/mi_amor.jpg" },
    { id: 4, img: "/aot/mikasa.jpg" },
    { id: 5, img: "/aot/eren.jpg" },
    { id: 6, img: "/aot/hange.jpg" },
  ];

  const jjk: ImageStack[] = [
    { id: 1, img: "/jjk/geto.jpg" },
    { id: 2, img: "/jjk/gojo.jpg" },
    { id: 3, img: "/jjk/sukuna.jpg" },
    { id: 4, img: "/jjk/nanamin.jpg" },
    { id: 5, img: "/jjk/yuta.jpg" },
    { id: 6, img: "/jjk/nobara.jpg" },
    { id: 7, img: "/jjk/megumi.jpg" },
  ];

  const stackSets: ImageStack[][] = [
    demonSlayer,
    [...aot].slice(0, 4),
    [...demonSlayer].reverse(),
    [...jjk].slice(0, 6),
    [...aot].slice(2, 6),
    [...aot].reverse().slice(0, 4),
    [...jjk].reverse().slice(0, 6),
    [...demonSlayer].slice(0, 3),
    [...aot].slice(0, 3),
    [...jjk],
    [...aot].slice(3),
  ];

  const stackPositions = [
    "top-[3%] left-[5%] md:top-[4%] md:left-[8%]",
    "top-[2%] left-[20%] md:top-[5%] md:left-[24%]",
    "top-[4%] left-[40%] md:top-[7%] md:left-[62%]",
    "top-[12%] left-[88%] md:top-[7%] md:left-[88%]",
    "top-[30%] left-[3%] md:top-[34%] md:left-[6%]",
    "top-[38%] left-[90%] md:top-[42%] md:left-[90%]",
    "top-[72%] left-[4%] md:top-[74%] md:left-[8%]",
    "top-[84%] left-[20%] md:top-[84%] md:left-[24%]",
    "top-[82%] left-[40%] md:top-[83%] md:left-[44%]",
    "top-[84%] left-[62%] md:top-[84%] md:left-[64%]",
    "top-[72%] left-[78%] md:top-[74%] md:left-[80%]",
  ];

  return (
    <>
      {stackSets.map((stackItems, index) => (
        <div key={index} className={`absolute z-10 ${stackPositions[index]}`}>
          <CardStack
            items={stackItems}
            containerClassName="relative h-28 w-20 md:h-36 md:w-24"
            cardClassName="absolute h-28 w-20 cursor-grab rounded-lg shadow-[0_10px_22px_rgba(0,0,0,0.2)] md:h-36 md:w-24"
            stackConfig={{ rotation: 2.4, scale: 1.03, perspective: 900 }}
          >
            {(card) => (
              <img
                src={card.img as string}
                alt="anime image"
                className="pointer-events-none h-full w-full rounded-lg object-cover border border-black/10 bg-white p-0.5"
              />
            )}
          </CardStack>
        </div>
      ))}
    </>
  );
};

export default ImageStacks;
