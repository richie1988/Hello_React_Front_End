import './App.css';
import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from './redux/hooks';
import { fetchGreeting } from './redux/slices/greetingSlice';

const App = () => {
  const dispatch = useAppDispatch();
  const greeting = useAppSelector((state) => state.greeting.value);
  const loading = useAppSelector((state) => state.greeting.loading);
  const error = useAppSelector((state) => state.greeting.error);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);

  return (
    <div className="App">
      <h1>Greetings from Rails Api</h1>
      <button
        type="button"
        onClick={() => {
          dispatch(fetchGreeting());
        }}
      >
        Refresh
      </button>
      {loading && <p>Loading...</p>}
      {error && (
      <p style={{ color: 'red' }}>
        No response from the server, Please start your rails server
      </p>
      )}

      <h2>{greeting}</h2>
    </div>
  );
};

export default App;
