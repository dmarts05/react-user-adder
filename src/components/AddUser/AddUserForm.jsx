import { useRef, useState } from 'react';
import FormControl from './FormControl';
import ErrorModal from './ErrorModal';

export default function AddUserForm(props) {
  const usernameInputRef = useRef();
  const ageInputRef = useRef();

  const [isValid, setIsValid] = useState({ username: false, age: false });
  const [showModal, setShowModal] = useState(false);

  const checkUsernameIsValid = (username) => username.length > 0;

  const usernameChangeHandler = () => {
    if (checkUsernameIsValid(usernameInputRef.current.value)) {
      setIsValid((prev) => {
        return { ...prev, username: true };
      });
    } else {
      setIsValid((prev) => {
        return { ...prev, username: false };
      });
    }
  };

  const checkAgeIsValid = (age) => {
    return age > 0 && age <= 130;
  };

  const ageChangeHandler = () => {
    if (checkAgeIsValid(+ageInputRef.current.value)) {
      setIsValid((prev) => {
        return { ...prev, age: true };
      });
    } else {
      setIsValid((prev) => {
        return { ...prev, age: false };
      });
    }
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

    // Add new user
    props.addNewUser({
      username: usernameInputRef.current.value,
      age: +ageInputRef.current.value,
    });

    // Reset form
    usernameInputRef.current.value = '';
    ageInputRef.current.value = '';
    setIsValid({ username: false, age: false });
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
            ref={usernameInputRef}
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
            ref={ageInputRef}
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
        <ErrorModal
          msg='You must enter a username.'
          toggleModal={toggleModal}
        />
      ) : showModal && !isValid.age ? (
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
