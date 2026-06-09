import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageModal = ({ src, alt, isOpen, onClose }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="image-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999, // very high to be on top of everything
            cursor: 'zoom-out'
          }}
        >
          <motion.img
            src={src}
            alt={alt}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            style={{
              maxWidth: '90%',
              maxHeight: '90vh', // constrain height so it doesn't overflow screen
              objectFit: 'contain',
              borderRadius: '12px',
              boxShadow: '0 0 40px rgba(107, 227, 255, 0.3)',
              cursor: 'default'
            }}
            onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing modal
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal;
