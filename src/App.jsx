import Card from './components/UI/Card';
import AddUserForm from './components/AddUserForm/AddUserForm';
import Users from './components/Users/Users';
import { useState } from 'react';

export default function App() {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);

  const addNewUser = (newUser) => {
    newUser.id = count;
    setUsers((prev) => [newUser, ...prev]);
    setCount((prev) => prev + 1);
  };

  return (
    <div className='flex h-screen w-screen flex-shrink-0 flex-col gap-8 bg-zinc-900 py-8'>
      <h1 className='w-fit self-center rounded-lg bg-white p-4 text-center text-4xl font-semibold'>
        User Adder
      </h1>
      <Card className='flex-shrink-0'>
        <AddUserForm addNewUser={addNewUser} />
      </Card>
      <Card>
        <Users users={users} />
      </Card>
    </div>
  );
}
