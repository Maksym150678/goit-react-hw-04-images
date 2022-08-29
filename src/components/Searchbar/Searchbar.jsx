import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

import styles from './searchbar.module.scss';

function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const onFormSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      toast.warn('uncorrect value', { theme: 'dark' });
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  const handleNameChange = e => {
    setQuery(e.target.value);
  };
    return (
      <header className={styles.searchbar}>
        <form className={styles.form} onSubmit={onFormSubmit}>
          <button type="submit" className={styles.btn}>
            <span className={styles.label}>Search</span>
          </button>

          <input
            className={styles.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={handleNameChange}
          />
        </form>
      </header>
    );
  }


Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export default Searchbar;