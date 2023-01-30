import AddUserForm from './components/AddUserForm/AddUserForm';
import Card from './components/UI/Card';

export default function App() {
  return (
    <div className='flex h-screen w-screen flex-col flex-wrap content-center bg-zinc-900 py-8'>
      <Card>
        <AddUserForm />
      </Card>
    </div>
  );
}
