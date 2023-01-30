export default function Card(props) {
  return (
    <div className='w-3/4 rounded-xl bg-white p-4 shadow-lg'>
      {props.children}
    </div>
  );
}
