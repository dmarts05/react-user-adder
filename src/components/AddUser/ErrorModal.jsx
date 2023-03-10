import { createPortal } from 'react-dom';

function Backdrop(props) {
  return (
    <div
      className='z-1 fixed inset-0 h-full w-full bg-zinc-900 opacity-50'
      onClick={props.toggleModal}
    />
  );
}

function ModalOverlay(props) {
  return (
    <div className='z-2 fixed inset-1/4 grid h-1/4 w-1/2 place-content-center gap-4 rounded-lg bg-white p-8 shadow-lg'>
      <h2 className='text-center text-3xl font-semibold uppercase text-red-500'>
        Error
      </h2>
      <p>{props.msg}</p>
      <button
        onClick={props.toggleModal}
        className='rounded-lg border-2 border-zinc-900 bg-zinc-900 py-2 px-4 text-lg text-white transition-colors duration-200 hover:bg-white hover:text-zinc-900'
      >
        Close
      </button>
    </div>
  );
}

export default function ErrorModal(props) {
  return (
    <>
      {createPortal(
        <Backdrop toggleModal={props.toggleModal} />,
        document.getElementById('backdrop-root')
      )}
      {createPortal(
        <ModalOverlay msg={props.msg} toggleModal={props.toggleModal} />,
        document.getElementById('overlay-root')
      )}
    </>
  );
}
