import { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './modal.module.scss';

function Modal({ onModalFunc, src }) {
  useEffect(() => {
    window.addEventListener('keydown', modalClose);
    return () => window.removeEventListener('keydown', modalClose);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onCloseOverlay = e => {
    if (e.target !== e.currentTarget) {
      return;
    }
    onModalFunc(false);
  };

  const modalClose = e => {
    if (e.code !== 'Escape') {
      return;
    }
    onModalFunc(false);
  };

  return (
    <div className={styles.overlay} onClick={onCloseOverlay}>
      <div className={styles.modal}>
        <img src={src} alt="smt" />
      </div>
    </div>
  );
}

Modal.propTypes = {
  src: PropTypes.string,
  onModalFunc: PropTypes.func,
};

export default Modal;