import UserCard from './UserCard';

export default function UserList(props) {
  return (
    <ul className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6'>
      {props.users.map((user) => (
        <UserCard key={user.id} username={user.username} age={user.age} />
      ))}
    </ul>
  );
}
