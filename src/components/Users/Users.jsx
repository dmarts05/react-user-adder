import UserList from './UserList';

export default function Users(props) {
  return (
    <div className='flex flex-col justify-center gap-4'>
      <h2 className='text-center text-2xl font-semibold'>Users</h2>
      <UserList />
    </div>
  );
}
