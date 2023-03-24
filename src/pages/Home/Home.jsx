import PropTypes from 'prop-types';
import { useEffect } from 'react';
import styles from './Home.module.scss';
import * as tourActions from "redux/tour/actions"
import { useDispatch } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(tourActions.fetchAllTours())
  },[])

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