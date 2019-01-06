import PropTypes from 'prop-types';

const ButtonProps = {
  defaultProps: {
    text: '',
    onClick: () => {},
    size: 'md',
    disabled: false,
  },
  propTypes: {
    text: PropTypes.string,
    onClick: PropTypes.func,
    size: PropTypes.oneOf(['xs','sm', 'md', 'lg', 'xl']),
    disabled: PropTypes.bool,
  },
};

export default ButtonProps;
