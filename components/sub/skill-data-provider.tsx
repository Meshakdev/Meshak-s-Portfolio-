"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

type SkillDataProviderProps = {
  src: string | null;
  name: string;
  width: number;
  height: number;
  index: number;
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.1;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
    >
      {src ? (
        <Image
          src={`/skills/${src}`}
          width={width}
          height={height}
          alt={name}
        />
      ) : (
        <div className="min-w-[100px] rounded-md border border-[#7042f88b] bg-[#03001459] px-4 py-3 text-center text-sm font-medium text-gray-200 shadow-[inset_0_0_12px_#bf97ff24] backdrop-blur-md">
          {name}
        </div>
      )}
    </motion.div>
  );
};
