export default function UserCard(props) {
  return (
    <li className='rounded-lg border-2 border-zinc-900 py-1 px-2 text-center italic'>
      {props.username} ({props.age} years old)
    </li>
  );
}
