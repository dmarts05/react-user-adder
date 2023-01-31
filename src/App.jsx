import Card from './components/UI/Card';
import AddUserForm from './components/AddUserForm/AddUserForm';
import Users from './components/Users/Users';

export default function App() {
  return (
    <div className='flex h-screen w-screen flex-col flex-wrap content-center gap-8 bg-zinc-900 py-8'>
      <h1 className='w-fit self-center rounded-lg bg-white p-4 text-center text-4xl font-semibold'>
        User Adder
      </h1>
      <Card>
        <AddUserForm />
      </Card>
      <Card>
        <Users />
      </Card>
    </div>
  );
}
