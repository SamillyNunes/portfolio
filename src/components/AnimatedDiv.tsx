import { motion } from "framer-motion";
import { useMemo } from "react";
import getShowAnimation from "@/utils/showAnimation";

interface AnimatedDivProps{
    className?: string;
    children: any;
}

export default function AnimatedDiv(props: AnimatedDivProps){    

    const scrollAnimation = useMemo(()=> getShowAnimation(), []);

    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={scrollAnimation}
            className={props.className}
        >
            {props.children}
        </motion.div>
    );
}