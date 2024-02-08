import PropTypes from 'prop-types';
import useForm from '../../hooks/useForm';
import Form from './Form';
import FormInputText from './FormInputText';

const AddTodoForm = ({ addTodo }) => {

  return (
    <Form handleSubmit={handleSubmit} submitMessage="Add Todo">
      <FormInputText
        name="todoText"
        text={values.todoText || ''}
        handleOnChange={handleChange}
        placeholder="Add todo"
      />
    </Form>
  );
};

AddTodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddTodoForm;