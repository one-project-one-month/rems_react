import { useState } from "react";
import {AnimatePresence, motion} from "framer-motion"
import { DownOutlined, UpOutlined } from "@ant-design/icons";

interface FlyoutProps {
  children: React.ReactNode;
  FlyoutContent: React.FC;
}

const Flyout: React.FC<FlyoutProps> = ({children, FlyoutContent}) => {

  const [open, setOpen] = useState<boolean>(false);
  const showFlyout = open && FlyoutContent;

  return (
    <div 
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative h-fit w-fit "
    >
      <div className="relative rounded-md bg-white border-[0.3px] border-black text-black hover:border-blue-400 hover:text-gray-400 px-4 py-[0.22rem] font-[500] text-[1rem]">
        {children}
        <span 
          className="cursor-pointer lg:hidden z-[9999999]" 
          onClick={() => setOpen(!open)}
        >
          {open ? <UpOutlined /> : <DownOutlined />}
        </span>
      </div>

      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{opacity: 0, y: 15}} 
            animate={{opacity: 1, y: 0}} 
            exit={{opacity: 0, y: 15}}
            style={{x: "-50%"}}
            transition={{duration: 0.3, ease: "easeOut"}} 
            className="absolute left-[60%] top-[3.5rem] z-[999] -translate-x-1/2 bg-white rounded-lg px-7 border-[0.3px] border-black py-8 text-black shadow-2xl"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent rounded-lg"></div>
            <FlyoutContent/>
          </motion.div>
        ) }
      </AnimatePresence>
    </div>
  )
}

export default Flyout;