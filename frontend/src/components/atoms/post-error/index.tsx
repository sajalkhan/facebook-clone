import React from 'react';
import { Button } from 'components/atoms/button';

interface PostErrorProps {
  error: string;
  setError: (value: string) => void;
}

export const PostError: React.FC<PostErrorProps> = ({ error, setError }) => {
  return (
    <div className="a-post-error">
      <div className="a-post-error__text">{error}</div>
      <Button modifiers="primary" size="small" onClick={() => setError('')}>
        Try again
      </Button>
    </div>
  );
};
