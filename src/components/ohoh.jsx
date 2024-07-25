import React, { useState } from "react";
import { motion } from "framer-motion";
// import Dial from "./Dial";

const Dial = ({ rotation, onRotate }) => (
  <motion.div
    className="xs:w-10 xs:h-10 sm:w-24 sm:h-24 bg-gray-200 rounded-full"
    drag
    dragElastic={0}
    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
    whileDrag={{ scale: 1.2 }}
    onDrag={(_, info) => onRotate(info.offset.x)}
  />
);

const emoticons = ["😀", "😂", "😍", "😎", "😜", "😡", "😱", "😴"];

const App = () => {
  const [rotation, setRotation] = useState(0);
  const [emoticon, setEmoticon] = useState(emoticons[0]);

  const handleRotate = (x) => {
    setRotation(x);
    const index = Math.abs(Math.floor(x / 45)) % emoticons.length;
    setEmoticon(emoticons[index]);
  };

  return (
    <div className="flex flex-1 container justify-center items-center min-h-screen gap-20">
      <Dial rotation={rotation} onRotate={handleRotate} />
      <motion.div
        className="p-4 xs:text-5xl sm:text-9xl"
        key={emoticon}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {emoticon}
      </motion.div>
    </div>
  );
};

export default App;
