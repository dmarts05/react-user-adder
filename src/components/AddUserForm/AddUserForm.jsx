import { useState } from 'react';
import FormControl from './FormControl';
import ErrorModal from './ErrorModal';

export default function AddUserForm(props) {
  const [isValid, setIsValid] = useState({ username: false, age: false });
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const checkUsernameIsValid = (username) => username.length > 0;

  const usernameChangeHandler = (e) => {
    if (checkUsernameIsValid(e.target.value)) {
      setIsValid((prev) => {
        return { ...prev, username: true };
      });
    } else {
      setIsValid((prev) => {
        return { ...prev, username: false };
      });
    }

    setUsername(e.target.value);
  };

  const checkAgeIsValid = (age) => {
    return age > 0 && age <= 130;
  };

  const ageChangeHandler = (e) => {
    if (checkAgeIsValid(+e.target.value)) {
      setIsValid((prev) => {
        return { ...prev, age: true };
      });
    } else {
      setIsValid((prev) => {
        return { ...prev, age: false };
      });
    }

    setAge(e.target.value);
  };

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const submitUserHandler = (e) => {
    e.preventDefault();

    // Check that every condition has been met
    for (const condition in isValid) {
      if (!isValid[condition]) {
        // Show error modal
        toggleModal();
        return;
      }
    }

    // Reset form
    setIsValid({ username: false, age: false });
    setUsername('');
    setAge('');

    props.addNewUser({ username, age });
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
            value={username}
            placeholder='Name'
            onChange={usernameChangeHandler}
            className={`rounded-lg border-2 ${
              isValid.username ? 'border-zinc-900' : 'border-red-500'
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
            value={age}
            placeholder='18'
            onChange={ageChangeHandler}
            className={`rounded-lg border-2 ${
              isValid.age ? 'border-zinc-900' : 'border-red-500'
            } border-zinc-900 py-1 px-2`}
          />
        </FormControl>
        <div className='col-span-full flex flex-wrap content-center justify-center'>
          <button className='rounded-lg border-2 border-zinc-900 bg-zinc-900 py-2 px-4 text-lg text-white transition-colors duration-200 hover:bg-white hover:text-zinc-900'>
            Add User
          </button>
        </div>
      </form>
      {showModal && !isValid.username ? (
        <ErrorModal toggleModal={toggleModal}>
          You must enter a username
        </ErrorModal>
      ) : showModal && !isValid.age ? (
        <ErrorModal toggleModal={toggleModal}>
          You must enter an age between 1 and 130
        </ErrorModal>
      ) : (
        ''
      )}
    </>
  );
}
