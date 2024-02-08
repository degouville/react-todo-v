import PropTypes from 'prop-types'

const Form = ({ submitMessage, children, handleSubmit, ...rest }) => (
  <form onSubmit={handleSubmit} {...rest}>
    {children}
    <button type="submit">{submitMessage}</button>
  </form>
)

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  submitMessage: PropTypes.string,
  rest: PropTypes.object
}

Form.defaultProps = {
  submitMessage: 'Submit'
}


export default Form