import Card from './components/UI/Card';
import AddUserForm from './components/AddUserForm/AddUserForm';
import Users from './components/Users/Users';

export default function App() {
  return (
    <div className='flex h-screen w-screen flex-col flex-wrap content-center bg-zinc-900 py-8 gap-8'>
      <Card>
        <AddUserForm />
      </Card>
      <Card>
        <Users />
      </Card>
    </div>
  );
}
