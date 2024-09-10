'use client'; // used only for nextjs

import React, { useState } from 'react';
import { MAX_FREE_TIER, SENSITIVE_WORDS } from '@/app/lib/constants';

type Todo = {
  id: number;
  content: string;
  completed: boolean;
};

// const MAX_DATA = 10;

const initialData = [
  {
    id: 1,
    content: 'Check car oil',
    completed: false,
  },
  {
    id: 2,
    content: 'Check account balance',
    completed: true,
  },
];

export default function HardCodedValues() {
  const [todos, setTodos] = useState<Todo[]>(initialData);
  const [content, setContent] = useState('');

  return (
    <section>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.content}</div>
      ))}
      <form
        onSubmit={(e) => {
          e.preventDefault();

          if (todos.length === MAX_FREE_TIER) {
            console.log(`You need to sign in to add more than ${MAX_FREE_TIER} todos`);
            return;
          }

          if (SENSITIVE_WORDS.includes(content)) {
            console.log('Cannot save sensitive information');
            return;
          }

          setTodos((prev) => [
            ...prev,
            { id: prev.length + 1, content: content, completed: false },
          ]);

          setContent('');
        }}>
        <input
          name='content'
          placeholder='Type here'
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
        <button
          type='submit'
          className='py-2 px-4'>
          Submit
        </button>
      </form>
    </section>
  );
}
