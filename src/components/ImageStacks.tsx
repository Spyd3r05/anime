import CardStack from "../components/CardStack";
import type { StackableItem } from "../lib/type";

//interface
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
  return (
    <CardStack items={demonSlayer}>
      {(card) => (  
        <img
          src={card.img as string}
          alt="anime image"
          className="pointer-events-none h-full w-full rounded-lg object-cover"
        />
    )}
    </CardStack>
  );
};

export default ImageStacks;
