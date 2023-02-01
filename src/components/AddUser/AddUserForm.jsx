import { useReducer, useState } from 'react';
import FormControl from './FormControl';
import ErrorModal from './ErrorModal';

const formReducer = (state, action) => {
  switch (action.type) {
    case 'USERNAME_INPUT':
      return {
        ...state,
        usernameValue: action.value,
        isUsernameValid: action.value.length > 0,
      };
    case 'AGE_INPUT':
      return {
        ...state,
        ageValue: action.value,
        isAgeValid: +action.value > 0 && +action.value <= 130,
      };
    default:
      return {
        usernameValue: '',
        isUsernameValid: false,
        ageValue: '',
        isAgeValid: false,
      };
  }
};

export default function AddUserForm(props) {
  const [showModal, setShowModal] = useState(false);

  const [formState, dispatchForm] = useReducer(formReducer, {
    usernameValue: '',
    isUsernameValid: false,
    ageValue: '',
    isAgeValid: false,
  });

  const usernameChangeHandler = (e) => {
    dispatchForm({ type: 'USERNAME_INPUT', value: e.target.value });
  };

  const ageChangeHandler = (e) => {
    dispatchForm({ type: 'AGE_INPUT', value: e.target.value });
  };

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const submitUserHandler = (e) => {
    e.preventDefault();

    if (!formState.isUsernameValid || !formState.isAgeValid) {
      // Form is not valid, show error modal
      toggleModal();
    } else {
      // Form is valid, add new user
      props.addNewUser({
        username: formState.usernameValue,
        age: +formState.ageValue,
      });

      // Reset form
      dispatchForm({ type: 'RESET_FORM' });
    }
  };

  return (
    <>
      <form
        onSubmit={submitUserHandler}
        className='grid grid-cols-1 gap-4 sm:grid-cols-2'
      >
        <FormControl>
          <label htmlFor='username' className='text-lg font-semibold'>
            Username
          </label>
          <input
            type='text'
            name='username'
            id='username'
            placeholder='Name'
            value={formState.usernameValue}
            onChange={usernameChangeHandler}
            className={`rounded-lg border-2 ${
              formState.isUsernameValid ? 'border-zinc-900' : 'border-red-500'
            } border-zinc-900 py-1 px-2`}
          />
        </FormControl>
        <FormControl>
          <label htmlFor='age' className='text-lg font-semibold'>
            Age{' '}
          </label>
          <input
            type='number'
            name='age'
            id='age'
            placeholder='18'
            value={formState.ageValue}
            onChange={ageChangeHandler}
            className={`rounded-lg border-2 ${
              formState.isAgeValid ? 'border-zinc-900' : 'border-red-500'
            } border-zinc-900 py-1 px-2`}
          />
        </FormControl>
        <div className='col-span-full flex flex-wrap content-center justify-center'>
          <button className='rounded-lg border-2 border-zinc-900 bg-zinc-900 py-2 px-4 text-lg text-white transition-colors duration-200 hover:bg-white hover:text-zinc-900'>
            Add User
          </button>
        </div>
      </form>
      {showModal && !formState.isUsernameValid ? (
        <ErrorModal
          msg='You must enter a username.'
          toggleModal={toggleModal}
        />
      ) : showModal && !formState.isAgeValid ? (
        <ErrorModal
          msg='You must enter an age between 1 and 130.'
          toggleModal={toggleModal}
        />
      ) : (
        ''
      )}
    </>
  );
}
