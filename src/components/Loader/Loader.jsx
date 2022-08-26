import { Grid } from 'react-loader-spinner';
import styles from './loader.module.scss';

function Loader() {
  return (
    <div className={styles.loader}>
      <Grid width="300" color="#3f51b5" />
    </div>
  );
}

export default Loader; 