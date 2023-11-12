import { useState } from 'react';

export const ErrorButton = (): JSX.Element => {
  const [throwError, setThrowError] = useState(false);

  const handleClick = (): void => {
    setThrowError(true);
  };

  if (throwError === true) throw new Error('Test error');

  return (
    <>
      <button data-haserror={throwError} onClick={handleClick}>
        Throw Error
      </button>
    </>
  );
};
