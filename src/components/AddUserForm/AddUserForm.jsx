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
      <div className='flex flex-wrap content-center justify-center'>
        <button className='rounded-lg border-2 border-zinc-900 bg-zinc-900 py-2 px-4 text-lg text-white transition-colors duration-200 hover:bg-white hover:text-zinc-900'>
          Add User
        </button>
      </div>
    </form>
  );
}
