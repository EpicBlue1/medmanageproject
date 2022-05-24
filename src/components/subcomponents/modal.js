import { motion, AnimatePresence } from "framer-motion";
import Backdrop from "./backdrop";

const dropIn ={
    hidden: {
        y: "-100vh",
        opacity: 0,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        }
    },
    visible: {
        y: "0",
        opacity: 1,
    },
    exit: {
        y: "-100vh",
        opacity: 0,
    },
}

const Modal = ({handleClose, text}) => {
    return(
        <Backdrop className="backdrop" onClick={handleClose} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>

            <motion.div onClick={(e) => e.stopPropagation()} className="modal borderRad" variants={dropIn} initial="hidden" animate="visible" exit="exit">
                <p>{text}</p>
                <button onClick={handleClose}>Close</button>
            </motion.div>
            
        </Backdrop>
    )
}

export default Modal;