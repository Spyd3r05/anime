//create a custom hook for a card rotation with motion effects
import { useMotionValue, useTransform } from "motion/react";
import type {PanInfo} from "motion/react";

export const useCardRotation = (onThresholdExceed?:  () => void) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [60, -60]);
    const rotateY = useTransform(x, [-100, 100], [-60, 60]);

    const handleDrag = (_:never, info: PanInfo) => {
        if(Math.abs(info.offset.x) > 100 || Math.abs(info.offset.y) > 100){
            onThresholdExceed?.();
        }else{
            x.set(0);
            y.set(0)
        }

    }
    return {x,y, rotateX, rotateY, handleDrag};

}