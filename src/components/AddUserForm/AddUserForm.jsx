export default function AddUserForm() {
  return (
    <form action='' className='flex flex-col gap-4'>
      <div className='flex flex-col gap-2'>
        <label htmlFor='username' className='text-lg font-semibold'>
          Username
        </label>
        <input
          type='text'
          name='username'
          id='username'
          placeholder='John'
          className='rounded-lg border-2 border-zinc-900 py-1 px-2'
        />
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor='age' className='text-lg font-semibold'>
          Age{' '}
        </label>
        <input
          type='number'
          name='age'
          id='age'
          min='0'
          max='150'
          placeholder='18'
          className='rounded-lg border-2 border-zinc-900 py-1 px-2'
        />
      </div>
      <div className='flex justify-center content-center flex-wrap'>
        <button className='border-2 border-zinc-900 bg-zinc-900 text-white py-2 px-4 text-lg rounded-lg hover:bg-white hover:text-zinc-900 transition-colors duration-200'>
          Add User
        </button>
      </div>
    </form>
  );
}
