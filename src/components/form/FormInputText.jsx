import PropTypes from 'prop-types';

const FormInputText = ({ text, name, onChange, ...rest }) => {
  return (
    <input
      type="text"
      name={name || 'text'}
      value={text}
      onChange={onChange}
      {...rest}
    />
  )
}

FormInputText.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  rest: PropTypes.object,
};

export default FormInputText;