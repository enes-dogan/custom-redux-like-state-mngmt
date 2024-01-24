import { useEffect, useState } from 'react';
import { listenerFn } from '../types.ts';

let globalState = {};
let listeners: listenerFn[] = [];
let actions = {};

function useStore() {
  const setState = useState(globalState)[1];

  useEffect(() => {
    listeners.push(setState);

    return () => {
      listeners = listeners.filter(li => li !== setState);
    };
  }, [setState]);

  return 1;
}

export default useStore;
