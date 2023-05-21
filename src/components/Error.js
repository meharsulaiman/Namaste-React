import React from 'react';
import { useRouteError } from 'react-router-dom';
const Error = () => {
  const er = useRouteError();

  console.log(er);
  return (
    <div className="error">
      <h1 className="error-h1">Oops!!!</h1>
      <h2 className="error-h2">{er?.error?.message}</h2>
    </div>
  );
};

export default Error;
