import { useReducer, useState } from 'react';
import FormControl from './FormControl';
import ErrorModal from './ErrorModal';

import { INITIAL_STATE, formReducer } from './formReducer';
import { ACTION_TYPES } from './formActionTypes';

export default function AddUserForm(props) {
  const [showModal, setShowModal] = useState(false);

  const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);

  const usernameChangeHandler = (e) => {
    dispatchForm({ type: ACTION_TYPES.CHANGE_USERNAME, value: e.target.value });
  };

  const usernameBlurHandler = () => {
    dispatchForm({ type: ACTION_TYPES.BLUR_USERNAME });
  };

  const ageChangeHandler = (e) => {
    dispatchForm({ type: ACTION_TYPES.CHANGE_AGE, value: e.target.value });
  };

  const ageBlurHandler = () => {
    dispatchForm({ type: ACTION_TYPES.BLUR_AGE });
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
        username: formState.username,
        age: +formState.age,
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
            value={formState.username}
            onChange={usernameChangeHandler}
            onBlur={usernameBlurHandler}
            className={`rounded-lg border-2 ${
              formState.isUsernameValid ? 'border-zinc-900' : 'border-red-500'
            } border-zinc-900 py-1 px-2`}
          />
        </FormControl>
        <FormControl>
          <label htmlFor='age' className='text-lg font-semibold'>
            Age
          </label>
          <input
            type='number'
            name='age'
            id='age'
            placeholder='18'
            value={formState.age}
            onChange={ageChangeHandler}
            onBlur={ageBlurHandler}
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
