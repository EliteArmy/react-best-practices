import React from 'react';

type HeaderProps = {
  children: React.ReactNode;
  className?: string;
};

const Header = ({ children, className }: HeaderProps) => {
  return (
    <h1 className={`text-3xl lg:text-6xl font-bold tracking-tight ${className}`}>
      {children}
    </h1>
  );
};

export default function LayoutInReusableComponents() {
  return (
    <section className='flex flex-col items-center'>
      <Header className='mb-10'>This is a nice header</Header>
      <ul>
        <li>Task 1: Water the plants</li>
        <li>Task 2: Buy groceries</li>
        <li>Task 3: Finish reading the book</li>
        <li>Task 4: Call Mom</li>
        <li>Task 5: Schedule a dentist appointment</li>
      </ul>
    </section>
  );
}
