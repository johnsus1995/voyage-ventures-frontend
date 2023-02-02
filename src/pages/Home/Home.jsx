import PropTypes from 'prop-types';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={`${styles.Home }`}>
      Home
    </div>
  );
};

Home.defaultProps = {
  className: '',
};

Home.propTypes = {
  className: PropTypes.string,
};

export default Home;