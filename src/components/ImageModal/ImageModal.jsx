import Modal from "react-modal";

import css from './ImageModal.module.css'

export default function ImageModal({ isOpen, dataImage, closeModal }) {
 

  return (
    <Modal
      className={css.modalContainer}
      isOpen={isOpen}
      onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          },
        }}
    >
      <div className={css.container}>
        {dataImage && (
          <img
            className={css.img}
            src={dataImage && dataImage.url}
            alt={dataImage && dataImage.description}
          />
        )}
      </div>
    </Modal>
  );
}
