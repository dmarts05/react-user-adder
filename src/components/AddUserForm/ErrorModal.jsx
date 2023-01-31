export default function ErrorModal(props) {
  return (
    <div className='fixed inset-0 z-10 grid place-content-center bg-zinc-900'>
      <div className='grid h-full w-full place-content-center gap-4 rounded-lg bg-white p-8'>
        <h2 className='text-center text-3xl font-semibold uppercase text-red-500'>
          Error
        </h2>
        <p>{props.children}</p>
        <button
          onClick={props.toggleModal}
          className='rounded-lg border-2 border-zinc-900 bg-zinc-900 py-2 px-4 text-lg text-white transition-colors duration-200 hover:bg-white hover:text-zinc-900'
        >
          Close
        </button>
      </div>
    </div>
  );
}
