// Greeting.js
import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from './redux/hooks';
import { fetchGreeting } from './redux/slices/greetingSlice';

const Greeting = () => {
  const dispatch = useAppDispatch();
  const greeting = useAppSelector((state) => state.greeting.value);
  const loading = useAppSelector((state) => state.greeting.loading);
  const error = useAppSelector((state) => state.greeting.error);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  let content;
  if (loading) {
    content = <p>Loading...</p>;
  } else if (error) {
    content = (
      <p style={{ color: 'red' }}>
        No response from the server, Please start your rails server
      </p>
    );
  } else {
    content = <h2>{greeting}</h2>;
  }

  return (
    <div>
      <h1>Welcome to Our API Page</h1>
      {content}
    </div>
  );
};

export default Greeting;
