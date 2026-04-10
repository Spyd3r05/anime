import { motion } from "motion/react";
import { useState, type ReactNode } from "react";
import type {StackableItem} from "../lib/type";
import DraggableCard from "./DraggableCard";

//stack configuration interface
interface StackConfig{
    rotation:number,
    scale:number,
    perspective:number,
}

//props interface
interface CardStackProps<T extends StackableItem>{
    items: T[],
    children: (item:T ) => ReactNode,
    containerClassName?: string,
    cardClassName?: string,
    stackConfig?: Partial<StackConfig>,
}

//default configuration
const defaultConfig = {
    rotation: 4,
    scale: 1.06,
    perspective:600,

}
const CardStack = <T extends StackableItem>({
        items: initialItems,
        children,
        containerClassName = "relative h-52 w-52",
        cardClassName = "absolute h-52 w-52 cursor-grab",
        stackConfig: userConfig = {},
    }: CardStackProps<T>
) => {
    const [items, setItems ] = useState(initialItems);
    const config = { ...defaultConfig, ...userConfig };

    const sendToBack = (id : T["id"]) =>{
        setItems((prev) => {
            const newItems = [...prev];
            const index = newItems.findIndex((item) => item.id === id);
            const [item] = newItems.splice(index, 1);
            newItems.unshift(item);
            return newItems;
        })
    }

  return (
    <div 
    style={{ perspective: config.perspective }}
    className={containerClassName}>
{items.map((item, index) => (
    <DraggableCard
    key={index}
    onSendBack = {() => sendToBack(item.id)}
    className={cardClassName}
    >
        <motion.div
        className="h-full w-full"
        animate={
            {
                rotateZ: (items.length -index -1) *config.rotation,
                scale: config.scale,
                transformOrigin: "50% 50%"            }
        }
        transition={{type: "spring", stiffness: 260, damping:20}}
        >
            {children(item)}
        </motion.div>
    </DraggableCard>

))}
    </div>
  )
}

export default CardStack