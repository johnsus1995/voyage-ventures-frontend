import PropTypes from 'prop-types';
import styles from './ChipInput.module.scss';

const ChipInput = props => {
  const { className } = props;
  return (
    <div className={`${styles.ChipInput } ${className}`}>
    </div>
  );
};

ChipInput.defaultProps = {
  variant: 'default',
  className: '',
};

ChipInput.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
};

export default ChipInput;