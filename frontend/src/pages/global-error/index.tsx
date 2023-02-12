import { Button } from 'components/atoms/button';
import { ErrorMessage } from 'components/atoms/error-message';
import { errorResParser } from 'libs/utils';
import React from 'react';

interface GlobalErrorProps {
  error?: Error;
  onReset?: () => void;
}

const GlobalError: React.FC<GlobalErrorProps> = ({ error, onReset }) => {
  const errorRes = errorResParser(error);

  return (
    <div className="p-global-error">
      <Button onClick={onReset} modifiers="transparent-black">
        X
      </Button>
      <ErrorMessage error={errorRes} />
    </div>
  );
};

export default GlobalError;
