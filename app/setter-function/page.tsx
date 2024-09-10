'use client';

import React, { useEffect, useState } from 'react';

const allUsers = [
  { id: 1, active: true, name: 'Maria' },
  { id: 2, active: true, name: 'John' },
  { id: 3, active: true, name: 'Nataly' },
];

export default function SetterFunction() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState(allUsers);

  useEffect(() => {
    setUsers((prev) => [...prev, { id: 4, active: true, name: 'Mike' }]);

    const intervalId = setInterval(() => {
      setCount((prev) => prev + 1);

      // Doing it like this will not work
      // setCount(count + 1);
      // setCount(count + 1);
      // setCount(count + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleClick = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  const handleClickAsync = () => {
    setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };

  return (
    <section>
      <p>{count}</p>
      <div>
        {users.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>
      <button
        onClick={handleClick}
        className='bg-blue-500 px-4 py-2 text-white rounded'>
        Add two more
      </button>
      <button
        onClick={handleClickAsync}
        className='bg-blue-500 px-4 py-2 text-white rounded'>
        Add Number after 1 sec
      </button>
    </section>
  );
}
