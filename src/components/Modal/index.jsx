import { useEffect } from "react";
import { createPortal } from "react-dom"
import styles from './modal.module.css'
import { AnimatePresence, motion } from "framer-motion";

const parentVariants = {
  hidden: {
    opacity: 0,
    when: 'afterChildren'
  },
  visible: {
    opacity: 1,
    when: 'beforeChildren'
  },
  exit: {
    opacity: 0,
    when: 'afterChildren'
  }
}

const childrenVariants = {
  hidden: {
    opacity: 0,
    y: 100
  },
  visible: {
    opacity: 1,
    y: 0
  },
  exit: {
    opacity: 0,
    y: -200
  }
}

const ModalContent = ({ children, closeModal }) => {
  useEffect(() => {
    const listner = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    }

    document.addEventListener('keydown', listner)

    return () => {
      document.removeEventListener('keydown', listner)
    }
  }, [closeModal])


  return <motion.div variants={childrenVariants} className={styles.modal_content}>
    <button className={styles.closeBtn} onClick={closeModal}>Закрыть</button>
    {children}
  </motion.div>
}

export const Modal = ({ children, isOpen = false, closeModal }) => {
  const handleClick = (event) => {
    if (event.target === event.currentTarget) {
      return closeModal()
    }
  }

  return createPortal(
    <AnimatePresence>
      {!isOpen ? null :
        <motion.div
          variants={parentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={handleClick}
          className={styles.modal_wrapper}
        >
          <ModalContent closeModal={closeModal}>{children}</ModalContent>
        </motion.div>
      }
    </AnimatePresence>,
    document.getElementById('modal-root'))
}
