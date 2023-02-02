import PropTypes from 'prop-types';
import styles from './Register.module.scss';

const Register = () => {
  return (
    <div className={`${styles.Register }`}>
      register
    </div>
  );
};

Register.defaultProps = {
  className: '',
};

Register.propTypes = {
  className: PropTypes.string,
};

export default Register;