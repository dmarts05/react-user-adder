import { useState } from 'react';
import FormControl from './FormControl';

export default function AddUserForm(props) {
  const [isValid, setIsValid] = useState({ username: true, age: true });
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const checkUsernameIsValid = (username) => username.length > 0;

  const usernameChangeHandler = (e) => {
    if (checkUsernameIsValid(e.target.value)) {
      setUsername(e.target.value);
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

  const ageChangeHandler = (e) => {
    if (checkAgeIsValid(+e.target.value)) {
      setAge(e.target.value);
      setIsValid((prev) => {
        return { ...prev, age: true };
      });
    } else {
      setIsValid((prev) => {
        return { ...prev, age: false };
      });
    }
  };

  const submitUserHandler = (e) => {
    e.preventDefault();

    // Check that every condition has been met
    if (!checkUsernameIsValid(username) || !checkAgeIsValid(age)) {
      return;
    }
    for (const condition in isValid) {
      if (!isValid[condition]) {
        return;
      }
    }

    props.addNewUser({ username, age });
  };

  return (
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
  );
}
