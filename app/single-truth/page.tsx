'use client';

import React, { useState } from 'react';

type User = {
  id: number;
  name: string;
};

export default function SingleTruth() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Nataly' },
    { id: 2, name: 'John' },
    { id: 3, name: 'Alice' },
  ]);

  const [activeUser, setActiveUser] = useState<number | null>(null);

  const selectedUser = users.find((user) => user.id === activeUser);

  const handleSelectUser = (user: User) => {
    setActiveUser(user.id);
  };

  return (
    <section>
      <h2>Select a User</h2>
      {users.map((user) => (
        <button
          className='bg-slate-500 px-4 py-2 m-1'
          key={user.id}
          onClick={() => handleSelectUser(user)}>
          {user.name}
        </button>
      ))}

      {selectedUser ? (
        <div>
          <h3>Active User:</h3>
          <p>{selectedUser.name}</p>
        </div>
      ) : (
        <div>
          <h3>No user selected</h3>
        </div>
      )}
    </section>
  );
}
