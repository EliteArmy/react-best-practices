'use client';

import React, { memo, useCallback, useMemo, useState } from 'react';

const allUsers = [
  {
    id: 1,
    active: true,
    name: 'Maria',
  },
  {
    id: 2,
    active: true,
    name: 'John',
  },
  {
    id: 3,
    active: true,
    name: 'Nataly',
  },
];

const ToggleUserStatus = memo(function ToggleUser({
  toggleUser,
}: {
  toggleUser: () => void;
}) {
  console.log('ToggleUser Rerenders');

  return (
    <button
      className='px-4 py-2 bg-orange-400'
      onClick={toggleUser}>
      Toggle user
    </button>
  );
});

type User = {
  id: number;
  active: boolean;
  name: string;
};

const ShowUsers = memo(function ShowUsers({
  users,
  activeUsers,
}: {
  users: User[];
  activeUsers: number;
}) {
  console.log('ShowUsers Rerenders');

  return (
    <>
      <p>Active users: {activeUsers.toFixed(1)}%</p>
      {users.map((user) => (
        <p key={user.id}>
          {user.name}: {user.active + ''}
        </p>
      ))}
    </>
  );
});

export default function Memoization() {
  console.log('Memoization Rerenders');
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState(allUsers);

  // This computation will run on every rerender without useMemo
  const activeUsers = useMemo(
    () => (users.filter((user) => user.active).length / users.length) * 100,
    [users]
  );

  // A new function is created and assigned to this variable on each rerender without useCallback
  const toggleUser = useCallback(() => {
    const randomId = Math.floor(Math.random() * users.length);
    const updatedUser = users.map((user, index) =>
      index === randomId ? { ...user, active: !user.active } : user
    );
    setUsers(updatedUser);
  }, [users]);

  return (
    <section>
      <p>count: {count}</p>
      <button
        className='px-4 py-2 bg-slate-500'
        onClick={() => setCount((prev) => prev + 1)}>
        Increment {count}
      </button>
      <ToggleUserStatus toggleUser={toggleUser} />
      <ShowUsers
        users={users}
        activeUsers={activeUsers}
      />
    </section>
  );
}
