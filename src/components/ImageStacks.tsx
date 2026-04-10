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

  const stackSets: ImageStack[][] = [
    demonSlayer,
    aot,
    [...demonSlayer].reverse(),
    [...aot].slice(0, 4),
    [...aot].slice(2),
    [...demonSlayer, ...aot.slice(0, 2)],
  ];

  const stackPositions = [
    "top-[6%] left-[8%] md:top-[8%] md:left-[12%]",
    "top-[8%] left-[70%] md:top-[10%] md:left-[74%]",
    "top-[28%] left-[2%] md:top-[30%] md:left-[6%]",
    "top-[28%] left-[82%] md:top-[32%] md:left-[82%]",
    "top-[68%] left-[12%] md:top-[70%] md:left-[16%]",
    "top-[68%] left-[72%] md:top-[70%] md:left-[76%]",
  ];

  return (
    <>
      {stackSets.map((stackItems, index) => (
        <div key={index} className={`absolute z-10 ${stackPositions[index]}`}>
          <CardStack
            items={stackItems}
            containerClassName="relative h-44 w-32 md:h-52 md:w-36"
            cardClassName="absolute h-44 w-32 cursor-grab rounded-xl shadow-[0_12px_28px_rgba(0,0,0,0.2)] md:h-52 md:w-36"
            stackConfig={{ rotation: 3.5, scale: 1.05, perspective: 900 }}
          >
            {(card) => (
              <img
                src={card.img as string}
                alt="anime image"
                className="pointer-events-none h-full w-full rounded-xl object-cover border border-black/10 bg-white p-1"
              />
            )}
          </CardStack>
        </div>
      ))}
    </>
  );
};

export default ImageStacks;
