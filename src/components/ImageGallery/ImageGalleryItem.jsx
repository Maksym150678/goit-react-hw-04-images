import PropTypes from 'prop-types';
import styles from './image-gallery.module.scss';

function ImageGalleryItem ({ id, url, largeUrl, onClickFunc }) {
  const getDataValue = ({ target }) => {
    onClickFunc(target.dataset.largeimg);
  };

  return (
    <li className={styles.item}>
      <img
        src={url}
        alt="imagess"
        data-id={id}
        data-largeimg={largeUrl}
        onClick={getDataValue}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  largeUrl: PropTypes.string,
  url: PropTypes.string,
  onClickFunc: PropTypes.func,
};

export default ImageGalleryItem;