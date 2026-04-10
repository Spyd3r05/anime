import { motion } from "motion/react";
import { useCardRotation } from "../hook/useCardRotation";

//props interface
interface DraggableCardProps{
  onSendBack?: () =>void;
  children: React.ReactNode;
  className?:string;  
}
const DraggableCard = ({onSendBack, children, className} : DraggableCardProps )=> {
  const {x,y, rotateX, rotateY, handleDrag} = useCardRotation(onSendBack);

  return (
    <motion.div
    className={className}
    style={{x,y,rotateY,rotateX}}
    drag
    dragConstraints={{top:0, right:0, left:0, bottom:0}}
    dragElastic={0.6}
    onDragEnd={handleDrag}
    whileHover={{ scale: 1.06 }}
    whileTap={{cursor: "grabbing"}}
    >
      {children}
    </motion.div>
  )
}

export default DraggableCard