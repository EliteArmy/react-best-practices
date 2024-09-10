'use client';

import React, { useState } from 'react';

type Status = 'init' | 'loading' | 'error' | 'success';

export default function UnionTypes() {
  const [status, setStatus] = useState<Status>('init');
  return <section>{status}</section>;
}
