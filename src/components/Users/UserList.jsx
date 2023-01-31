import UserCard from './UserCard';

export default function UserList(props) {
  return (
    <ul className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
      <UserCard />
      <UserCard />
    </ul>
  );
}
