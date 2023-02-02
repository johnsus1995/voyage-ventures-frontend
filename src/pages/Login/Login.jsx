import PropTypes from 'prop-types';
import styles from './Login.module.scss';

const Login = () => {
  return (
    <div className={`${styles.Login }`}>
    </div>
  );
};

Login.defaultProps = {
  className: '',
};

Login.propTypes = {
  className: PropTypes.string,
};

export default Login;