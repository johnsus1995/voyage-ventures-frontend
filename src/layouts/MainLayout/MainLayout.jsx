import Navbar from 'components/Navbar';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.scss';

const MainLayout = props => {
  const { className } = props;
  return (
    <div className={`${styles.MainLayout } ${className}`}>
      <Navbar/>
      <Outlet/>
    </div>
  );
};

MainLayout.defaultProps = {
  variant: 'default',
  className: '',
};

MainLayout.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
};

export default MainLayout;