'use client'; // used only for nextjs

import React from 'react';

const Grandchild = ({ message }: { message: string }) => {
  console.log('Grandchild re-render');
  return <div>{message}</div>;
};

const Child = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = React.useState(0);
  console.log('Child re-render');

  return (
    <div className='flex flex-col'>
      <h1>This is a child component</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      {children}
    </div>
  );
};

export default function Container() {
  return (
    <section className='container'>
      <Child>
        <Grandchild message='Hello world!' />
      </Child>
    </section>
  );
}
