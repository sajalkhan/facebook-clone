import { Button } from 'components/atoms/button';
import { mapModifiers } from 'libs/component';
import React, { useState } from 'react';

export type inputProps = {
  placeholder?: string;
  onSubmit?: (e: React.FormEvent, name: string) => void;
};

export const InputText: React.FC<inputProps> = ({ onSubmit, placeholder }) => {
  const componentClassName = mapModifiers('m-input');
  const className = `${componentClassName}`.trim();
  const [name, setName] = useState<string>('');

  return (
    <form
      className={className}
      onSubmit={e => {
        onSubmit && onSubmit(e, name);
        setName('');
      }}
    >
      <input
        value={name}
        className="m-input__text"
        type="text"
        placeholder={placeholder}
        onChange={e => setName(e.target.value)}
        autoFocus
      />
      <Button modifiers="secondary" size="small">
        Submit
      </Button>
    </form>
  );
};
