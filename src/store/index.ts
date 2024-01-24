import { useEffect, useState } from 'react';
import { globalStateType, listenerFn, actionsType } from '../types.ts';

let globalState: globalStateType = {
  products: [
    {
      id: '',
      title: '',
      description: '',
      isFavorite: false,
    },
  ],
};
let listeners: listenerFn[] = [];
let actions: actionsType = {};

export function useStore(shouldListen = true) {
  const setState = useState(globalState)[1];

  function dispatch(actionIdentifier: keyof actionsType, payload: string) {
    const newState = actions[actionIdentifier](globalState, payload);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }
  }

  useEffect(() => {
    if (shouldListen) {
      listeners.push(setState);
    }

    return () => {
      if (shouldListen) {
        listeners = listeners.filter(li => li !== setState);
      }
    };
  }, [setState, shouldListen]); // linter warns for setState as a dependency, but it's never going to change

  return [globalState, dispatch];
}

export const initStore: initStoreFn = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userActions };
};

type initStoreFn = (
  userActions: actionsType,
  initialState: globalStateType
) => void;
