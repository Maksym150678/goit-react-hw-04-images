import PropTypes from 'prop-types';
import styles from './button.module.scss';

function Button({ value, type = 'button', onBtnClick }) {
  return (
    <div className={styles.wrap}>
      <button className={styles.btn} type={type} onClick={() => onBtnClick()}>
        {value}
      </button>
    </div>
  );
}

Button.propTypes = {
  value: PropTypes.string,
  onBtnClick: PropTypes.func,
};

export default Button;