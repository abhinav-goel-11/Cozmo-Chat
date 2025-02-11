import React, { ReactNode } from 'react';
import Modal from 'react-modal';

interface BottomModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  children?: ReactNode;
}


const BottomModal: React.FC<BottomModalProps> = ({ isOpen, onRequestClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="fixed custom-overlay inset-0 bg-black/60 sm:hidden"
      className="fixed bottom-0 left-0 right-0 sm:hidden"
      contentLabel="Bottom Modal"
    >
      <div className="overflow-y-auto custom-overlay-bottom-modal">{children}</div>
    </Modal>
  );
};

export default BottomModal;
