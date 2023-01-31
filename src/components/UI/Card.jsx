export default function Card(props) {
  return (
    <div
      className={`w-3/4 self-center overflow-scroll rounded-xl bg-white p-4 shadow-lg ${props.className}`}
    >
      {props.children}
    </div>
  );
}
