import { useEffect, useState } from "react";

const LS_KEY = "counter_state";

interface CounterState {
  startValue: number;
  maxValue: number;
  count: number;
}

const defaultState: CounterState = {
  startValue: 0,
  maxValue: 5,
  count: 0,
};

export const useCounterStorage = () => {
  const [state, setState] = useState<CounterState>(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        return { ...defaultState, ...parsed };
      }
    } catch {}
    return defaultState;
  });

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(state));
  }, [state]);

  const setValues = (start: number, max: number) => {
    setState({ startValue: start, maxValue: max, count: start });
  };

  const increment = () => {
    if (state.count < state.maxValue) {
      setState((prev) => ({ ...prev, count: prev.count + 1 }));
    }
  };

  const reset = () => {
    setState((prev) => ({ ...prev, count: prev.startValue }));
  };

  return {
    ...state,
    setValues,
    increment,
    reset,
  };
};
