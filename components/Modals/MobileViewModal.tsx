import ReactModal from "react-modal";

type MobileViewModalProps = {
  isOpen: boolean;
  handleClose?: () => void;
  children: React.ReactNode;
  contentLabel: string;
};
export default function MobileViewModal({
  isOpen,
  handleClose,
  children,
  contentLabel,
}: MobileViewModalProps) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleClose}
      overlayClassName="md:hidden fixed inset-0 z-30 "
      className="fixed inset-0 all-modal-bg md:hidden outline-none"
      contentLabel={contentLabel}
      ariaHideApp={false}
    >
      {children}
    </ReactModal>
  );
}
